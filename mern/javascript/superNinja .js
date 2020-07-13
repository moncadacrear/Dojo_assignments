class Ninja {
    constructor(name , health){
        this.name = name;
        this.health  = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`hello ${this.name}`)
    };
    showStats(){
        console.log(`my Stats health ${this.health} speed ${this.speed}  strength ${this.strength}`)
    };

    drinkSake(){
        console.log(this.health + 10)
    };
}

class Sensei extends Ninja {
    constructor(name, health){
        super(name,health);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }
    speakWisdom(){
        console.log('What a one pgrommer can do in one month , 2 programmers can do in 2 months ')

    }
    
}


// const ninja1 = new Ninja("Hyabusa" , 200);
// ninja1.sayName();
// ninja1.showStats();

// const alex = new Ninja ("Alex" , 100);
// alex.sayName();
// alex.showStats();
// alex.drinkSake();



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.drinkSake();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"