// VARIABLE
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
driveAroundUSA(){
    alert(`Old Mileage: ${this.mileage}`);
     this.mileage = this.mileage + 7000;
     alert(`New Mileage: ${this.mileage}`);
     alert(`car needs to tuneup`)
     this.IsWorking = false;
},
getTuneUp(){
    alert(`car is fixed and ready to go`)
    this.isWorking = true;
},
honk(){
    alert(`Honk! Honk!`);
}
}

//FUNCTIONS
// Logs all out car's current stats to the console
const rewriteStats=() => {
console.log(`make: ${car.make}`);
console.log(`model: ${car.model}`);
console.log(`color: ${car.color}`);
console.log(`mileage: ${car.mileage}`);
console.log(`isWorking: ${car.isWorking}`);
console.log(``````````````````````````````````````)
}

//MAIN PROCESS
//Captures keyboard input, Depending on the letter pressed it will  "call" (execute) different functions
 document.onkeyup =  (event) => {

//captures the keypress, converts it to lowercase, and save it to variable
    let letter = String.fromCharCode(event.keycode).toLowerCase();

if (letter === 'd'){
    car.driveToWork();
    rewriteStats();
}
if (letter === 'r'){
 car.driveAroundUSA();
 rewriteStats();
        }
 if (letter === 't'){
car.getTuneUp();
 rewriteStats();
 } if (letter === 'h'){
    car.honk();
    rewriteStats();
}
}