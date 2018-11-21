import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  exampleEmail = 'yourName@domain.com';

  contact: Object = {
  };

  login: Object = {
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased(registerForm) {
      console.log(registerForm);
  }

}
