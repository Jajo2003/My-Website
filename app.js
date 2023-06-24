const home = document.querySelector('.Home');
const Shop = document.querySelector('.Shop');
const About = document.querySelector('.About');
const main = document.getElementById('Main-content');
const logo = document.getElementById('Left');

function changepage(a){
  if(a==='home'){
    home.classList.add('active');
    Shop.classList.remove('active');
    About.classList.remove('active');
    main.innerHTML = `<main id="Main-content">
    <div class="news-cont1">
      <a href="https://agenda.ge/en/news/2023/2287" target="_blank"><img src="Pics/kvara.jpg" alt="" class="pic"></a>
      <div class="desc">
        ხვიჩა კვარაცხელია 2022/2023 ჩემპიონთა ლიგის საუკეთესო ახალგაზრდად
        დასახელდა
      </div>
    </div>
    <div class="news-cont1">
      <a href="https://www.euroleaguebasketball.net/euroleague/players/tornike-shengelia/001133" target="_blank"><img src="Pics/toko.jpg_large" alt="" class="pic"></a>
      <div class="desc">
        თორნიკე შენგელია თამაშს ვირტუოს ბოლონიაში განაგრძობს
      </div>
    </div>
    <div class="news-cont1">
      <a href="https://agenda.ge/en/news/2023/400" target="_blank"><img src="Pics/shermadini.jpg" alt="" class="pic"></a>
      <div class="desc">
        გიორგი შერმადინმა ეუროლიგის რეკორდი მოხსნა სამმაგი დუბლების რაოდენობაში.
      </div>
    </div>
    <div class="news-cont1">
      <a href="https://agenda.ge/en/news/2023/1590#:~:text=Sunday%20in%20Yerevan.-,Talakhadze%20claimed%20two%20gold%20medals%20after%20lifting%20222%20kg%20in,to%20be%20crowned%20the%20Champion." target="_blank"><img src="Pics/lasha.jpg" alt="" class="pic"></a>
      <div class="desc">  
        ლაშა ტალახაძემ მოხსნა რეკორდი ატაცში 252 კილოგრამი.
      </div>
    </div>
    <div class="news-cont1">
      <a href="https://europop.ge/article/54170-tskheli-kandidati-saba-sazonovi-meore-bundesligis-klubis-samizneshia" target="_blank"><img src="Pics/u21.jpg" alt="" class="pic"></a>
      <div class="desc">
        საქართველოს U21 ნაკრებმა პორტუგალიასთან დამაჯერებელი გამარჯვება მოიპოვა 2:0
      </div>
    </div>
    <div class="news-cont1">
      <a href="https://europop.ge/article/5487-basilashvilis-rekordebi-pirveli-tituli-reitingi-honorari" target="_blank"><img src="Pics/basila.jpg" alt="" class="pic"></a>
      <div class="desc">
        დამოუკიდებელი საქართველოს ისტორიაში 26 წლის ჩოგბურთელი პირველია, ვინც ATP ტურის ტურნირი მოიგო.
       </div>
    </div>
  </main>
`
  }
  else if(a === 'Shop'){
    Shop.classList.add('active');
    home.classList.remove('active');
    About.classList.remove('active');
    main.innerHTML = `  <main id="Main-content">
    <div class="whole-shop">
      <div class="product">
        <img src="products/kvara-jersey-blue.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი ლურჯი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:90</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-jersey-napoli-white.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი თეთრი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:72</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-white-national.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური საქართველოს ნაკრები</div>
        <div class="bottom">
          <div class="price">ფასი:59.99</div>
          <div class="counter">მარაგში:42</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-jersey-blue.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი ლურჯი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:90</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-jersey-napoli-white.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი თეთრი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:72</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-white-national.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური საქართველოს ნაკრები</div>
        <div class="bottom">
          <div class="price">ფასი:59.99</div>
          <div class="counter">მარაგში:42</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-jersey-blue.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:90</div>
        </div>
      </div>
      <div class="product">
        <img src="products/kvara-jersey-blue.jpg" alt="" class="product-pic">
        <div class="product-desc">ხვიჩა კვარაცხელიას მაისური ნაპოლი</div>
        <div class="bottom">
          <div class="price">ფასი:79.99</div>
          <div class="counter">მარაგში:90</div>
        </div>
      </div>
    </div>
  </main>`;
  }
  else{
    home.classList.remove('active');
    About.classList.add('active');
    Shop.classList.remove('active');
    main.innerHTML = ` <div class="content">
    <div class="info">Shop is located at near Rustaveli St</div>
    <div class="work">Working hours:09:00-21:00 on weekdays</div>
    <div class="saturday"> on Saturday 10:00-18:00</div>
    <div class="sunday">on Sunday closed</div>
    <a href="https://www.google.com/maps/place/%22Rustaveli%22/@41.7256661,44.7405821,14z/data=!4m6!3m5!1s0x40440cdb00b97a89:0x31137c1f7bbbd2ff!8m2!3d41.7041453!4d44.7895432!16s%2Fg%2F1hc6hqbcq?entry=ttu" class="location"  target="_blank">Location</a>
    </div>
 </div>`
  }
}
