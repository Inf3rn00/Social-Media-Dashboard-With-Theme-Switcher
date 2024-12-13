const toggleCheckbox = document.querySelector('.toggle-checkbox');

toggleCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});