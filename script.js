const learnMoreBtn = document.getElementById('learnMoreBtn');
const actionBtn = document.getElementById('actionBtn');
const actionTip = document.getElementById('actionTip');
const cardsContainer = document.getElementById('cardsContainer');

const tips = [
  'Support a small business in your community to help create local jobs.',
  'Share information about fair work conditions and workers’ rights.',
  'Encourage apprenticeships, internships, and training programs for youth.',
  'Choose products from companies that treat employees fairly.',
];

function showRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  actionTip.textContent = tips[randomIndex];
}

learnMoreBtn.addEventListener('click', () => {
  cardsContainer.scrollIntoView({ behavior: 'smooth' });
});

actionBtn.addEventListener('click', showRandomTip);

window.addEventListener('DOMContentLoaded', showRandomTip);
