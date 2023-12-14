import './styles.scss';
import { AuthPage } from './pages/auth/auth';
import { Registration } from './pages/registration/registration';
import { DefaultPage } from './pages/defaultPage/defaultPage';
import { EditProfilePage } from './pages/editProfile/editProfile';
import { ChatPage } from './pages/chat/chat';


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
