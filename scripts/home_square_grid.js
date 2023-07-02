const gridContainer = document.querySelector(".main-grid__container");

for (let i = 0; i < 105; i++) {

    const square = document.createElement('div');
    if (
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23,
        25, 28, 35,
        36, 37, 38,
        48, 49,
        60, 61,
        72, 73, 74, 83,
        84, 87, 94,
        98, 100, 105, 106].includes(i)) {
        square.classList.add("blank__square");
    } else {
        square.classList.add("grid__square");
    }

    gridContainer.appendChild(square);
}
