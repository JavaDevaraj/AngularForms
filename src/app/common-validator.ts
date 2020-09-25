import { AbstractControl, ValidatorFn } from '@angular/forms';
export class CommonValidator {
  
  
  static ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== undefined && !isNaN(control.value)) {
          if(control.value < 18) {
            return { 'belowRange': true };
          } else if(control.value > 45) {
            return { 'aboveRange': true };
          }
        }
        return null;
    }
  
  static passwordValidator(control: AbstractControl) :{[key: string]:boolean} | null {
    if(control.value !== undefined ) {
      let minNumberofChars = 6;
      let maxNumberofChars = 16;
      let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if( control.value.length < minNumberofChars ) {
        return { 'minlength': true };
      } else if(control.value.length > maxNumberofChars) {
        return { 'maxlength': true };
      } else if(!regularExpression.test(control.value)) {
        return { 'rightPassword': true };
      }
    }
    return null;
  }
  
  static emailValidator(control : AbstractControl) : {[key: string]:boolean } | null {
    let regularExpression= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(control.value !== undefined && !regularExpression.test(control.value)) {
        return { 'validEmailId': true };
      }
    return null;
  }
  
  static confirmPasswordValidator(control: AbstractControl) :{[key: string]:boolean} | null {
    
    if(control.value !== undefined ) {
      let passwordStr = "";
      if(control.root !== undefined){
        let controls = control.root['controls'];
        if(controls !== undefined ) {
          passwordStr=controls['password'].value;
        }
      }
      let minNumberofChars = 6;
      let maxNumberofChars = 16;
      let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if( control.value.length < minNumberofChars ) {
        return { 'minlength': true };
      } else if(control.value.length > maxNumberofChars) {
        return { 'maxlength': true };
      } else if(control.value != passwordStr) {
        return { 'correctPassword': true };
      } else if(!regularExpression.test(control.value)) {
        return { 'rightPassword': true };
      }
    }
    return null;
  }
  
}

// Form level validation
export function passordCheckValidator(control: AbstractControl) :{[key: string]:boolean} | null {
  const confirmStr = control.get('confirmPassword');
    const passwordStr1 = control.get('password');
    if(passwordStr1 && confirmStr)
    console.log("password:",passwordStr1.value,", confirmPassword:",confirmStr.value);
  return null
}
