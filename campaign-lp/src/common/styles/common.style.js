import {css} from 'lit';

const base = css`
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
html,
body {
  margin: 0;
  padding: 0;
}
body, *, ::after, ::before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
    outline: 0;
}
.text-center {
    text-align: center !important;
}
`; 

export const layout = css`
    /* 1. Layout */
    .layout {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto
    }

    @media (min-width: 576px) {
        .layout {
            max-width:100%
        }
    }

    @media (min-width: 768px) {
        .layout {
            max-width:745px
        }
    }

    @media (min-width: 992px) {
        .layout {
            max-width:990px
        }
    }

    @media (min-width: 1230px) {
        .layout {
            max-width:1230px
        }
    }

    .layout-row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px
    }
`;

export const grid = css`
    .grid {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        position: relative;
    }
`;

export const common = [base, layout, grid];