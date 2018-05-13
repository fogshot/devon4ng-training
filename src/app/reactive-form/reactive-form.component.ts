import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { equalValidator } from './equalValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl(null, null),
      'email': new FormControl ('example@mail.com', null),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'passwordRepeat': new FormControl(null, [Validators.required, Validators.minLength(8), equalValidator('password')])
    });
  }

  onSubmitTemplateBased(registerForm) {
    console.log(registerForm);
  }

}
