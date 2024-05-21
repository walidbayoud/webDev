document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Theme';
    toggleButton.classList.add('btn', 'btn-primary');
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});
