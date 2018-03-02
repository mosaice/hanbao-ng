import { Component, OnInit } from '@angular/core';
import { Validators,  FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService) {
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }

    this.userService.login(this.validateForm.value);
  }

  emailError(): string {
    const { email: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) {
      return '';
    }
    return errors.required ? 'You must enter a email' : errors.email ? 'Not a valid email' : '';
  }

  passwordError(): string {
    const { password: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) {
      return '';
    }
    return errors.required ? 'You must enter a password' : errors.minlength ? 'Password need more than 8 digit!' : '';
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
    });

  }

}
