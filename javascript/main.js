/*

    Programmed by LovelyJacob (Jacob Humston).
    This code is open source, however I kindly ask for credit if used.
    Repository: https://github.com/jacobhumston/my-website

    Have a good one! :)

*/

function updateTitle() {
    document.title = document.title + " | LovelyJacob's Portfolio";
}

function loaded() {
    updateTitle();
}

window.addEventListener('load', loaded);
