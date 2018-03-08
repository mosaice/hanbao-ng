import { Component, OnInit } from '@angular/core';
import { Validators,  FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMapTo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../user.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {

    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }

    this.userService.register(this.validateForm.value);
  }

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private http: HttpClient
  ) {}

  emailError(): string {
    const { email: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) { return ''; }
    return errors.required ?
      'You must enter a email'
      :
      errors.email ?
      'Not a valid email'
      :
      errors.duplicated ?
      'E-mail already exists'
      :
      '';
  }

  nameError(): string {
    const { name: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) { return ''; }
    return errors.required ?
      'Please Input Your Name!'
      :
      errors.duplicated ?
      'userName already exists'
      :
      '';
  }

  passwordError(): string {
    const { password: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) {
      return '';
    }
    return errors.required ? 'You must enter a password' : errors.minlength ? 'Password need more than 8 digit!' : '';
  }

  checkPasswordError(): string {
    const { checkPassword: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) {
      return '';
    }
    return 'You must enter the same password!';
  }

  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  asyncValidatorCreator = (filed: string) =>
    (control: FormControl): any =>
      Observable
      .timer(500)
      .switchMapTo(this.http.post<Res<{}>>('[noErrorCatch]/user/validate', {[filed]: control.value}))
      .map(res => res.statusCode !== 200 ? { error: true, duplicated: true } : null)

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required], [this.asyncValidatorCreator('name')] ],
      email: [ null, [ Validators.required, Validators.email ], [this.asyncValidatorCreator('email')] ],
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
      checkPassword: [ null, [ this.passwordConfirmationValidator ] ],
    });
  }

}
