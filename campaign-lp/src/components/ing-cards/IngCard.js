import { html, css, LitElement } from 'lit';

export class IngCard extends LitElement {
  static get styles() {
    return  css``;
  }

  static get properties() {
    return {
      title: { type: String },
      columns: { type: Number },
      img: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.img = "";
    this.text = "Lorem ipsum"
  }

  render() {
    return html`
      <div class="image-icon-wrapper">
          <img src="${this.img}" width="60px" alt="">
      </div>
      <div class="icon-box-item-title">
          ${this.text}
      </div>
    `;
  }
}