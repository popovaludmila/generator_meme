
import {changeText} from "./edit.js";
import { onSaveBtnClick } from "./save.js";
import { uploadNewPhoto } from "./upload.js";

const uploadInput = document.querySelector('#upload-file');
const memeContainer = document.querySelector('.img-container');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('#text-bottom');
const textContainerTop = document.querySelector('#tb1');
const textContainerBottom = document.querySelector('#tb2');

memeContainer.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('memo-text--top')) {
        changeText(textTop,textContainerTop);
    }

    if (evt.target.classList.contains('memo-text--bottom')) {
        changeText(textBottom, textContainerBottom);
    }
})

uploadInput.addEventListener('change', uploadNewPhoto);


onSaveBtnClick();


