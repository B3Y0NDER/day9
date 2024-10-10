function generateCards(cardsData) {
const cardsElements = document.getElementById('cards-list');
cardsData.forEach((cardData, index) => {
cardsElements.innerHTML += `
<div class="card ${index}">
<div class="card_image"><img src="${cardData[0]}"/></div>
<div class="card_title"><p>${cardData[1]}</p></div>
</div>`;
});

const cardsList = document.getElementById('cards-list');

cardsList.addEventListener('wheel', (event) => {
event.preventDefault();
cardsList.scrollLeft += event.deltaY; 
});

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
        
card.addEventListener('mouseenter', () => {
card.classList.add('scale-down');
});

card.addEventListener('mouseleave', () => {
card.classList.remove('scale-down');
});

card.addEventListener('click', () => {
cards.forEach(c => c.classList.remove('zoom')); 
card.classList.add('zoom'); 
card.scrollIntoView({ behavior: 'smooth', inline: 'center' }); 
});
});

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape') {
cards.forEach(c => c.classList.remove('zoom')); 
}
});
}

const cardsData = [
    ['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']
];
generateCards(cardsData);
