import { Title } from '../../components/title/title.ts';
import Block from '../../utils/Block';
import { tmpl } from './editProfile.tmpl.ts';
import {InputContainer} from "../../components/inputContainer/inputContainer.ts";
import {InputSubmit} from "../../components/inputSubmit/inputSubmit.ts";
import {
    validatePhone,
    validateName,
    validateEmail,
    validateLogin,
    validatePassword
} from '../../utils/validations/validation';

interface EditFormType {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    password_repeat: string;
}

export class EditProfilePage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.titleAuth = new Title({
            title: 'Редактировать',
            className:'title-registration'
        });
        this.children.inputContainerEmail = new InputContainer({
            label:"email",
            labelValue:"Почта",
            className:'input-container',
            type: 'text',
            events: { focus: () => validateEmail() },
            errorMessage: 'неверный почта',
        });
        this.children.inputContainerFirstName = new InputContainer({
            label:"first_name",
            labelValue:"Имя",
            className:'input-container',
            type: 'text',
            events: { focus: () => validateName('first_name') },
            errorMessage: 'Неверное имя',
        });
        this.children.inputContainerSecondName = new InputContainer({
            label:"second_name",
            labelValue:"Фамилия",
            className:'input-container',
            type: 'text',
            events: { focus: () => validateName('second_name') },
            errorMessage: 'Неверная фамилия',
        });
        this.children.inputContainerPhone = new InputContainer({
            label:"phone",
            labelValue:"Телефон",
            className:'input-container',
            type: 'text',
            events: { focus: () => validatePhone() },
            errorMessage: 'Неправильный телефон',
        });
        this.children.inputContainerLogin = new InputContainer({
            label:"login",
            labelValue:"Логин",
            className:'input-container',
            type: 'text',
            events: { focus: () => validateLogin() },
            errorMessage: 'Неверный логин',
        });
        this.children.inputContainerPassword = new InputContainer({
            label:"password",
            labelValue:"Пароль",
            className:'input-container',
            type: 'password',
            events: { focus: () => validatePassword('password') },
            errorMessage: 'Неправильный пароль',
        });
        this.children.inputContainerPasswordAgain = new InputContainer({
            label:"password_again",
            labelValue:"Пароль (ещё раз)",
            className:'input-container',
            type: 'password',
            events: { focus: () => validatePassword('password_again') },
            errorMessage: 'Не совпадает',
        });
        this.children.inputSubmit = new InputSubmit({
            value: 'Save',
            events: { click: (evt: MouseEvent) => {
                    evt.preventDefault()
                    this.submitForm()
                }}
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    submitForm() {
        if (validateEmail()
            && validateLogin()
            && validateName('first_name')
            && validateName('second_name')
            && validatePhone() && validatePassword('password')
            && validatePassword('password_repeat')) {
            const form = document.querySelector('.form');
            const email = form?.querySelector('[name="email"]') as HTMLInputElement;
            const login = form?.querySelector('[name="login"]') as HTMLInputElement;
            const firstName = form?.querySelector('[name="first_name"]') as HTMLInputElement;
            const secondName = form?.querySelector('[name="second_name"]') as HTMLInputElement;
            const phone = form?.querySelector('[name="phone"]') as HTMLInputElement;
            const password = form?.querySelector('[name="password"]') as HTMLInputElement;
            const passwordRepeat = form?.querySelector('[name="password_again"]') as HTMLInputElement;

            const data: EditFormType = {
                email: email.value,
                login: login.value,
                first_name: firstName.value,
                second_name: secondName.value,
                phone: phone.value,
                password: password.value,
                password_repeat: passwordRepeat.value,
            };
            console.log(data);
        } else {
            console.log('not valid!');
        }
    }
}
