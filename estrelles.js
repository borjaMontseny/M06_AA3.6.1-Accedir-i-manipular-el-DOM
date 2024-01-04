

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
    let botonCuatro = document.querySelector("#star ~ input[type='button']:nth-of-type(4)");
    let imgEjer4 = document.querySelector("#star ~ span:nth-of-type(3) img:nth-of-type(1)");

    botonCuatro.addEventListener('click', function () {
        imgEjer4.src = "star_on.gif";
    });

});