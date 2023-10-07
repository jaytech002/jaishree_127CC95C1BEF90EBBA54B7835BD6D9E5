// Parent class: Player
class Player {
    play() {
        console.log("The player is playing cricket.");
    }
}

// Derived class: Batsman
class Batsman extends Player {
    play() {
        console.log("The batsman is batting.");
    }
}

// Derived class: Bowler
class Bowler extends Player {
    play() {
        console.log("The bowler is bowling.");
    }
}

// Create objects of Batsman and Bowler classes
const batsman = new Batsman();
const bowler = new Bowler();

// Call the play() method for each object
batsman.play(); // Output: "The batsman is batting."
bowler.play();  // Output: "The bowler is bowling."

