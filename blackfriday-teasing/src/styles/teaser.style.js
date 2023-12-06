import {css} from 'lit';

export const style = [css`
  :host {
    display: block;
    color: #fff;
    font-size: 16px;
    font-family: 'ing_me_regular', Arial;
    line-height: 1.4;
    background: #000;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  *{
    touch-action: manipulation;
  }
  h1, h2, h3, h4, .btn, strong, b, button {
    font-family: 'ing_me_bold', Arial;
  }
  button:disabled {
    opacity: 0.8;
  }
  h1 {
    font-size: 36px;
    line-height: 43px;
    margin: 50px 0px;
  }
  .is-orange {
    color: #ff6200;
  }
  .img-responsive {
    max-width: 100%;
  }
  .text-center {
    text-align: center;
  }
  .wrapper-bf {
    max-width: 630px;
    padding: 0 15px 30px;
    margin: 0 auto;
    border: 1px solid transparent;
  }
  .button-bf-wrapper {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  .button-bf {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: none;
    background-color: #ff6200;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border-bottom: 18px solid #e05305;
    position: relative;
    top: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .button-bf:active {
    top: 5px;
    border-bottom: 12px solid #e05305;
    background-color: #a84100;
    border-bottom: 14px solid #943703;
  }
  .reset-tapping {
    background: #ff6200;
    padding: 0 20px;
    border-radius: 8px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    cursor: pointer;
    border: none;
    color: #fff;
  }
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`]