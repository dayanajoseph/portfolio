const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function sendMail() {
  var link = "mailto:dayanajosephofficial@gmail.com"
           + "?cc=officialshere@gmail.com"
           + "&subject=" + encodeURIComponent(document.getElementById('name').value
           + "&body=" + encodeURIComponent(document.getElementById('msg').value)
           
  ;
  
  window.location.href = link;
}
