import { html, css, LitElement } from 'lit';
import { style } from './styles/heading-bars.style';

export class HeadingBars extends LitElement {
  static get styles() {
    return style;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      animate: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.animate = "";
  }

  animation() {
    setTimeout(() => {
        this.animate = "animate";
    }, 100);
    return this.animate;
  }

  render() {
    return html`
        <div class="heading-bars ${this.animation()}">
            <div class="heading-wrapper">
                <div class="heading-container">
                    <h1 class="headingbar-headline">
                        <span class="headingbar-slot">sHop pe loc</span>
                        <span class="headingbar-slot">sHop pe loc</span>
                        <span class="headingbar-slot">sHop pe loc</span>
                    </h1>
                    <div class="headingbar-button">
                        <a  class="ripple-effect hero-link"
                            href="https://ing.ro/lp/credit-card-shopping"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-event="gaEvent"
                            data-action="click" 
                            data-category="banner"
                            data-label="Află mai multe">
                                Află mai multe
                        </a>
                    </div>
                    <div class="headingbar-picture center-right zoom">
                        <img src="assets/images/credit-card-shopping-_1280x400.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}
