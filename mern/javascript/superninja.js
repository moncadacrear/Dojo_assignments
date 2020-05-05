class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log( this.name );
    }
    showStats(){
        console.log( this.name ,this.health, this.speed, this.strength);
    }
    drinkShake(){
        this.health +=10;
        console.log(this.health);
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health =210;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("what one programmer can do  in one moth , two programmers can do in two moths ");
    }
    showStats(){
        super.showStats();
    }

}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();