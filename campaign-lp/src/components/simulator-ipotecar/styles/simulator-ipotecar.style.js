import {css} from 'lit';
import { common } from '../../../common/styles/common.style';
import { irs } from './ion.rangeSlider.min.style';

export const style = [common, irs, css`
    :host {
        display: block;
        width: 100%;
    }

    /* 1. Simulator */
    .calc_mecanica .calcWrapper {
        background: #fff;
        margin-bottom: 30px;
    }
    .calc_mecanica h2 {
        margin-bottom: 30px;
    }
    .default-design .calcWrapper {
        border-radius: 6px;
        border: 1px solid #d9d9d9;
    }
    .calc_block {
        position: relative;
        border-bottom: 1px solid #d9d9d9;
        padding-right: 360px;
    }
    .ing-ipotecar-f2f .calc_block {
        padding: 0;
    }
    .default-design .calc_actions {
        padding: 56px;
    }
    .firstRow {
        padding-bottom: 40px;
    }
    .default-design .calcLabelBlock {
        text-align: right;
    }
    .default-design .calc_input {
        display: inline-block;
        vertical-align: middle;
        padding: 0 0 0 15px;
    }
    .calc_row input {
        -webkit-border-radius: 3px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 3px;
        -moz-background-clip: padding;
        border-radius: 3px;
        background-color: #d9d9d9;
        border: 1px solid #d9d9d9;
        color: #333;
        text-align: right;
        font-size: 16px;
        line-height: 40px;
        display: inline-block;
        vertical-align: middle;
        width: 100px;
        height: 40px;
        margin-right: 5px;
        padding: 0 10px;
    }
    .clearfix::after {
        display: block;
        clear: both;
        content: "";
    }
    .default-design .info_highlight {
        background-color: #d9d9d9;
    }
    .info_highlight {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        padding: 15px;
    }
    .spgTable {
        display: table;
        height: 100%;
        width: 100%;
    }
    .spgCell {
        display: table-cell;
        vertical-align: middle;
    }
    .calc_mecanica .item {
        font-size: 24px;
        line-height: 28px;
    }
    .info_highlight .item {
        text-align: center;
    }
    .default-design .item {
        color: #d9d9d9;
        padding-bottom: 15px;
    }
    .item {
        position: relative;
        overflow: hidden;
    }
    .calc_detailed_results .rez_block {
        margin-bottom: 4px;
        padding: 0;
    }
    .spgCta {
        text-align: center;
        padding-top: 15px;
    }

    .info_highlight .btn_xs {
        font-size: 16px;
    }
    .default-design .btn_xs {
        transition: all .2s ease;
        -webkit-border-radius: 4px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 4px;
        -moz-background-clip: padding;
        border-radius: 4px;
        background-color: #ff6200;
        position: relative;
        text-align: center;
        font-weight: 400;
        color: #fff;
        display: inline-block;
        padding: 10px 15px 10px 30px;
        border: 1px solid transparent;
    }
    .default-design .btn_xs .ico_arrow {
        position: absolute;
        width: 16px;
        height: 24px;
        top: 50%;
        margin-top: -12px;
        left: 10px;
        display: block;
    }
    .default-design .btn_xs .ico_arrow:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        margin-top: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #fff;
    }

    .calc_mecanica .item {
        color: #ff6200;
    }

    .ing-ipotecar-f2f .calc_actions {
        padding: 30px 15px;
    }
    .ing-ipotecar-f2f .firstRow {
        padding-bottom: 15px;
    }
    .ing-ipotecar-f2f .rez_block_top.flex-container {
        border-bottom: 1px solid #d9d9d9;
        padding: 15px 0;
        margin-bottom: 15px;
    }
    .ing-ipotecar-f2f .calcLabelBlock {
        position: relative;
        padding: 0 105px 0 250px;
        min-height: 50px;
    }
    .ing-ipotecar-f2f .spgLabel {
        position: absolute;
        left: 0;
        top: 0;
        width: 235px;
        text-align: right;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .ing-ipotecar-f2f .calc_input {
        position: absolute;
        right: 0;
        top: 8px;
    }
    .ing-ipotecar-f2f .calc_row input {
        margin: 0;
        width: 85px;
        border-radius: 4px;
        background: #fff;
    }
    .ing-ipotecar-f2f .calc_slider {
        position: relative;
        top: -10px;
    }
    body .ing-ipotecar-f2f .calc_detailed_results {
        padding: 0;
        align-items: stretch;
    }
    .ing-ipotecar-f2f .calc_detailed_col {
        padding: 15px;
        flex-basis: 50%;
    }
    .ing-ipotecar-f2f .calc_detailed_col:last-child {
        border-left: 1px solid #d9d9d9;
        background: #f0f0f0;
        color: #333;
    }
    .ing-ipotecar-f2f .rez_block_top.flex-container {
        display: block;
    }
    .show_variabil .rez_block_top {
        min-height: 128px;
    }
    .ing-ipotecar-f2f .rez_block_top {
        border-bottom: 1px solid #d9d9d9;
        padding: 15px 0;
        margin-bottom: 15px;
    }
    .ing-ipotecar-f2f .calc_detailed_results .rez_result {
        font-size: 16px;
        color: #333;
        float: right;
        text-align: right;
        min-width: 140px;
    }
    .ing-ipotecar-f2f .calc_detailed_results .rez_label,
    .ing-ipotecar-f2f .rez_result {
        display: inline-block;
    }
    .ip-container {
        position: relative;
        padding-left: 20px;
    }
    .ip-wrapper {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 1;
    }
    .infopoint {
        display: inline-block;
        border-radius: 50%;
        color: #fff;
        background: #ff6200;
        width: 16px;
        height: 16px;
        font-size: 9px;
        line-height: 1;
        cursor: pointer;
        padding: 3px 0;
        vertical-align: top;
        margin-top: 4px;
        position: absolute;
        left: 0;
        text-align: center;
    }
    .ip-content {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        font-family: 'ing_me_regular';
        background: #fff;
        border: 1px solid #ff6200;
        bottom: 10px;
        min-width: 240px;
        right: 0;
        padding: 5px;
        border-radius: 5px;
        transition: all 0.2s ease;
        font-size: 13px;
        line-height: 1.3;
        z-index: 1;
        text-align: left;
    }
    .infopoint:hover + .ip-content {
        opacity: 1;
        visibility: visible;
    }
    .ip-content:after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        position: absolute;
        left: 50%;
        background: #fff;
        transform: rotate(45deg);
        border-style: solid;
        border-width: 1px;
        border-color: #fff #ff6200 #ff6200 #fff;
        border-radius: 2px;
    }
    .ing-ipotecar-f2f .spgCta {
        text-align: left;
    }
    .ing-ipotecar-f2f .btn-scadentar {
        float: right;
        background: #fff;
        color: #ff6200;
        border: 1px solid #ff6200;
    }
    .ing-ipotecar-f2f .btn-scadentar .ico_arrow:after {
        border-color: transparent transparent transparent #ff6200;
    }

`];