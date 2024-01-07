
import Block from '../../utils/Block';
import { tmpl } from './userContact.tmpl';


interface InputProps {
    name: string,
    message: string,
    time: string,
    unread: number
}

export class UserContact extends Block {
    constructor(props: InputProps) {
        super('li', props);
    }

    init() {
        this.element!.className = 'list-item';
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
