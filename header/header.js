const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#E7E9ED', '#E7E9ED'];

function generateData() {
    const data = [];
    const count = Math.floor(Math.random() * 8) + 1;
    for (let i = 0; i < count; i++) {
        data.push({
            value: Math.random(),
            radius: Math.random() * 50 + 150
        });
    }
    return data;
}

function drawPieChart(data) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let startAngle = 0;
    const total = data.reduce((sum, d) => sum + d.value, 0);
    data.forEach((d, i) => {
        const endAngle = startAngle + d.value / total * 2 * Math.PI;
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, d.radius, startAngle, endAngle);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.fill();
        startAngle = endAngle;
    });
}

canvas.addEventListener('click', () => {
    drawPieChart(generateData());
});

drawPieChart(generateData());