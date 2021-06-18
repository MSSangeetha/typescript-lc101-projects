import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

// let astronautRocket = new Astronaut();
// let cargoRocket = new Cargo();
// let payloadRocket = new Payload();

export class Rocket {
    // properties and methods
    name : string;
    totalCapacityKg : number;
    //added masskg property as got an error
    // massKg : number;
    // cargoItems: string[] = new Cargo [];
    // astronauts: string[] = new Astronaut [];
    cargoItems: Cargo [] = []; 
    astronauts: Astronaut [] = []; 

    constructor(name : string, totalCapacityKg : number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[] ): number {
        let sumOfItems = 0;
        for(let i=0; i<items.length; i++){
            sumOfItems += items[i].massKg;
        }
        return sumOfItems;
     }

     currentMassKg(): number {
         let astronautMass = this.sumMass(this.astronauts);
         let cargoMass = this.sumMass(this.cargoItems);
        // let astronautMass = this.sumMass(Astronaut["massKg"]);
        //  let cargoMass = this.sumMass(Cargo["massKg"]);
         let combinedMass = astronautMass + cargoMass;
        // console.log(combinedMass);
        // this.astronauts = this.sumMass(this.massKg);
        // this.cargoItems = this.sumMass(this.massKg);
        // this.totalCapacityKg = this.astronauts + this.cargoItems;
        
         return combinedMass;
         
     }

     canAdd(item: Payload): boolean {
         if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            //  console.log(this.currentMassKg() + item.massKg);
             return true;
         }
         else{
            return false;
         }
      
     }

     addCargo(cargo: Cargo): boolean {
           if(this.canAdd(cargo)){
           this.cargoItems.push(cargo);
           return true;
       }
       else{
        return false;
       }
      
     }

     addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
         return false;
        }
     }
 }