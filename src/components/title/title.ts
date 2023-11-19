import { tmpl } from './title.tmpl.ts';
import Block from '../../utils/Block';


interface TitleProps {
    title: string;
    className?: string;
}

export class Title extends Block {
    constructor(props: TitleProps) {
        super('h1', props);
    }

    init() {
        this.element!.className = `title ${this.props.className}`;
        this.element!.innerText = `title ${this.props.className}`;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
