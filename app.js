// Create a button element and append it to the body
const button = document.createElement('button');
button.textContent = 'Click Me';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';

// Add a click event listener to the button
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Append the button to the document body
document.body.appendChild(button);