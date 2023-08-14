// Function to populate menu content
export
    function menu() {
    const menuContent = document.getElementById("content");

    const dumplings = [
        { name: "Classic Pork Dumplings", price: 8.99, image: "pork_dumplings.jpg" },
        { name: "Vegetable Potstickers", price: 7.49, image: "vegetable_potstickers.jpg" },
        { name: "Shrimp and Chive Dumplings", price: 9.99, image: "shrimp_dumplings.jpg" },
        { name: "Spicy Tofu Dumplings", price: 6.99, image: "tofu_dumplings.jpg" }
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
            </div>
          </div>
          
        `).join('')}
      </div>`;

    menuContent.innerHTML = menuHtml;
}

menu(); // Call the menu function to populate the content div.

