import Huesped from "./huesped.js";
export default class Reservacion {

    /**
 * @param {number} numHabi
 * @param {date} fechaLlega
 * @param {number} noches
 * @param {Huesped} huespedes
 */

    constructor(numHabi, fechaLlega, noches, huespedes){

        this.numHabi = numHabi
        this.fechaLlega = new Date()
        this.noches = noches
        this.huespedes= huespedes

    }
    getFechaFormatoCorto(){
        return `${this.fechaLlega.getDate()}/${this.fechaLlega.getMonth()}/${this.fechaLlega.getFullYear()}`;
    }
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    getNumHuespedes(){
        
        let x = 0;
        this.huespedes.forEach(huesped => {
          x = huesped + x
        })
        return(x)

    }
    print(){
        return `Habitacion ${this.numHabi}, fecha llegada ${this.getFechaFormatoCorto()} noches reservadas ${this.noches} ${this.huespedes.getDescripcion()}` 
    }

}

/*
 let app = new Reservacion(512, new Date(), 3, new Huesped("Kenia Villa","Mujer"));

 console.log(app.print());
 */