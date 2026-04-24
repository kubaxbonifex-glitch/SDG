const learnMoreBtn = document.getElementById('learnMoreBtn');
const actionBtn = document.getElementById('actionBtn');
const actionTip = document.getElementById('actionTip');
const cardsContainer = document.getElementById('cardsContainer');

const tips = [
  'Fix leaky faucets and toilets to conserve water.',
  'Support organizations working on clean water access in developing countries.',
  'Reduce plastic use to prevent water pollution.',
  'Advocate for better wastewater treatment in your community.',
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