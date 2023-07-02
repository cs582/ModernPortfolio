const gridContainer = document.querySelector(".contact_me__grid");

for (let i = 0; i < 30; i++) {

    const square = document.createElement('div');
    if ([0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 16, 18, 19, 23, 25, 26, 28, 29].includes(i)) {
        square.classList.add("blank__square");
    } else {
        square.classList.add("grid__square");
    }

    console.log(square);

    gridContainer.appendChild(square);
}
