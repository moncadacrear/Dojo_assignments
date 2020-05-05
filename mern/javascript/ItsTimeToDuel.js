class Queue{
    constructor(){
        this.items = [];
    }
    enQueue(item){
        this.items.push(item);
    }
    Dequeue(){
        return this.items.shift();
    }
    len(){
        return this.items.length;
    }

}





class Card{
    constructor(name,cost){
        this.name =name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name,cost, power,res){
        super(name,cost);
        this.power= power;
        this.res = res;
    }
    attack(target){
        target.res -=this.power
        console.log(`${target.name}, res ${target.res}`)
    }
    
}



class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude =magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if (this.stat == "resilienece"){
                target.res += this.magnitude;
                console.log(target.name,target.power,target.res)
            }
            else if (this.stat == "power"){
                target.power += this.magnitude;
                console.log(target.name,target.power,target.res)
            }
        }else {
            throw new Error( "Target must be a unit!" );
        }
    }
    sayName(){
        console.log(this.name);
    }
}


class Player{
    constructor(name){
        this.name = name;
    }
    summon(played){
        
        console.log(`${this.name} summons ${played} `)
    }
    cast(effect, action){
        console.log(`${this.name} plays${effect} on ${action}`)
    }

}




//unit cards 
const redbeltninja = new Unit("Red Belt Ninja",3,3,4);
const blackbeltninja = new Unit("Black Belt Ninja",4,5,4);


// card effects
const hardalgorithm = new Effect("Hard Algorithm",2,"Increase target's reilience by 3","resilienece", 3)
const unhandledpromiserejection = new Effect ("Unhandled Promise Rejection", 1,"reduce target's resilience by 2", "resilienece", -2)
const pairprogramming = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2)


const player1 = new Player("player 1");

const player2 = new Player("player 2");

player1.summon(redbeltninja.name)
player1.cast(hardalgorithm.name,redbeltninja.name)
hardalgorithm.play(redbeltninja)
player2.summon(blackbeltninja.name)
player2.cast(unhandledpromiserejection.name, redbeltninja.name)
unhandledpromiserejection.play(redbeltninja)
redbeltninja.attack(blackbeltninja)




