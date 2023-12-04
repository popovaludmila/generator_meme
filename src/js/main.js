import { dragItem } from "./drag.js";
import {changeText} from "./edit.js";
import { onSaveBtnClick } from "./save.js";
import { uploadNewPhoto } from "./upload.js";

const uploadInput = document.querySelector('#upload-file');
const textTop = document.querySelector('#text-top');
const textBottom = document.querySelector('#text-bottom');
const textContainerTop = document.querySelector('#tb1');
const imgContainer = document.querySelector('.img-container');
const textContainerBottom = document.querySelector('#tb2');

changeText(textBottom, textContainerBottom);
changeText(textTop,textContainerTop);
dragItem(textContainerTop, imgContainer);
dragItem(textContainerBottom, imgContainer);
uploadInput.addEventListener('change', uploadNewPhoto);

onSaveBtnClick();


