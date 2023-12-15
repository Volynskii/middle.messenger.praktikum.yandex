import Block from '../../utils/Block';
import { tmpl } from './defaultPage.tmpl';


export class DefaultPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {

    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
