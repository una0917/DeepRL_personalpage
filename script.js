function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Format time: HH:MM:SS
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    timeElement.innerText = now.toLocaleTimeString('en-US', optionsTime);

    // Format date: DAY, MONTH DATE, YEAR
    const optionsDate = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateElement.innerText = now.toLocaleDateString('en-US', optionsDate).toUpperCase();
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);

// Add cursor-following effect to blobs for extra premium feel
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    
    blob1.style.transform = `translate(${x / 50}px, ${y / 50}px)`;
    blob2.style.transform = `translate(${-x / 50}px, ${-y / 50}px)`;
});
