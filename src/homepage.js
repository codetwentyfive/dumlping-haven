
export function performInitialLoad() {
    const contentDiv = document.querySelector('#content');
  
    // Create header element
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const menuItems = ['Home', 'Menu', 'Contact'];
  
    menuItems.forEach(itemText => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = itemText;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    header.appendChild(nav);
    contentDiv.appendChild(header);
  
    // Create content element
    const content = document.createElement('div');
    content.classList.add('content');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Dumpling Haven';
  
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
  
    // Create menu item elements (you can add more as needed)
    const menuItem1 = createMenuItem('Dumpling Delight', 'Delicious dumplings stuffed with a savory filling.', 'dumpling1.jpg');
    const menuItem2 = createMenuItem('Spicy Dumplings', 'Spice up your taste buds with our fiery dumplings.', 'dumpling2.jpg');
  
    menuItemsDiv.appendChild(menuItem1);
    menuItemsDiv.appendChild(menuItem2);
  
    content.appendChild(h1);
    content.appendChild(menuItemsDiv);
  
    contentDiv.appendChild(content);
  
    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
  
    const contactHeading = document.createElement('h3');
    contactHeading.textContent = 'Contact Us';
  
    const address = document.createElement('p');
    address.textContent = '123 Dumpling Street, City';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
  
    const email = document.createElement('p');
    email.textContent = 'Email: info@dumplinghaven.com';
  
    contactInfo.appendChild(contactHeading);
    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
  
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media');
  
    const followHeading = document.createElement('h3');
    followHeading.textContent = 'Follow Us';
  
    const facebookLink = createSocialLink('Facebook', 'facebook.png');
    const instagramLink = createSocialLink('Instagram', 'instagram.png');
    const twitterLink = createSocialLink('Twitter', 'twitter.png');
  
    socialMedia.appendChild(followHeading);
    socialMedia.appendChild(facebookLink);
    socialMedia.appendChild(instagramLink);
    socialMedia.appendChild(twitterLink);
  
    footer.appendChild(contactInfo);
    footer.appendChild(socialMedia);
  
    contentDiv.appendChild(footer);
  }
  
  function createMenuItem(title, description, imageSrc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
  
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = title;
  
    const heading = document.createElement('h2');
    heading.textContent = title;
  
    const p = document.createElement('p');
    p.textContent = description;
  
    menuItem.appendChild(image);
    menuItem.appendChild(heading);
    menuItem.appendChild(p);
  
    return menuItem;
  }
  
  function createSocialLink(platform, icon) {
    const link = document.createElement('a');
    link.href = `#${platform}`;
    
    const image = document.createElement('img');
    image.src = icon;
    image.alt = platform;
  
    link.appendChild(image);
  
    return link;
  }