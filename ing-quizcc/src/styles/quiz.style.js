import {css} from 'lit';

const baseColor = css`#ff6200`;
const baseFontSize = css`16px`;

export const style = [css`
  :host {
    display: block;
    color: #333;
    font-size: 16px;
    font-family: 'ing_me_regular', Arial;
    line-height: 1.4;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, .btn, strong, b {
    font-family: 'ing_me_bold', Arial;
  }
  h1 {
    font-size: 36px;
    line-height: 43px;
    color: #525199;
  }
  h3 {
    color: #525199;
  }
  .img-responsive {
    max-width: 100%;
  }
  .layout {
    max-width: 1230px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  .grid {
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .grid-two-columns .item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .header-img {
    padding-left: 15px;
  }
  .vertical-centered {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
  .question-text {
    background-color: #ff6200;
    color: #fff;
    border-radius: 6px;
    padding: 15px;
    font-size: 22px;
    position: relative;
    display: inline-block;
    margin-bottom: -15px;
    font-family: 'ing_me_bold', Arial;
  }
  .question-options {
    border: 2px solid #ff6200;
    border-radius: 6px;
    margin: 0 0 30px;
    padding: 30px 15px 15px;
    display: block;
    list-style: none;
  }
  .question-options li {
    margin-bottom: 10px;
  }
  .question-options label {
    display: block;
    padding: 5px 5px 5px 40px;
    cursor: pointer;
    position: relative;
    border-radius: 6px;
  }
  .question-options label.active {
    background-color: #f7f7f7;
  }
  .question-options input {
    display: none;
  }
  .checkmark {
    position: absolute;
    top: 4px;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #eee;
    border: 1px solid #ff6200;
    border-radius: 50%;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff6200;
    transition: all 0.2s ease;
  }
  input:checked ~ .checkmark:after {
    opacity: 1;
  }
  .question-id {
    color: #ff6200;
  }
  .btn-wrapper {
    text-align: center;
    margin-bottom: 30px;
  }
  .btn {
    background-color: #525199;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn[disabled] {
    background-color: rgba(19, 1, 1, 0.3);
    cursor: default;
  }
  .squared-smiley {
    width: 50px;
    height: 50px;
    background: #ff6200;
    position: relative;
    margin: auto;
  }
  .squared-smiley:after,
  .squared-smiley:before {
    content: "";
    display: block;
    width: 5px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 16px;
    left: 14px;
  }
  .squared-smiley:after {
    left: auto;
    right: 14px;
  }
  .squared-smiley span {
    display: block;
    width: 30px;
    height: 30px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    left: 10px;
    bottom: 14px;
    border-radius: 50%;
  }
  .squared-smiley.happy span {
    width: 35px;
    height: 68px;
    left: 7px;
    bottom: 14px;
    border-radius: 50%;
  }

  .squared-smiley.meh span {
    border-radius: 0;
    width: 18px;
    border: none;
    height: 2px;
    background: #fff;
    left: 16px;
    bottom: 15px;
  }

  .profile-wrapper {
    position: relative;
    background-color: #cbcbdf;
  }
  .profile-wrapper:before {
    content: "";
    display: block;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    width: 50%;
    background: #e5e5ed;
  }
  .profile-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .profile-summary {
    flex: 0 0 40%;
    max-width: 40%;
    padding: 30px 15px;
    text-align: center;
  }
  .profile-summary h3 {
    color: #525194
  }
  .profile-description {
    flex: 0 0 60%;
    max-width: 60%;
    background-color: #cbcbdf;
    padding: 30px 15px;
  }
  .quiz-footer {
    background-color: #f7f7f7;
    border-bottom: 4px solid rgb(82, 81, 153);
    margin-bottom: 60px;
  }
  .quiz-footer-container {
    padding: 15px 150px 15px 15px;
    min-height: 300px;
    position: relative;
  }
  .exclamation-mark {
    position: absolute;
    right: 15px;
    bottom: -4px;
    overflow: hidden;
    height: 270px;
  }
  .exclamation-mark .stick {
    display: block;
    border-top: 200px solid rgb(82, 81, 153);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    width: 74px;
    position: relative;
    height: 200px;
  }
  .exclamation-mark .stick:after {
    content: "";
    display: block;
    border-top: 192px solid #f7f7f7;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    height: 0px;
    width: 66px;
    position: absolute;
    bottom: 4px;
    left: -11px;
  }
  .exclamation-mark .ball {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
    border: 4px solid rgb(82, 81, 153);
    position: absolute;
    left: 8px;
    bottom: -8px;
  }
  .exclamation-mark .ball:after {
    content: "";
    display: block;
    height: 52px;
    width: 52px;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    background-color: #fff;
  }
  @media(max-width: 768px) {
    .header-img {
      overflow: hidden;
      position: relative;
      left: 15px;
      padding-left: 0;
    }
    .header-img img {
      position: relative;
      left: 30px;
    }
  }
`]