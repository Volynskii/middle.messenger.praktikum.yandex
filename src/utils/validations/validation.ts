import {
  emailRegExp, loginRegExp, nameRegExp, passwordRegExp, phoneRegExp,
} from './RegExp';


export const validation = (name: string, regExp: RegExp) => {
    const input = document.getElementById(name) as HTMLInputElement;
    const error = document.getElementById(`error_${name}`);
    console.log('input!', input)
    console.log('error!',error)

    if (input?.value) {
      input?.classList.remove('invalidInput');
      error?.classList.add('displayNone');
      console.log('value!', input.value)
      console.log('input?.value.match(regExp)',input?.value.match(regExp))
      return input?.value.match(regExp);
    }
    error?.classList.remove('displayNone');
    input?.classList.add('invalidInput');

    return null;
};

export const validateLogin = () => {
    console.log('validate login!')
  return validation('login', loginRegExp);
};

export const validateEmail = () => {
  return validation('email', emailRegExp)
};

export const validatePassword = (fieldName: string) => {return validation(fieldName, passwordRegExp)
};

export const validateRepeatPassword = (fieldName: string, pPasw: string) => {
  const input = document.getElementById(fieldName) as HTMLInputElement;
  const password = document.getElementById(pPasw) as HTMLInputElement;

  if (password.value === input.value) {
    return validation(
      fieldName,
      passwordRegExp,
    );
  }

  return null;
};

export const validateName = (fieldName: string) => {
  return validation(
    fieldName,
    nameRegExp,
  );
};

export const validatePhone = () => {
  return validation(
    'phone',
    phoneRegExp,
  );
};

export const notEmptyValidator = (value: string) => {
  return value.trim().length > 0;
};
