// /* script.js - mobile menu toggle and FAQ accordion */

// // Mobile menu toggle
// const mobileBtn = document.getElementById('mobileMenuBtn');
// const mobileMenu = document.getElementById('mobileMenu');
// let menuOpen = false;

// mobileBtn.addEventListener('click', () => {
//   menuOpen = !menuOpen;
//   if(menuOpen){
//     mobileMenu.style.display = 'block';
//     mobileBtn.setAttribute('aria-expanded','true');
//   } else {
//     mobileMenu.style.display = 'none';
//     mobileBtn.setAttribute('aria-expanded','false');
//   }
// });

// // FAQ toggles
// document.querySelectorAll('.faq-q').forEach(q => {
//   q.addEventListener('click', () => {
//     const item = q.parentElement;
//     const answer = item.querySelector('.faq-a');
//     const plus = q.querySelector('.plus');

//     // close others (optional: comment out to allow multi-open)
//     document.querySelectorAll('.faq-a').forEach(a => {
//       if(a !== answer) a.style.display = 'none';
//     });
//     document.querySelectorAll('.faq-q .plus').forEach(p => {
//       if(p !== plus) p.textContent = '+';
//     });

//     if(answer.style.display === 'block'){
//       answer.style.display = 'none';
//       plus.textContent = '+';
//     } else {
//       answer.style.display = 'block';
//       plus.textContent = '-';
//     }
//   });
// });

// script.js - mobile menu, FAQ accordion, search filter, small polish

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;
mobileBtn && mobileBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? 'block' : 'none';
  mobileBtn.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
  mobileMenu.setAttribute('aria-hidden', menuOpen ? 'false' : 'true');
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const plus = q.querySelector('.plus');

    // close others
    document.querySelectorAll('.faq-a').forEach(a => {
      if (a !== answer) a.style.display = 'none';
    });
    document.querySelectorAll('.faq-q .plus').forEach(p => {
      if (p !== plus) p.textContent = '+';
    });

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plus.textContent = '+';
    } else {
      answer.style.display = 'block';
      plus.textContent = '-';
    }
  });
});

// Simple client-side search (filters cards by title text)
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.resource-card');
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const desc = card.querySelector('.card-desc').textContent.toLowerCase();
      card.style.display = (title.includes(q) || desc.includes(q)) ? 'block' : 'none';
    });
  });
}
 