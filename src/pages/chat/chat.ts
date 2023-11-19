import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl.ts';
import {UserContact} from "../../components/userContact/userContact.ts";
import {ChatMessage} from "../../components/chatMessage/chatMessage.ts";


export class ChatPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.userContact = new UserContact({
            name: 'Антон',
            message: 'Привет',
            time: '10:30',
            unread: 4
        });
        this.children.chatMessage = new ChatMessage({
            className:'chat__friend-message',
            message:'Привет!'
        });
        this.children.chatMessage2 = new ChatMessage({
            className:'chat__your-message',
            message:'Привет!'
        });

    }

    render() {
        console.log('this props', this.props)
        return this.compile(tmpl, this.props);
    }

}
