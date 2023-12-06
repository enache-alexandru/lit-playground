import { html, css, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import quiz from './data/quiz.js';
import profiles from './data/profiles.js';
import content from './data/content.js';
import { style } from './styles/quiz.style.js';

export class IngQuizcc extends LitElement {
  static get styles() {
    return style;
  }

  static properties = {
    title: { type: String },
    subtitle: { type: String },
    headerImgSrc: { type: String },
    questions: { state: true },
    activeItem: { type: String },
    profiles: { state: true },
    score: { state: true },
    result: { type: Number },
    isDisabled: {},
    isFinished: {},
    labelBtn: {},
    touchedAnswers: {},
    footerTitle: { type: String },
    footerContent: { type: String },
    isMobile: {},
  };

  constructor() {
    super();
    this.title = content.title;
    this.subtitle = content.subtitle;
    this.headerImgSrc = content.headerImgSrc;
    this.footerTitle = content.footerTitle,
    this.footerContent = content.footerContent,
    this.isDisabled = true;
    this.questions = quiz;
    this.activeItem = null,
    this.profiles = profiles;
    this.profile = {};
    this.score = {};
    this.result = 0;
    this.isFinished = false;
    this.labelBtn = content.btnLabel;
    this.touchedAnswers = 0;
    this.desktopTitle = window.innerWidth > 768 ? html`<h1>${content.title}</h1>` : "";
    this.mobileTitle = window.innerWidth <= 768 ? html`<h1>${content.title}</h1>` : "";
  }


  displayQuestion(item) {
    return html`
      <div class="question-item item-${item.name}">
        <div class="question-text">${item.question}</div>
        <ul class="question-options">
          ${map(item.answers, (answer) => html`
            <li >
              
              <label for="${item.name + answer.id}" @click=${() => this.calculateScore(item.name, answer.isCorrect, answer.id)} class="${(item.name+answer.id) == this.activeItem ? '': ''}">
                <input type="radio" id="${item.name + answer.id}" name="${item.name}" value="${item.name + answer.id}" ?disabled=${this.isFinished} />
                <span class="checkmark"></span>
                <span class="question-id">${answer.id}.</span> ${answer.answer}
              </label>
            </li>
          `)}
        </ul>
      </div>
    `;
  }


  calculateScore(item, isCorrect, answerId) {
    if(!this.isFinished) {
      this.score[item] = isCorrect;

      if(!(Object.keys(this.score).length < this.questions.length)) {
        this.isDisabled = false;
      }

      this.activeItem = item+answerId;
    }
  }


  showResult() {
    this.result = 0;
    this.isFinished = true;
    //this.alertUnansweredQestions()

    for (const property in this.score) {
      if(this.score[property]) {
        this.result = this.result+1
      }
    }

    this.isDisabled = true;

    if(this.result >= 7) {
      this.profile = this.profiles.good;
    } else if(this.result >= 4) {
      this.profile = this.profiles.satisfactory;
    } else  {
      this.profile = this.profiles.bad;
    }
  }


  alertUnansweredQestions() {
    let currentKeys = []
    for(let i = 0; i <= this.questions.length; i++) {
      currentKeys.push('q'+i);
    }
    let touchedQuestions = Object.keys(this.score);
    let difference = currentKeys.filter(x => !touchedQuestions.includes(x));
    alert(difference)
  }


  render() {
    return html`
      
      <div class="questions-header layout grid grid-two-columns">
        ${this.mobileTitle}
        <div class="item vertical-centered">
          <div>
            ${this.desktopTitle}
            <p>${this.subtitle}</p>
          </div>
        </div>
        <div class="item header-img vertical-centered">
          <img src="${this.headerImgSrc}" class="img-responsive" />
        </div>
      </div>
      <div class="questions-container layout">
        ${map(this.questions, (item) => this.displayQuestion(item))}
        <div class="btn-wrapper">
          <button @click=${this.showResult} ?hidden=${this.isDisabled} class="btn">${this.labelBtn}</button>
        </div>
      </div>
      <div ?hidden=${!this.isFinished} class="profile-wrapper">
        <div class="layout profile-container">
          <div class="column-1 profile-summary">
            <div hidden>Corect answers: ${this.result}</div>
            <h3>Ai răspuns corect la ${this.result} întrebări din 8</h3>
            <div class="squared-smiley ${this.profile.img}"><span></span></div>
            <p>${this.profile.note}</p>
          </div>
          <div class="column-2 profile-description">
            <p><strong>${this.profile.title}</strong></p>
            <p>${this.profile.text}</p>
          </div>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="layout quiz-footer-container">
          ${this.footerContent}
          <div class="exclamation-mark"><span class="stick"></span> <span class="ball"></span></div>
        <div>
      </div>

    `;
  }
}
