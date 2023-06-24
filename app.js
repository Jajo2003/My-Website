const home = document.querySelector('.Home');
const Shop = document.querySelector('.Shop');
const About = document.querySelector('.About');

function changepage(a){
  if(a==='home'){
    home.classList.add('active');
    Shop.classList.remove('active');
    About.classList.remove('active');
  }
  else if(a === 'Shop'){
    Shop.classList.add('active');
    home.classList.remove('active');
    About.classList.remove('active');
  }
  else{
    home.classList.remove('active');
    About.classList.add('active');
    Shop.classList.remove('active');
  }


}