import './styles.scss';
import {AuthPage} from './pages/auth/auth.ts';
import { Registration } from './pages/registration/registration.ts';
import { DefaultPage } from "./pages/defaultPage/defaultPage.ts";
import {EditProfilePage} from "./pages/editProfile/editProfile.ts";
import {ChatPage} from "./pages/chat/chat.ts";


const getPage = () => {
    switch (window.location.pathname) {
        case '/auth': {
            return new AuthPage();
        }
        case '/registration': {
            return new Registration();
        }
        case '/edit': {
            return new EditProfilePage();
        }
        case '/chat': {
            return new ChatPage();
        }
        default: {
            return new DefaultPage();
        }
    }

};

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
  console.log('render!')
    if (root) {
        const component = getPage();
        root.append(component.element!);
        component.dispatchComponentDidMount();
    }
});
