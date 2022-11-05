import {css} from 'lit';
import { common } from '../../../common/styles/common.style';

export const style = [common, css`
    :host {
        display: block;
    }
    .grid {
        width: 100%;
    }
    ::slotted(ing-card) {
        flex: 0 0 33.333%;
        max-width: 33.333%;
        text-align: center;
        padding: 15px;
    }
`];