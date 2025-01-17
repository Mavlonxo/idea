import React, { useState } from "react";
import "./App.css";

// Salads
import salad1 from './img/salat1.jpg';
import salad2 from './img/salat2.jpg';
import salad3 from './img/salat3.jpg';
import salad5 from './img/salat5.jpg';
import salad6 from './img/salat6.jpg';

// Soups
import soup1 from './img/b1.jpg';
import soup2 from './img/b2.jpg';
import soup3 from './img/b3.jpg';
import soup4 from './img/bfri.jpg';
import soup5 from './img/b4.jpg';
import soup6 from './img/b5.jpg';
import soup7 from './img/b6.jpg';
import soup8 from './img/b7.jpg';

// Main Courses


// Drinks
import drink1 from './img/drink1.jpg';
import drink2 from './img/drink2.jpg';
import drink3 from './img/drink3.jpg';
import pepsi1 from './img/pepsi1.jpg';
import cola1 from './img/cola1.jpg';

//Suyuq drinks 

import cofe1 from './img/cofe1.jpg';
import cofe2 from './img/cofe2.jpg';
import cofe3 from './img/cofe3.jpg';

//The second foood 

import two1 from  './img/two1.jpg'
import two2 from  './img/two2.jpg'
import two3 from  './img/two3.jpg'
import two4 from  './img/two4.jpg'
import two5 from  './img/two5.jpg'
import two6 from  './img/two6.jpg'
import two7 from  './img/two7.jpg'
import two8 from  './img/two8.jpg'
import two9 from  './img/two9.jpg'
import two10 from  './img/two10.jpg'
import two11 from './img/two11.jpg'
import two12 from './img/two12.jpg'
import two13 from './img/two13.jpg'
import two14 from './img/two14.jpg'
import two19 from './img/two19.jpg'


//Pizza
import pizza1 from './img/pizza1.jpg'
import pizza2 from './img/pizza2.jpg'
import pizza3 from './img/pizza3.jpg'

//Xleb 

import xleb1 from './img/xleb1.jpg'
import xleb2 from './img/xleb2.jpg'
import xleb3 from './img/xleb3.jpg'

// instagram logo 
import instagramlogo from './img/Instagram_logo_2022.svg.jpg'
import telegramLogo from './img/Telegram_2019_Logo.svg.jpg'



const menu = {
  Салат: [
    { name: "Греческий", price: "37 000", img: salad1 },
    { name: "Чабан", price: "32 500", img: salad2 },
    { name: "Ачичук", price: "20 000", img: salad3 },
    { name: "Французский Салат", price: "42 000", img: salad5 },
    { name: "Цезарь с курицей", price: "45 000", img: salad6 }
  ],
  "1-чи овқат": [
    { name: "Крем-суп Эзогелин", price: "37 000", img: soup1 },
    { name: "Крем-суп Мерджимек", price: "33 000", img: soup2 },
    { name: "Домашние пельмешки", price: "32 000", img: soup3 },
    { name: "Суп с фрикадельками", price: "36 000", img: soup4 },
    { name: "Фирменный суп", price: "36 000", img: soup5 },
    { name: "Тушёный суп", price: "42 000", img: soup6 },
    { name: "Мастава", price: "32 000", img: soup7 },
    { name: "Борщ украинский", price: "32 000", img: soup8 }
  ],
  "2-чи овқат": [
    { name: "мангал x4", price: "340 000", img: two1 },
    { name: "стейк тибон", price: "160 000", img: two2 },
    { name: "стейк рибай", price: "180 000", img: two3 },
    { name: "мясо по китайский", price: "52 000", img: two4 },
    { name: "сач тава с курисей", price: "50 000", img: two5 },
    { name: "мясо с картофелем айдахо", price: "59 000", img: two6 },
    { name: "шашлик ассорти", price: "225 000", img: two7 },
    { name: "адена кебаб", price: "55 000", img: two8 },
    { name: "куринний шашлик", price: "42 000", img: two9 },
    { name: "шашлик кириниши", price: "45 000", img: two10 },
    { name: "кавказ шашлик ", price: "68 000", img: two11 },
    { name: "Луля-кебаб", price: "42 000", img: two12 },
    { name: "гуляш", price: "48 000", img: two13 },
    { name: "быстроганов", price: "51 000", img: two14 },


    { name: "мини джамбо", price: "54 000", img: two19 },
    { name: "Пицца пеперони", price: "60 000 / 75 000", img: pizza1 },
    { name: "Пицца бешбармак", price: "75 000 / 100 000", img: pizza2 },
    { name: "Пицца кебаб", price: " 55 000 / 75 000", img: pizza3 }
  ],
  Ичимликлар: [
    { name: "Клубники", price: "25 000", img: drink1 },
    { name: "Мохито", price: "25 000", img: drink2 },
    { name: "Айс Ти", price: "25 000", img: drink3 },
    { name: "Американо", price: "15 000", img: cofe1 },
    { name: "Капучино", price: "25 000", img: cofe2 },
    { name: "Латте", price: "25 000", img: cofe3 },
    { name: "Coca Cola 1", price: "12 000", img: cola1 },
    { name: "Pepsi 1", price: "12 000", img: pepsi1 },
  ],
  Хлеб: [
    { name: "хлеб ассорти", price: "15 000", img: xleb1 },
    { name: "хлеб пуф экмек", price: "18 000", img: xleb2 },
    { name: "хлеб афган экмек", price: "20 000", img: xleb3 },
  ]
};




function App() {
  const [selectedCategory, setSelectedCategory] = useState("Салат");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="header">
        {/* Phone Number Section */}
        <div className="phone-number">
          <span> Дастафка учун +998 88 212 10 10 </span> 
        </div>
        <h1>Zeytun Menu</h1>
       <a href="https://t.me/Zeytun18">
       <img className="telegram" src={telegramLogo} alt="okay" />
       </a>
         <a href="https://www.instagram.com/zeytun_cafe_restaurant/">
         <img  src={instagramlogo} alt="Instagram" className="instagram"/>
         </a>

      </header>
      <div className="categories">
        {Object.keys(menu).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-container">
        {menu[selectedCategory].map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
