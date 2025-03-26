var userno = document.getElementById("userinput");
var random = Math.floor(Math.random() * 10) + 1;
var rightorwrong = document.getElementById("status");
var userscore = document.getElementById("score");
var high = 10;
console.log(random)
function check() {
    var guessno = parseInt(userno.value);
    if (!guessno || guessno < 1 || guessno > 10) {
        rightorwrong.textContent = "❌ Enter a valid number between 1-10!";
        return;
    }
    if (guessno === random) {
        rightorwrong.textContent = "🎉 Correct! You won!";
        alert("Congratulations! You guessed the correct number!");
    } else {
        high--;
        userscore.textContent = "Score: " + high;
        rightorwrong.textContent = "❌ Wrong! Try again.";
        if (high === 0) {
            alert("Game Over! The correct number was " + random);
            location.reload();
        }
    }
}
