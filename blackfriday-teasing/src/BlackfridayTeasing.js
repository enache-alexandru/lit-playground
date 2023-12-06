import { html, css, LitElement } from 'lit';
import { style } from './styles/teaser.style.js';

function sendGtmTapNumber(taps) {
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      "event": "numberOfTaps",
      "event_category": "LP Black Friday",
      "event_action": "taps: " + taps,
      "event_label": "Black Friday taps",
      "event_taps": taps
  })
  }
}


export class BlackfridayTeasing extends LitElement {
  static get styles() {
    return style;
  }

  static properties = {
    header: { type: String },
    subHeader: { type: String },
    counter: { type: Number },
    timer: { type: Number },
    now: { type: String },
    startCounting: {type: Boolean},
    finishCounting: {type: Boolean},
    tapTimer: { type: Number },
    tips: {},
    tipIndex: { type: Number },
    resetIsDisabled: {type: Boolean},
  };

  constructor() {
    super();
    this.header = 'Lorem ipsum dolor sit amet';
    this.subHeader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    this.counter = 0;
    this.startCounting = false;
    this.finishCounting = false;
    this.now = 0;
    this.tapTimer = 1;
    this.tips = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ",
    ];
    this.tipIndex = 0;
    this.resetIsDisabled = true;
  }

  _increment() {
    this.tapTimer = 300;
    if(this.startCounting == false) {
      this.startCounting = true;
      this.connectedCallback()
    }

    if(this.startCounting) this.counter += 1;
  }

  connectedCallback() {
    // be sure to call the super
    super.connectedCallback();
    let count = this.tapTimer;
    if(this.startCounting) {
      this.interval = window.setInterval(() => {
        count--;
        this.now = count != 0 ? String((count/100).toFixed(2)).replace('.',':') : this.disconnectedCallback();
      }, 10);
    }

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.interval);
    this.startCounting = false;
    this.finishCounting = true;
    sendGtmTapNumber(this.counter);
    setTimeout(() => {
      this.resetIsDisabled = false;
    }, "1000");
  }

  _reset () {
    this.counter = 0;
    this.finishCounting = false;
    if(this.tipIndex < this.tips.length - 1) {
      this.tipIndex += 1;
    } else {
      this.tipIndex = 0;
    }
    this.resetIsDisabled = true;
  }

  render() {
    return html`
      <div class="wrapper-bf text-center">
        ${this.finishCounting ? 
          html`
          <div>
            <h2>Felicitări, ai o viteză de <span class="is-orange">${this.counter} taps/3 seconds</span></h2>
            <p style="font-size: 24px;">Sfat pentru Black Friday:</p>
            <h1 class="is-orange unselectable">${this.tips[this.tipIndex]}</h1>
            <button class="reset-tapping unselectable" @click=${this._reset} ?disabled=${this.resetIsDisabled}>Test again</button>
          </div>
          `
          : html`
          <h1 style="margin: 0 0 25px">${this.header}</h1>
          <p style="margin-bottom: 20px;font-size:22px;">${this.subHeader}</p>
          <div class="button-bf-wrapper">
            <button class="button-bf unselectable" @click=${this._increment}><span>Click</span></button>
          </div>
          <p>X ${this.counter}</p>
          <div>${this.startCounting ? "You have "+this.now+ " seconds" : null} </div>
        `}
      </div>
    `;
  }
}

