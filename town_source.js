"use strict";

// include packages here


export default class Town {

    #idTown;
    #nameTown;
    #popTown;
    #foodUnits;
    #literacy;
    #cashTown;
    #gdpTown;
    #econStren;
    #popularity;
    
    constructor(newTownName) {

        // Private:
        this.#nameTown = newTownName; // Name is required to be constructed
        this.#popTown = [4000, 4000]; // 0 is male, 1 is female
        this.#foodUnits = 0;
        this.#literacy = 0.05; // unused until later date
        this.#cashTown = 0; // amount of money on hand
        this.#gdpTown = 0; // usesless until the industrial revolution
        this.#econStren = 1.0; // may be hidden until later date
        this.#popularity = 1.0;
    }

    // Public: 

    // Setter

    setName(newName) {
        this.#nameTown = newName;
    }

    setPop(newPop) {
        this.#popTown[0] = newPop / 2;
        this.#popTown[1] = newPop / 2;
    }

    setCash(newCash) {
        this.#cashTown = newCash;
    }

    setGDP(newGDP) {
        this.#gdpTown = newGDP;
    }

    setEconStren(newES) {
        this.#econStren = newES;
    }

    setLiteracy(newL) {
        this.#literacy = newL;
    }

    setFoodUnits(newFU) {
        this.#foodUnits = newFU;
    }

    setPopularity(newP) {
        this.#popularity = newP;
    }
    // Public:

    // Getters
    getName() {
        return this.#nameTown;
    }

    getPop() {
        return this.#popTown[0] + this.#popTown[1];
    }

    getDemo(gender) {
        if (gender != 0 && gender != 1) {
            return -1;
        }
        else {
            return this.#popTown[gender];
        }
    }

    getCash() {
        return this.#cashTown;
    }

    getGDP() {
        return this.#gdpTown;
    }

    getEconStren() {
        return this.#econStren;
    }

    getFoodUnits() {
        return this.#foodUnits;
    }

    getLiteracy() {
        return this.#literacy;
    }

    getPopularity() {
        return this.#popularity;
    }
}