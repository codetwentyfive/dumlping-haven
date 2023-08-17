import Pork from './pork_dumplings.png';
import Vegetable from './vegetable_potstickers.png';
import Shrimp from './shrimp_dumplings.png';
import Spicy from './tofu_dumplings.png';




// Function to populate menu content
export
    function menu() {
    const menuContent = document.getElementById("content");

    const dumplings = [
        { name: "Classic Pork Dumplings",descripton: "They're so good, even pigs would approve – if they weren't so delicious themselves!" ,price: 8.99, image: Pork },
        { name: "Vegetable Potstickers",descripton: "Even carnivores will be leafing the meat behind for these plant-powered delights!", price: 7.49, image: Vegetable },
        { name: "Shrimp and Chive Dumplings", descripton: "Dive into these succulent parcels and discover the fresh taste of our oceans insects.",price: 9.99, image: Shrimp },
        { name: "Spicy Tofu Dumplings", descripton: "Our spicy tofu dumplings burn two times ,even if you only paid for one.<br>Wat a DEAL!",price: 6.99, image: Spicy }
    ];

    const menuHtml = `
        <h1 >Dumpling Assortment Menu</h1>
        <div class="menu-items">
        ${dumplings.map(item => `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" />
            <div>
              <h2>${item.name}</h2>

              <p>Price: $${item.price.toFixed(2)}</p>

              <p class="menu-description">"${item.descripton}"</p>
            </div>
          </div>
          
        `).join('')}
      </div>`;

    menuContent.innerHTML = menuHtml;
}



