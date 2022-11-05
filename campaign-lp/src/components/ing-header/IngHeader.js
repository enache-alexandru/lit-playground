import { html, css, LitElement } from 'lit';
import { style } from './styles/ing-header.style';

const logo = new URL('../../common/images/logo.svg', import.meta.url).href;

export class IngHeader extends LitElement {
    static get styles() {
        return style;
    }

    static get properties() {
        return {
            href: { type: String },
        }
    }

    constructor() {
        super();
        this.href = "/";
    }

    render() {
        return html`<div class="layout">
            <a class="ing-logo" href="${this.href}">
                <img alt="open-wc logo" src=${logo} />
            </a>
        </div>`
    }
}