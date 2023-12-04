const dragItem = (dndItem, dndContainer) => {
    // Текст позиционируется относительно контейнера
    // Находим координаты контейнера в документе
    let containterRect = dndContainer.getBoundingClientRect();
    const padding = 7;
    // Координаты контейнера с учетом прокрутки страницы
    let containerRectWithScroll = {};
    containerRectWithScroll.top = containterRect.top + pageYOffset;
    containerRectWithScroll.left = containterRect.left + pageXOffset;

    // Зажатие левой кнопки мыши на тексте
    dndItem.onmousedown = function (e) {

        // Отменяем нативную реакцию браузера на событие перетаскивания
        // так как мы реализуем ее самостоятельно
        dndItem.ondragstart = function () {
            return false;
        }

        // Находим текущие координаты мяча на странице
        let itemRect = dndItem.getBoundingClientRect();

        // Находим позицию текста относительно контейнера
        let itemRectInContainer = {};
        itemRectInContainer.top = itemRect.top + pageYOffset
            - containerRectWithScroll.top;
        itemRectInContainer.left = itemRect.left + pageXOffset
            - containerRectWithScroll.left;

        // Находим смещение курсора от левого верхнего угла теста при клике
        let shiftX = e.pageX - itemRectInContainer.left;
        let shiftY = e.pageY - itemRectInContainer.top;

        // Передвигаем мяч
        moveAt(e);

        function moveAt(e) {
            // При достижениитекстом границ контейнера передвижение прекращается

            let itemLeftPosition = e.pageX - shiftX;
            // Если достигнута левая граница контейнера 
            if (itemLeftPosition < 0) {
                dndItem.style.left = padding + 'px';
            } else {
                const rightBoundary = dndContainer.clientWidth - dndItem.clientWidth;
                // Если достигнута правая граница контейнер
                if (itemLeftPosition > rightBoundary) {
                    dndItem.style.left = rightBoundary - padding + 'px';
                } else {
                    dndItem.style.left = itemLeftPosition + 'px';
                }
            }

            let itemTopPosition = e.pageY - shiftY;
            console.log('itemTopPosition', itemTopPosition)
            // Если достигнута верхняя граница контейнера
            if (itemTopPosition < 0) {
                dndItem.style.top = padding + 'px';
            } else {
               let bottomBoundary = dndContainer.clientHeight - dndItem.clientHeight;
                console.log('dndContainer.clientHeight', dndContainer.clientHeight);
                console.log('dndItem.clientHeight', dndItem.clientHeight)
           
                console.log('bottomBoundary' ,bottomBoundary)
                // Если достигнута нижняя граница контейнера
                if (itemTopPosition > bottomBoundary) {
                    dndItem.style.top = bottomBoundary - padding + 'px';
                } else {
                    dndItem.style.top = itemTopPosition + 'px';
                }
            }
        }

        // При движении мышью перемещаем текст
        dndContainer.onmousemove = function (e) {
            moveAt(e);
        }

        // При отпускании клавиши мыши прекращаем перемещение
        dndContainer.onmouseup = function () {
            dndContainer.onmousemove = null;
            dndItem.onmouseup = null;
        }
    }
}

export { dragItem }