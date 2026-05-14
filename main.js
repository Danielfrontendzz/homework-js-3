
let tabIndex = 0;
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
function switchTab(index) {
  tabs.forEach(btn => btn.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));
  tabs[index].classList.add('active');
  contents[index].classList.add('active');
}
setInterval(() => {
  tabIndex = (tabIndex + 1) % tabs.length;
  switchTab(tabIndex);
}, 3000);


let modalShown = false;
function checkScroll() {
  if (!modalShown && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.getElementById('modalScroll').style.display = 'flex';
    modalShown = true;
    window.removeEventListener('scroll', checkScroll);
  }
}
window.addEventListener('scroll', checkScroll);


setTimeout(() => {
  document.getElementById('modalTime').style.display = 'flex';
}, 10000);