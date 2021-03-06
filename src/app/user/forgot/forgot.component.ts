import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['../user.component.css']
})
export class ForgotComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }

    this.userService.sendResetMail(this.validateForm.value);
  }

  constructor(private fb: FormBuilder, public userService: UserService) {
  }

  emailError(): string {
    const { email: { dirty, errors } } = this.validateForm.controls;
    if (!dirty || !errors) {
      return '';
    }
    return errors.required ? 'You must enter a email' : errors.email ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ]
    });
  }
}
