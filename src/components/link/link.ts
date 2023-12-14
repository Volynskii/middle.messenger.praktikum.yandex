
import Block from '../../utils/Block';
import { tmpl } from './link.tmpl';


interface InputSubmitProps {
    text: string

}

export class Link extends Block {
    constructor(props: InputSubmitProps) {
        super('a', props);
    }

    init() {

    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
