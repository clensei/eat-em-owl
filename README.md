# eat-em-owl

Project 1 - Ironhack

# **EAT'EM OWL.**

# DESCRIPTION

The players main gowl in this game is too eat all the pizzas to get as big as powlssible, to avoid the viruses. In this quest, eating worms will increase the player's speed. Make sure to eat enough, or the owl will die!

## MVP

The owl will move in 4 directions and will always be in movement. You score points & increase your size by eating pizzas, viruses make you lose points & decrease in size. There is no possibility to win, game is over when there are not enough pizzas to eat & owl gets too small to live.
Functionalities:

- Move the owl up/down/left/right
- Appearing pizzas / viruses / worms from the four sides of the canvas
- Increase/decrease owl's size
- Points counter & storing max owl's size
- Game over when owl's size reaches a critical size
  Backlog
- decrease pizza apparitions when the points reach a certain limit
- Sound animations
- Background changes as the game goes by
- Animation when the owl eats
- possibility to reappear on the other side when going through a border.

# DATA STRUCTURE

1. index.html
2. main.js
3. game.js
4. owl.js
5. pizzas.js
6. viruses.js
7. worms.js
8. style.css

9. ### Index.html file

10. ### Main File

- buildDom
- createStartScreen / removeStartScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
- startGame / endGame

3. ### Main constructor

##### variables

- splashScreen
- gameScreen
- gameOverScreen

##### Functions

- buildDom()
- createSplashScreen() // use buildDom() to create it
- removeSplashScreen() // remove splashScreen from DOM
- createGameScreen() // use buildDom() to create it
- removeGameScreen() // remove gameScreen from DOM
- createGameOverScreen() // use buildDom() to create it
- removeGameOverScreen() // remove gameOver from DOM

- startGame()
- endGame()

4. ### Game constructor

##### Properties

- canvas
- ctx
- owl
- pizza
- worm
- virus
- score
- gameIsOver

##### Methods

- start()
- startLoop()
- checkCollisionPizza()
- checkCollisionVirus()
- checkCollisionWorm()
- updateGameStats()

5. ### Owl Constructor

##### Properties

- canvas
- ctx
- x position
- y position
- width
- height
- speed
- direction
- image
- biggest size

##### Methods

- draw() // draw the owl
- setDirection() // depending on event listener -> set new direction
- setMovement() // update x & y depending on direction
- screenGoThrough() // if reaches the edge of the screen, appear on the other side
- collideWithPizza() // update points & width&height if eats pizza
- collideWithVirus() // update points & width&height if eats pizza
- collideWithWorm() // update points & speed if eats pizza
- setSize() // update size depending on the collisions
- updateSizeScore() // update biggest size

5. ### Pizza constructor

##### Properties

- canvas
- ctx
- x position
- y position
- width
- height (// might need only one if represented by a square)
- speed

##### Methods

- draw()
- updatePosition()
- isInsideScreen()

6. ### Virus constructor

##### Properties

- canvas
- ctx
- x position
- y position
- width
- height (// might need only one if represented by a square)
- speed

##### Methods

- draw()
- updatePosition()
- isInsideScreen()

7. ### Worm constructor

##### Properties

- canvas
- ctx
- x position
- y position
- width
- height (// might need only one if represented by a square)
- speed

##### Methods

- draw()
- updatePosition()
- isInsideScreen()

# STATES & STATES TRANSITIONS

### 1. Splash Screen

- Click 'PLAY' button to go to Game Screen

### 2. Game Screen

- Game starts running
- Goes to GameOverScreen when owl's size is < X (to be determined).

### 3. Game Over Screen

- Displays game statistics
- Play again button to go to Game Screen
