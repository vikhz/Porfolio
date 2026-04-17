const tooltipItems = document.querySelectorAll('.tooltip-item');
const tooltip = document.getElementById('tooltip');

tooltipItems.forEach(item =>{
    item.addEventListener('mouseenter', showTooltip);
    item.addEventListener('mouseleave', hideTooltip);
});

function showTooltip(event){
    tooltip.innerText = event.target.getAttribute('data-tooltip-content');
    tooltip.style.display = 'block';
}

function hideTooltip(){
    tooltip.style.display = 'none';
}

document.body.addEventListener('mousemove', event=>{
    tooltip.style.top = `${event.clientY + 1}px`;
    tooltip.style.left = `${event.clientX + 1}px`;

});