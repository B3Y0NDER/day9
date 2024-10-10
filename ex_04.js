document.addEventListener('mousemove', function(e) {
const x = (e.clientX / window.innerWidth) * 100;
const y = (e.clientY / window.innerHeight) * 100;

document.querySelector('.layer1').style.transform = `translate(${x / 10}px, ${y / 10}px)`;
document.querySelector('.layer2').style.transform = `translate(${x / 20}px, ${y / 20}px)`;
document.querySelector('.layer3').style.transform = `translate(${x / 30}px, ${y / 30}px)`;
});
