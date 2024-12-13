// Get the button and message elements
const showMessageBtn = document.getElementById('show-message-btn');
const messageElement = document.getElementById('message');

// Define the special message
const specialMessage = 'Hello po, Maam Roan! Gusto ko lang po magpasalamat sa isang semester na naging teacher ko po kayo. Nag-enjoy po ako sa isang sem nayun maam and marami pong natutunan na hindi masyadong naipaliwanag last year. Thank you po sa pagiging mabait na teacher maam! Hindi po sapat tong mga nakalagay dito para magpasalamat, basta thank you so much po hehe. Hanggang sa muli po, sana maging teacher po namin ulit kayo. Happy Holidays and Ingat po kayo lagi! <3';

// Add event listener to the button
showMessageBtn.addEventListener('click', () => {
    // Show the message
    messageElement.textContent = specialMessage;
    messageElement.classList.add('show');
});