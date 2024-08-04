# CommandLineGame_NodeJS

A command-line game built with Node.js where the player navigates through a field, avoiding obstacles and trying to reach a goal.

## DEMO
![find-your-hat-demo](https://github.com/user-attachments/assets/c6746575-bfbf-409d-a13e-35daecba7a85)

## Description

This game allows players to move within a field by providing commands. The field consists of open spaces, obstacles, and the player’s position. The objective is to navigate through the field without hitting obstacles to reach the goal.

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mouadd9/CommandLineGame_NodeJS.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd CommandLineGame_NodeJS
    ```
3. **Install the dependencies:**
    ```sh
    npm install
    ```

## Usage

To start the game, run:

```sh
node main.js
```

### How to Play

-   You will be prompted to enter the height and width of the field.
-   The game will generate a field with random obstacles (`O`) and an initial player position (`*`).
-   Use the following commands to move:
    -   `u`: Move up
    -   `d`: Move down
    -   `l`: Move left
    -   `r`: Move right
-   The objective is to move to the end of the field without hitting any obstacles.

## Features

-   Customizable field size
-   Randomly generated fields with obstacles
-   Simple command interface for navigation

## Code Overview

### `main.js`

This file handles user interaction and the game loop. It prompts the user for the field size, generates the field, and processes user commands to move the player.

### `gameClass.js`

This file defines the `Field` class, which includes methods for generating the field, printing the field, and moving the player within the field.

