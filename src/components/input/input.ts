
import Block from '../../utils/Block';
import {tmpl} from "./input.tmpl.ts";


interface InputProps {
    label: string,
    labelValue: string,
    type: string,
    events?: {
        focus?: () => void;
        change?: () => void;
    }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('input', props);
    }

    init() {
        this.element!.className = 'input';
        (this.element! as HTMLInputElement).name = this.props.label;
        (this.element! as HTMLInputElement).id = this.props.label;
        (this.element! as HTMLInputElement).type = this.props.type;
        (this.element! as HTMLInputElement).placeholder = this.props.placeholder ? this.props.placeholder : '';
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
