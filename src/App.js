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
import second1 from './img/second1.jpg';
import second2 from './img/second2.jpg';

// Drinks
import drink1 from './img/drink1.jpg';
import drink2 from './img/drink2.jpg';
import drink3 from './img/drink3.jpg';

//Suyuq drinks 

import cofe1 from './img/cofe1.jpg';
import cofe2 from './img/cofe2.jpg';
import cofe3 from './img/cofe3.jpg';
import koktey from './img/kokteyl.jpg';

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
    { name: "Гуляш", price: "50 000", img: second1 },
    { name: "Бизтиrogen", price: "60 000", img: second2 }
  ],
  Ичимликлар: [
    { name: "Moxito", price: "40 000", img: drink1 },
    { name: "Ocean", price: "40 000", img: drink2 },
    { name: "Klubinka", price: "40 000", img: drink3 },
    { name: "Americano", price: "40 000", img: cofe1 },
    { name: "Kapuchino", price: "40 000", img: cofe2 },
    { name: "Late", price: "40 000", img: cofe3 },
    { name: "No Name", price: "40 000", img: koktey}
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
