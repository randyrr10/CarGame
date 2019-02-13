// variable
let car = {
    make: 'Lambo',
    model: 'Aventado',
    color: 'Orange',
    mileage: 0,
    isWorking: true,

    driveToWork(){
     alert(`Old Mileage: ${this.mileage}`);
     this.mileage = this.mileage + 10;
     alert(`New Mileage: ${this.mileage}`);
    },

}

//Functions
// Logs all out car's current stats to the console
const rewriteStats() => {

}

//mainProcess
//Captures keyboard input, Depending on the letter pressed it will  "call" (execute) different functions
 document.onkeyup(event) => {
    let letter = String.fromCharCode(event.keycode).toLowerCase();

    if(letter === 'd'){
    car.driveToWork();
    rewriteStats();
    }
}