// * Vanilla JS ScrollSpy
// set the observer options
let options = {
  root: null,
  rootMargin: '0px',
  threshold: .1 // change this if the section takes up more than 100vh
}

// create observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // add an observed class to the section
      entry.target.classList.add('observed');
      // check the section's id
      document.querySelectorAll('.navbar__link').forEach(link => {
        if (link.hash === `#${entry.target.id}`) {
          link.classList.add('navbar__link--active');
        } else {
          link.classList.remove('navbar__link--active');
        }
      });
    };
  });
}, options);
// Observe all sections that have an `id` applied
document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

// clicking submit button on contact form makes it disappear and the text "Get back to you soon!" appear
const submitBut = document.querySelector('#submit');

submitBut.addEventListener("click", () => {
  // alert("Thanks. Get back to you soon!")
  // reload page
})