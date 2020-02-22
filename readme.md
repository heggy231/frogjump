// add the script tag 
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Treehouse Code Challenges!</title>
  </head>
  <body>
    <h1>Greetings!</h1>
    <p>This is a webpage from inside a code challenge</p>
    <script src="js/app.js"></script>
  </body>
</html>

inside of app.js)
console.log("Hello, world!");

### Modify the platforms.create command on line 24 to move the platform 100 pixels down, making the new coordinates (300, 200).

- control structure named a "conditional statement."
if (currentScore === winningScore) {
  createBadge();
}

intro to js
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Treehouse Code Challenges!</title>
  </head>
  <body>
    <h1>Greetings!</h1>
    <p>This is a webpage from inside a code challenge</p>
// HTML code. It's used in a web page to "load" or add JavaScript files to the page.
    <script src="js/app.js"></script>
  </body>
</html>

inside of app.js)
console.log("Hello, world!");

HTML stands for Hypertext Markup Language, and it's the language used to create web pages. ex) index.html

.png graphic file, “Portable Network Graphics”

### Language of Programming
- Syntax: "vocabulary" of a programming language, punctuation and grammar of prog language

- values: data in your prog
    - ex) string, number
- Variables: box that contains values
- Control Structures: control the flow of the program, what happens and when it happens in a program

	ex) when player jumps touches coin, coin vanishes, when won is set to false- player can run around

ex) 
```js
if (currentScore === winningScore) {
	createBadge();
}

```

- commands: (aka functions)
heart of the program, commands we ask computer to complete, basic building block of a program (function)

- function: a collection of code that “does something”.  
// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(375, 300, 'coin');
}

// creating createItem function
// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

coordinate (0, 0), 
(left to Right 0 to 800, top to bottom 0 to 600)
coin.create(400, 350, ‘coin’)
first argument: (from left, position from top)

### Modify the platforms.create command on line 24 to move the platform 100 pixels down, making the new coordinates (300, 200).

- control structure named a "conditional statement."
if (currentScore === winningScore) {
  createBadge();
}

