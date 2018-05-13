import { Directive, forwardRef, Attribute } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateEqualDirective, multi: true }
]
})
export class ValidateEqualDirective implements Validator {

  constructor(@Attribute('appValidateEqual') public otherValue: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
    const a = c.value;
    const b = c.root.get(this.otherValue);

    if (b && a !== b.value) {
      return { appValidateEqual: false };
    }
    return null;
  }

}
