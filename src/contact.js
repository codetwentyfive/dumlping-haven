export function contact() {

    const contactContent = document.getElementById('contact-content');
    contactContent.innerHTML = ''; // Clear any existing content

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = '123 Dumpling Street';

    const city = document.createElement('p');
    city.textContent = 'City, Country';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: info@dumplinghaven.com';

    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(address);
    contactDiv.appendChild(city);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    contactContent.appendChild(contactDiv);
}