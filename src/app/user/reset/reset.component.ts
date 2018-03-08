import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../user.component.css']
})
export class ResetComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }

    this.userService.resetPassword({
      userKey: this.routerState.snapshot.queryParams.userKey,
      password: this.validateForm.controls.password.value
    });
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private routerState: ActivatedRoute) {
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

  ngOnInit() {
    this.validateForm = this.fb.group({
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
      checkPassword: [ null, [ this.passwordConfirmationValidator ] ],
    });
  }
}
