

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
    const boto4 = document.getElementsByTagName("input")[4];
    boto4.addEventListener('click', () => {
        const estrelles = document.getElementsByTagName('img');
        const primera = estrelles[0];
        primera.src = 'star_on.gif';
    });

});