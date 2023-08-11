// Function to populate menu content
export function menu() {
    const menuSections = [
        {
            title: 'Beverages',
            items: [
                { name: 'Green Tea', description: 'A soothing and refreshing green tea.', price: 2.5, image: 'green-tea.jpg' },
                // Add more beverage items here
            ]
        },
        {
            title: 'Food',
            items: [
                { name: 'Classic Dumplings', description: 'Our signature dumplings filled with a delicious blend of flavors.', price: 4.0, image: 'classic-dumplings.jpg' },
                // Add more food items here
            ]
        },
        {
            title: 'Extras',
            items: [
                { name: 'Edamame', description: 'A delightful appetizer of steamed edamame beans.', price: 3.5, image: 'edamame.jpg' },
                // Add more extras items here
            ]
        }
    ];
    const menuContent = document.getElementById('menu-content')
    // Clear any existing content
    menuContent.innerHTML = '';

    // Create and append sections and items
    menuSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;

        sectionDiv.appendChild(sectionTitle);

        section.items.forEach(item => {
            const menuItem = createMenuItem(item.name, item.description, item.price, item.image);
            sectionDiv.appendChild(menuItem);
        });

        menuContent.appendChild(sectionDiv);
    });


}
// Function to create a menu item element
export function createMenuItem(name, description, price, imageSrc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    // ... (rest of the code to create and append content)

    return menuItem;
}