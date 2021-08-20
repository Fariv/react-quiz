import styled, { createGlobalStyle, keyframes } from 'styled-components';
import BgImage from './images/bg-image.jpg';

export const Gstyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
    }

    body > #root {
        display: flex;
        flex-basis: 100%;
    }

    * {
        box-sizing: border-box;
    }
    h1 {
        padding: 0;
        margin: 0;
        text-align: center;
        color: rgb(40, 85, 245);
    }
    button {
        color: black;
        background-color: rgb(255, 255, 255);
        border: none;
        padding: 10px;
        box-shadow: 1px 2px 6px rgba(0, 5, 5, 0.5);
        margin: 5px 0;
        cursor: pointer;
    }

    button.next {
        background-color: rgb(5, 155, 255);
        color: white;
    }

    button.start {
        background-color: rgb(5, 215, 45 );
        color: white;
    }

    button[disabled] {
        background-color: rgb(190, 190, 190 );
        color: white;
    }
`;

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 75%;
    margin: 15px auto;
    padding: 20px;
    background-color: rgba(255, 100, 155, 0.4);
`;

export const QuestionCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OptionsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const OptionsButton = styled.button`
    margin-left: 10px;
`;

const loaderRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    display: flex;
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto;

    > div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        margin: 4px;
        border: 4px solid rgb(50, 100, 205);
        border-radius: 50%;
        animation: ${loaderRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: rgb(50, 100, 205) transparent transparent transparent;
    }
    > div:nth-child(1) {
        animation-delay: -0.45s;
    }
    > div:nth-child(2) {
        animation-delay: -0.3s;
    }
    > div:nth-child(3) {
        animation-delay: -0.15s;
    }
    
`;