import './styles.scss';
import { AuthPage } from './pages/auth/auth';
import { Registration } from './pages/registration/registration';
import { DefaultPage } from './pages/defaultPage/defaultPage';
import { EditProfilePage } from './pages/editProfile/editProfile';
import { ChatPage } from './pages/chat/chat';
import { Page404 } from './pages/404Page/Page404';
import { Page500 } from './pages/500Page/Page500';


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
        case '/404': {
            return new Page404();
        }
        case '/500': {
            return new Page500();
        }

        default: {
            return new DefaultPage();
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    if (root) {
        const component = getPage();
        root.append(component.element!);
        component.dispatchComponentDidMount();
    }
});
