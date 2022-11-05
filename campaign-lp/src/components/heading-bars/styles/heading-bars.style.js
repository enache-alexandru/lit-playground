import {css} from 'lit';

const baseColor = css`#ff6200`;
const baseFontSize = css`16px`;
const toBeInherited = css`
    .hero-link {
        color: #333;
        text-decoration: none;
        font-size: 20px;
        line-height: 28px;
        /* font-family: ing_narrow_regular; */
        font-weight: 400;
        font-style: normal;
        border-radius: 6px;
        padding: 10px;
        display: inline-block;
        background: #fff;
        color: #fff;
        border: 1px solid transparent;
        margin-top: 15px;
        color: #ff6200;
    }
`;

export const style = [toBeInherited, css`

    @keyframes reveal {
        from {
            clip-path: inset(0 100% 0 0);
            margin-left: -80px;
        }
        to {
            clip-path: inset(0 0 0 0);
            margin-left: 0;
        }
    }

    @keyframes revealIE {
        from {
            margin-left: -80px;
            opacity: 0;
        }
        to {
            margin-left: 0;
            opacity: 1;
        }
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    :host {
        display: block;
    }

    .heading-bars,
    .heading-container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .heading-wrapper {
        position: relative;
        overflow: hidden;
        min-height: 400px;
    }

    .headingbar-button,
    .headingbar-headline {
        position: relative;
        z-index: 2;
    }

    .headingbar-headline {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin: 0 0 32px 0;
    }

    .heading-bars h1 span {
        -webkit-font-smoothing: antialiased;
        font-size: 36px;
        line-height: 48px;
        font-weight: 700;
        background-color: #ff6200;
        box-sizing: border-box;
        color: #fff;
        display: inline-block;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 8px;
        overflow: hidden;
        padding: 2px 16px 4px;
        margin-bottom: 8px;
    }

    .headingbar-button .hero-link {
        position: static;
        margin: 0;
        background-color: #525199;
        color: #fff;
        border-radius: 8px;
        /* font-family: ing_me_bold; */
        padding: 10px 15px;
        top: 0;
        min-width: 140px;
        text-align: center;
    }

    @media (min-width: 576px) {   /* @include media-breakpoint-up(sm) */
        .heading-wrapper {
            background-color: rgb(240, 240, 240);
            border-radius: 0px 0px 16px 16px;
            padding-top: 48px;
        }
        .headingbar-slot {
            animation-duration: .4s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
            clip-path: inset(0 100% 0 0);
            display: inline-block;
            position: relative;
            animation-name: reveal;
        }
        .headingbar-headline .headingbar-slot:nth-child(1){
            animation-delay: .65s;
        }
    
        .headingbar-headline .headingbar-slot:nth-child(2){
            animation-delay: .75s;
            left: 140px;
        }
    
        .headingbar-headline .headingbar-slot:nth-child(3){
            animation-delay: .9s;
            left: 83px;
        }

        .headingbar-button .hero-link {
            animation-delay: 1.1s;
        }

        .headingbar-picture {
            height: 100%;
            left: 0px;
            right: 0;
            position: absolute;
            top: 0px;
            transform: translateY(-100%);
            transition: transform 0.42s ease-in 0s;
        }

        .heading-bars.animate .headingbar-picture {
            transform: translateY(0);
        }
    }

    @media (min-width: 1230px) {
        .heading-bars {
            max-width: 1310px;
        }
        .heading-container {
            max-width: 1230px;
        }
    }



`];