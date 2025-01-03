const contents = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('nav ul li');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(content => content.classList.remove('show'));
    contents[index].classList.add('show');
  });
});