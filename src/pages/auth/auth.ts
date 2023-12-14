import { Title } from '../../components/title/title';
import Block from '../../utils/Block';
import { tmpl } from './auth.tmpl';
import { InputContainer } from '../../components/inputContainer/inputContainer';
import { InputSubmit } from '../../components/inputSubmit/inputSubmit';
import { Link } from '../../components/link/link';
import { validateLogin, validatePassword } from '../../utils/validations/validation';

interface AuthFormType {
    login: string;
    password: string;
}

export class AuthPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.titleAuth = new Title(
            {
            title: 'Вход',
            className: 'title-auth',
        }
        );
        this.children.inputContainerLogin = new InputContainer({
            label: 'login',
            labelValue: 'Логин',
            className: 'input-container',
            type: 'text',
            events: { focus: () => validateLogin() },
            errorMessage: 'неверный логин',
        });
        this.children.inputContainerPassword = new InputContainer(
            {
            label: 'password',
            labelValue: 'Пароль',
            className: 'input-container',
            type: 'password',
            events: { focus: () => validatePassword('password') },
            errorMessage: 'неверный пароль',
        }
        );
        this.children.inputSubmit = new InputSubmit({
            value: 'Login',
            events: { click: (evt: MouseEvent) => {
                evt.preventDefault()
                    this.submitForm()
                }}
        });
        this.children.link = new Link ({
            text: 'Нет аккаунта?',
        })
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    submitForm() {
        if (validateLogin() && validatePassword('password')) {
            const form = document.querySelector('.form');
            const login = form?.querySelector('[name="login"]') as HTMLInputElement;
            const password = form?.querySelector('[name="password"]') as HTMLInputElement;

            const data: AuthFormType = {
                login: login.value,
                password: password.value,
            };
            console.log(data);
        }
        else {
            console.log('not valid');
        }
    }
}
