const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');
const leftHand = document.querySelector('.left-hand');
const rightHand = document.querySelector('.right-hand');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const showPasswordCheckbox = document.querySelector('#show-password');

emailInput.addEventListener('input', () => {
    leftEye.classList.remove('closed');
    rightEye.classList.remove('closed');
    leftHand.style.transform = 'translateX(-20px)';
    rightHand.style.transform = 'translateX(20px)';
});

passwordInput.addEventListener('input', () => {
    leftEye.classList.add('closed');
    rightEye.classList.add('closed');
    leftHand.style.transform = 'translateX(20px)';
    rightHand.style.transform = 'translateX(-20px)';
});

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        leftEye.classList.remove('closed');
        leftHand.style.transform = 'translateX(-20px) rotate(30deg)';
        rightHand.style.transform = 'translateX(20px) rotate(-30deg)';
    } else {
        leftEye.classList.add('closed');
        leftHand.style.transform = 'translateX(20px)';
        rightHand.style.transform = 'translateX(-20px)';
    }
});