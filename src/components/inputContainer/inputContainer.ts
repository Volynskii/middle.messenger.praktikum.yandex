
import Block from '../../utils/Block';
import { tmpl } from './inputContainer.tmpl';
import { Input } from '../input/input';

interface InputContainerProps {
    label: string,
    labelValue: string,
    className:string,
    type: string,
    errorMessage: string,
    events?: {
        focus?: () => void;
    }
}

export class InputContainer extends Block {
    constructor(props: InputContainerProps) {
        super('div', props);
    }

    init() {
        this.element!.className = this.props.className;
        this.children.input = new Input({
            label: this.props.label,
            labelValue: this.props.labelValue,
            type: this.props.type,
            events: this.props.events,
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
