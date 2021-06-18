"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
// let astronautRocket = new Astronaut();
// let cargoRocket = new Cargo();
// let payloadRocket = new Payload();
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        //added masskg property as got an error
        // massKg : number;
        // cargoItems: string[] = new Cargo [];
        // astronauts: string[] = new Astronaut [];
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumOfItems = 0;
        for (var i = 0; i < items.length; i++) {
            sumOfItems += items[i].massKg;
        }
        return sumOfItems;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        // let astronautMass = this.sumMass(Astronaut["massKg"]);
        //  let cargoMass = this.sumMass(Cargo["massKg"]);
        var combinedMass = astronautMass + cargoMass;
        // console.log(combinedMass);
        // this.astronauts = this.sumMass(this.massKg);
        // this.cargoItems = this.sumMass(this.massKg);
        // this.totalCapacityKg = this.astronauts + this.cargoItems;
        return combinedMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            //  console.log(this.currentMassKg() + item.massKg);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
