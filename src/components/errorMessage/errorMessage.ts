import { tmpl } from './errorMessage.tmpl';
import Block from '../../utils/Block';


interface ErrorMessageProps {
    className?: string;
    message: string
}

export class ErrorMessage extends Block {
    constructor(props: ErrorMessageProps) {
        super('div', props);
    }

    init() {
        this.element!.className = this.props.className ? this.props.className : `message`;
        this.element!.innerText = this.props.message;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
