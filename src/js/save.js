const saveBtn = document.querySelector('.btn');
const image = document.querySelector('.memo-img');


const saveImage = (blob) => {
    let link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'memo-img');
    link.click();
};

const onSaveBtnClick = () => {
    saveBtn.addEventListener('click', () => {
        fetch(image.src)
        .then(res => res.blob())
        .then(blob => saveImage(blob));
    })
}

export {onSaveBtnClick};