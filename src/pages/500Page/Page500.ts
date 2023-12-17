import { Title } from '../../components/title/title';
import { ErrorMessage } from '../../components/errorMessage/errorMessage';
import Block from '../../utils/Block';
import { tmpl } from './Page500.tmpl';

export class Page500 extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.titleError = new Title(
            {
                title: '500',
                className: 'title-not-found',
            },
        );
        this.children.errorMessage = new ErrorMessage(
            {
                message: 'server error, sorry',
            },
        );
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
