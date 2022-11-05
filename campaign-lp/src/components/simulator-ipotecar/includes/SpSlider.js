import { html, css, LitElement } from 'lit';
import '@spectrum-web-components/slider/sync/sp-slider.js';

export class SpSlider extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
            background: red;
        }
            #controls {
    box-sizing: border-box;
    display: inline-block;
    min-height: var(--spectrum-slider-height);
    position: relative;
    vertical-align: top;
    width: calc(100% - var(--spectrum-slider-controls-margin)*2);
    z-index: auto;
}
        `;
    }

    static get properties() {
        return {

        }
    }

    constructor() {
        super();
    }

    render() {
        return html`SP Slider`;
    }
}