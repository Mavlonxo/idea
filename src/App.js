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


//Pizza
import pizza1 from './img/pizza1.jpg'
import pizza2 from './img/pizza2.jpg'
import pizza3 from './img/pizza3.jpg'

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
    { name: "Food 1", price: "50 000", img: two1 },
    { name: "Food 2", price: "50 000", img: two2 },
    { name: "Food 3", price: "50 000", img: two3 },
    { name: "Food 4", price: "50 000", img: two4 },
    { name: "Food 5", price: "50 000", img: two5 },
    { name: "Food 6", price: "50 000", img: two6 },
    { name: "Food 7", price: "50 000", img: two7 },
    { name: "Food 8", price: "50 000", img: two8 },
    { name: "Food 9", price: "50 000", img: two9 },
    { name: "Food 10", price: "50 000", img: two10 },
    { name: "Pizza 10", price: "50 000", img: pizza1 },
    { name: "Pizza 11", price: "50 000", img: pizza2 },
    { name: "Pizza 12", price: "50 000", img: pizza3 },

   
  ],
  Ичимликлар: [
    { name: "Moxito", price: "40 000", img: drink1 },
    { name: "Ocean", price: "40 000", img: drink2 },
    { name: "Klubinka", price: "40 000", img: drink3 },
    { name: "Americano", price: "40 000", img: cofe1 },
    { name: "Kapuchino", price: "40 000", img: cofe2 },
    { name: "Late", price: "40 000", img: cofe3 },
  ],
 
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
          <span> Дастафка учун +998 88 212 10 10</span>
        </div>
        <h1>Zeytun Menu</h1>
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
