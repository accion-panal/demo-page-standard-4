const buttonGrid = document.getElementById('home-tab');
const buttonList = document.getElementById('profile-tab');
const buttonMap = document.getElementById('contact-tab');

const div = document.getElementById('contact');
const divPagination = document.getElementById('pagination-col');


buttonMap.addEventListener('click', function() {
    div.classList.remove('initialMap');

    divPagination.style.display = 'none';
});

buttonList.addEventListener('click', function() {
    divPagination.style.display = 'block';
});
buttonGrid.addEventListener('click', function() {
    divPagination.style.display = 'block';
});