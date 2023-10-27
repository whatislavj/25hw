function updateCounter(value) {
    document.getElementById('counter').textContent = value;
}

if (localStorage.getItem('counterValue')) {
    const savedValue = parseInt(localStorage.getItem('counterValue'));
    updateCounter(savedValue);
}

document.getElementById('increment').addEventListener('click', function() {
    const currentValue = parseInt(localStorage.getItem('counterValue')) || 0;
    const newValue = currentValue + 1;
    localStorage.setItem('counterValue', newValue);
    updateCounter(newValue);
});

document.getElementById('decrement').addEventListener('click', function() {
    const currentValue = parseInt(localStorage.getItem('counterValue')) || 0;
    if (currentValue > 0) {
        const newValue = currentValue - 1;
        localStorage.setItem('counterValue', newValue);
        updateCounter(newValue);
    }
});
