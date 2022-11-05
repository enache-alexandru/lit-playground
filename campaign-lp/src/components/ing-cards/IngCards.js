import { html, css, LitElement } from 'lit';
import { style } from '../ing-cards/styles/ing-cards.style';

export class IngCards extends LitElement {
  static get styles() {
    return  style;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
  }

  render() {
    return html`
      <div class="ing-cards layout col-three">
        <slot class="grid"></slot>
      </div>
    `;
  }
}