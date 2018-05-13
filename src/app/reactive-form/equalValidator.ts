import {ValidatorFn, AbstractControl} from '@angular/forms';

export function equalValidator(otherValue: string): ValidatorFn {
    return (c: AbstractControl): {[key: string]: any} => {
        const a = c.value;
        const b = c.root.get(otherValue);

        if (b && a !== b.value) {
          return { appValidateEqual: false };
        }
        return null;
    };
}
