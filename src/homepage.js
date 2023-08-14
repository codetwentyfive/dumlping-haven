
export function homepage() {
  const homepageContent = document.querySelector('#content');


  //create content for homepage
  const homepageHtml = document.createElement('div');
  homepageHtml.classList.add('homepage-div')
  homepageHtml.innerHTML = `

   <div class="title">
    <h1>Welcome to Dumpling Delights</h1>
    <p>Where Every Bite is a Delightful Surprise!</p>
  </div>

  <section class="menu">
    <h2>Our Delectable Dumplings</h2>
    <div class="dumpling">
      <img src="dumpling-image.jpg" alt="Savory Dumplings">
      <h3>Savory Delight</h3>
      <p>Our classic dumplings filled with a savory medley of flavors that will tickle your taste buds.</p>
    </div>
    <!-- Repeat the "dumpling" section for other menu items -->
  </section>

  <section class="reservation">
    <h2>Book Your Dumpling Delight</h2>
    <p>Join us for a dumpling adventure you won't forget!</p>
    <button>Reserve a Table</button>
  </section>
   `





  /* Create content element
  const content = document.createElement('div');
  content.classList.add('content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Dumpling Haven';
  */


  homepageContent.appendChild(homepageHtml);

}
homepage();