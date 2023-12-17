import { Title } from '../../components/title/title';
import { ErrorMessage } from '../../components/errorMessage/errorMessage';
import Block from '../../utils/Block';
import { tmpl } from './Page404.tmpl';
export class Page404 extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.titleError = new Title(
            {
                title: '404',
                className: 'title-not-found',
            },
        );
        this.children.errorMessage = new ErrorMessage(
            {
                message: 'not found, sorry',
            },
        );
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
