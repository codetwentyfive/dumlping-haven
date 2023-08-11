import './styles.css';
import { homepage } from './homepage';
import { menu } from './menu';
import { contact } from './contact';

document.addEventListener('DOMContentLoaded', () => {




    // Get references to the tabs
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');
    const homeTab = document.getElementById('home-tab');

    // Get reference to the content container
    const contentContainer = document.getElementById('content');

    // Set up event listeners for tabs
    menuTab.addEventListener('click', handleTabClick);
    contactTab.addEventListener('click', handleTabClick);
    homeTab.addEventListener('click', handleTabClick);

    // Initially load the homepage content
    homepage();
    homeTab.classList.add('active'); // Mark the Home tab as active

    // Function to handle tab clicks
    function handleTabClick(event) {
        const clickedTab = event.target;
        const tabId = clickedTab.id;

        // Clear content container
        contentContainer.innerHTML = '';

        // Update tab styling
        clearActiveTabs();
        clickedTab.classList.add('active');

        // Load content based on the clicked tab
        if (tabId === 'home-tab') {
            homepage();
        } else if (tabId === 'menu-tab') {
            menu();
        } else if (tabId === 'contact-tab') {
            contact();
        }
    }

    // Function to clear active styling from all tabs
    function clearActiveTabs() {
        menuTab.classList.remove('active');
        contactTab.classList.remove('active');
        homeTab.classList.remove('active');
    }

});