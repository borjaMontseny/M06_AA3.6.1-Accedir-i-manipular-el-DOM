

document.addEventListener("DOMContentLoaded", (event) => {
    // Ex1
    document.getElementsByTagName("input")[0].addEventListener('click', function () {
        document.getElementById('star').src = "star_on.gif";
    });

    /// Ex2
    document.getElementsByTagName("input")[1].addEventListener('click', function () {
        const imatges = document.querySelectorAll('#estrelles img');
        const imgDelMig = imatges[1];
        imgDelMig.src = "star_on.gif";
    });

    // Ex3
    document.getElementsByTagName("input")[2].addEventListener('click', function () {
        const imgEnFrase = document.querySelector('#frase img');
        imgEnFrase.src = "star_on.gif";
    });

    // Ex4
    document.getElementsByTagName("input")[3].addEventListener('click', function () {
        const primerImg = document.querySelector('span > img:first-child');
        primerImg.src = "star_on.gif";
    });
});