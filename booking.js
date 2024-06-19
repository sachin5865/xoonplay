console.log("call");
document.addEventListener('DOMContentLoaded', () => {
    showSlots('twilight');

    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
        });
    });
});

function showSlots(timeOfDay) {
    const slotsContainers = document.querySelectorAll('.slots');
    slotsContainers.forEach(container => {
        if (container.classList.contains(timeOfDay)) {
            container.classList.add('active');
            container.parentElement.style.display = 'block';
        } else {
            container.classList.remove('active');
        }
    });
}
