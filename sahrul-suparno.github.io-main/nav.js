const header = document.getElementById('headNav');
const btns = header.getElementsByClassName('nav-link');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
