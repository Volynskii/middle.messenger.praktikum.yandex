import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import { UserContact } from '../../components/userContact/userContact';
import { ChatMessage } from '../../components/chatMessage/chatMessage';


export class ChatPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.userContact = new UserContact({
            name: 'Антон',
            message: 'Привет',
            time: '10:30',
            unread: 4,
        });
        this.children.chatMessage = new ChatMessage({
            className: 'chat__friend-message',
            message: 'Привет!',
        });
        this.children.chatMessage2 = new ChatMessage({
            className: 'chat__your-message',
            message: 'Привет!',
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
