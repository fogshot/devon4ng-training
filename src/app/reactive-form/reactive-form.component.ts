import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { equalValidator } from './equalValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registerForm = this.formBuilder.group({
    name: this.formBuilder.group({
      first: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z ]*')]
      ],
      last: null
    }),
    email: 'example@mail.com',
    password: [null, [Validators.required, Validators.minLength(8)]],
    passwordRepeat: [null, [Validators.required, Validators.minLength(8), equalValidator('password')]]
  });

  get firstControl(): FormControl {
    return this.registerForm.get('name.first') as FormControl;
  }

  constructor(private formBuilder: FormBuilder) { }

  onSubmitTemplateBased() {
    console.log('SUBMIT');
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

}
