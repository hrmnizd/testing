const input = document.getElementById('passwd');
const button = document.getElementById('next-btn');

  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });