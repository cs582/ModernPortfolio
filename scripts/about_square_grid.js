const gridContainer = document.querySelector(".about__picture-box");

for (let i = 0; i < 41; i++) {

    const square = document.createElement('div');
    if ([1, 6, 7, 8, 9, 15, 23, 24, 31, 32].includes(i)) {
        square.classList.add("blank__square");
    } else {
        square.classList.add("grid__square");
    }

    console.log(square);

    gridContainer.appendChild(square);
}
