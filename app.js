// Excuse parts
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

// Function to generate a random excuse
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Display the generated excuse on button click
document.getElementById('generate-excuse').addEventListener('click', function() {
  let excuseElement = document.getElementById('excuse');
  excuseElement.textContent = generateExcuse();
});

// Generate and display an excuse on page load
window.onload = function() {
  document.getElementById('excuse').textContent = generateExcuse();
};
