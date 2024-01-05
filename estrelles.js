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
    let boto4 = document.querySelector("#star ~ input[type='button']:nth-of-type(4)");
    let imgEx4 = document.querySelector("#star ~ span:nth-of-type(3) img:nth-of-type(1)");

    boto4.addEventListener('click', function () {
        imgEx4.src = "star_on.gif";
    });

    // Ex5
    let boto5 = document.querySelector("#star ~ input[type='button']:nth-of-type(5)");
    let imgEx5 = document.querySelector("#star ~ span:nth-of-type(4) img");

    boto5.addEventListener('click', function () {
        imgEx5.src = "star_on.gif";
    });

    // Ex6
    let boto6 = document.querySelector("#star ~ input[type='button']:nth-of-type(6)");
    let spanEx6 = document.querySelector("#star ~ span:nth-of-type(5)");

    boto6.addEventListener('click', function () {
        spanEx6.innerHTML = '<img src="star_on.gif">';
    });

    // Ex7
    let boto7 = document.querySelector("#star ~ input[type='button']:nth-of-type(7)");
    let spanEx7 = document.querySelector("#star ~ span:nth-of-type(6)");

    boto7.addEventListener('click', function () {
        spanEx7.innerText = '';
    });

    // Ex8
    let boto8 = document.querySelector("#star ~ input[type='button']:nth-of-type(8)");
    let spanOrigen = document.getElementById("source");
    let imgEx8 = spanOrigen.querySelector('img');
    let spanDesti = document.getElementById("target");

    boto8.addEventListener('click', function () {
        spanDesti.appendChild(imgEx8);
    });

    // Ex9
    let boto9 = document.querySelector("#star ~ input[type='button']:nth-of-type(9)");
    let spanEx9 = document.getElementById('sky');
    let elementImg = document.createElement('img')
    elementImg.src = "star_on.gif";

    boto9.addEventListener('click', function () {
        spanEx9.appendChild(elementImg);
    });

});