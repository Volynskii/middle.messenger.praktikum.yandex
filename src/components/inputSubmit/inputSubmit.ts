
import Block from '../../utils/Block';
import {tmpl} from "./inputSubmit.tmpl.ts";


interface InputSubmitProps {
    value: string
    events?: {
        click: (evt: MouseEvent) => void;
    };
}

export class InputSubmit extends Block {
    constructor(props: InputSubmitProps) {
        super('input', props);
    }

    init() {
        (this.element! as HTMLInputElement).className = 'input input-submit';
        (this.element! as HTMLInputElement).value = this.props.value;
        (this.element! as HTMLInputElement).type = 'submit';
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
