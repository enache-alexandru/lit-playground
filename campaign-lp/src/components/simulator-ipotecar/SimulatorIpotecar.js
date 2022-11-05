import { html, css, LitElement } from 'lit';
import { style } from './styles/simulator-ipotecar.style';
import './includes/rangeslider.min';
// import '@spectrum-web-components/slider/sync/sp-slider.js';
 
export class SimulatorIpotecar extends LitElement {
    static get styles() {
        return style;
    }

    static get properties() {
        return {
            rs: {type: Object},
            input1: {type: Object},
            irsInput: {type: Object}
        }
    }

    constructor() {
        super();
        this.rs = IonRangeSlider;
        this.input1 = document.createElement("input");
        this.input1.setAttribute("type", "text");
        this.input1.setAttribute("value", "100");
        this.input1.setAttribute("id", "range_mass");
        this.irsInput;
    }

    rsInput() {
        const plm = IonRangeSlider(this.input1, {
            skin: "flat",
            type: "single",
            grid: true,
            min: 0,
            max: 100,
            from: 0,
            postfix: "%",
          });

        //   this.irsInput.reset();

        //   this.rs(this.irsInput);
        //   console.log(this.irsInput)

        // const plm = document.getElementById("range_mass1");
        // this.input1.IonRangeSlider = this.rs
        // const plm2 = document.querySelector(".calc_slider");

        // this.irsInput = this.rs(this.input1)

        //console.log(plm2)

        return html`aici: ${plm}`;
    }

    render() {
        return html`

            <div class="layout calc_mecanica layout default-design visible-all  ing-ipotecar-f2f">
                <div class="calcWrapper clearfix f2fCalcWrapper">
                    <div class="calc_block clearfix">
                        <div class="calc_actions clearfix">
                            <div class="calc_row firstRow firstRow_ipotecar clearfix">
                                <div class="clearfix calcLabelBlock">
                                    <span class="spgLabel">Valoare proprietate(lei)</span>
                                    <div class="calc_slider valprop_trigger">
                                        
                                    </div>
                                    <div class="calc_input">
                                        <input type="text" id="front_valoare_proprietate" name="C20" value=" 529412" maxlength="15">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${this.rsInput()}
        `
    }
}