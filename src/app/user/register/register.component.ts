import { Component, OnInit } from '@angular/core';
import { Validators,  FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  }

  constructor(private fb: FormBuilder) {
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

  checkPasswordError(): string {
    console.log(this.validateForm.controls.checkPassword);
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
      userName: [ null, [ Validators.required ] ],
      email: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required, Validators.minLength(8) ] ],
      checkPassword: [ null, [ this.passwordConfirmationValidator ] ],
    });
  }
}
