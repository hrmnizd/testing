const passwordInput = document.getElementById('passwd');
const showPasswordCheckbox = document.getElementById('show-pass');

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
