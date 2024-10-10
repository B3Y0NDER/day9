const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');

function drawRectangle(ctx) {
    ctx.fillStyle = '#EE964B';
    ctx.fillRect(50, 50, 100, 100);
}

drawRectangle(ctx1);
drawRectangle(ctx2);
drawRectangle(ctx3);

let x = 0;
function animateCanvas2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.fillStyle = '#F4D35E';
    ctx2.fillRect(x, 50, 100, 100);
    x += 2;
    if (x > canvas2.width) x = 0;
    requestAnimationFrame(animateCanvas2);
}
animateCanvas2();

canvas3.addEventListener('click', () => {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.fillStyle = '#0D3B66';
    ctx3.beginPath();
    ctx3.arc(100, 100, 50, 0, Math.PI * 2);
    ctx3.fill();
});
