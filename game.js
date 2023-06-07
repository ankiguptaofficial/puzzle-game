// Generate a random combination
const combination = generateCombination();

// Function to generate a random combination
function generateCombination() {
  let combination = "";
  for (let i = 0; i < 3; i++) {
    combination += Math.floor(Math.random() * 10);
  }
  return combination;
}

// Function to check the player's combination
function checkCombination() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const playerCombination = input1 + input2 + input3;

  if (playerCombination === combination) {
    document.getElementById("message").textContent = "Congratulations! You broke the lock.";
  } else {
    document.getElementById("message").textContent = "Sorry, wrong combination. Try again.";
  }
}
