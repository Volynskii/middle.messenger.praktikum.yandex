
import Block from '../../utils/Block';
import {tmpl} from "./chatMessage.tmpl.ts";


interface ChatMessageProps {
    className: string;
    message: string,
}

export class ChatMessage extends Block {
    constructor(props: ChatMessageProps) {
        super('div', props);
    }

    init() {
        this.element!.className = this.props.className;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
