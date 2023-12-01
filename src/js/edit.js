const changeStyle = (text, el, className) => {

    let active = false;
    el.addEventListener('click', () => {

        active = !active;

        if (active) {
            el.classList.add('active');
            text.classList.add(className);

        } else {
            el.classList.remove('active');
            text.classList.remove(className);
        }
    });
};

const changeFontSize = (text, el) => {
    let active = false;

    el.addEventListener('click', (e) => {

        active = !active;

        const sizeOption = el.querySelector('.size-container');
        const sizeInput = sizeOption.querySelector('#size-input');
        const isSizeOption = e.composedPath().includes(sizeOption);

        let value = sizeInput.value;

        sizeInput.addEventListener('change', (evt) => {
            value = evt.target.value;
            text.style.fontSize = `${value}px`;
        })

        if (!active && !isSizeOption) {
            el.classList.remove('active');
            sizeOption.classList.add('hidden');
        } else {
            el.classList.add('active');
            sizeOption.classList.remove('hidden');
        }
    })
};

const changeTextColor = (text, el) => {
    const colorInput = el.querySelector('#font-color');
    let value = colorInput.value;

    colorInput.addEventListener('input', (evt) => {
        value = evt.target.value;
        text.style.color = value;
    })
};

const changeText = (text, textContainer) => {
    let edit = false;

    const toolbarTemplate = document.querySelector('#edit').content.querySelector('.editor-toolbar');
    const toolbar = toolbarTemplate.cloneNode(true);

    const italicItem = toolbar.querySelector('.italic');
    const weightItem = toolbar.querySelector('.weight');
    const underlineItem = toolbar.querySelector('.underline');
    const sizeItem = toolbar.querySelector('.size');
    const colorItem = toolbar.querySelector('.color');

    text.addEventListener('click', () => {
        edit = !edit;

        if (edit) {
            text.setAttribute('contentEditable', true);
            text.focus();
            textContainer.append(toolbar);
        }

        document.addEventListener('click', (evt) => {
            const outsideText = evt.composedPath().includes(text);
            const outsideToolbar = evt.composedPath().includes(toolbar);

            if (!outsideText && !outsideToolbar) {
                text.removeAttribute('contentEditable');
                toolbar.remove();
            }
            edit = false;
        })
    });

    changeStyle(text, italicItem, 'italic');
    changeStyle(text, weightItem, 'bold');
    changeStyle(text, underlineItem, 'underline');
    changeFontSize(text, sizeItem);
    changeTextColor(text, colorItem);
};

export { changeText };