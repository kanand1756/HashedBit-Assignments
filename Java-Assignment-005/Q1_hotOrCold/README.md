
<!-- Task Statement

the program would generate a random number every time we click a button and display that number. So let's learn to do that. You can use Math.random() for the generation of Random numbers.
Make a p tag with id="main" and content I am learning to generate random number. I will be able to handle randomness in any of my applications that needs it. Press the button to get a random number.
Make a button with id="btn" which on click renders a random whole number each time between -20 & 20.
Make a p tag with id="num" where the random number is rendered. Initially, the p tag should contain an empty string.
Note: The random number generated must be between 20 and -20, and should be a whole number. If it is in decimal, make sure to round it off.


Part 2
You are building the game Hot or Cold. In this game, the computer generates a random number and the user guesses the number. If the guess is close to the number, the computer replies with "Hot" and if the guess is far from the generated number, the computer replies with "Cold".

If number generated is negative, show Cold or else Hot in a new div below the number generated
 -->



<p id="main">I am learning to generate random number. I will be able to handle randomness in any of my applications that needs it. Press the button to get a random number.
</p>

<button id="btn" onclick="displayRandomNumber()">Click Me!!</button>

<p id="num"></p>
