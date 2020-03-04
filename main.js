import Reservacion from "./reservacion.js"
import Huesped from "./huesped.js"
import Hotel from "./hotel.js"

export default class Main {
    constructor() { }
    testHuesped() {
        let a = new Huesped('Kenia Villa', 'Femenino');
        console.log(a.getDescripcion());
    }
    testReservacion() {
        let a1 = new Reservacion(12, new Date(2007, 2, 12), 3);
        console.log(a1.getFechaFormatoCorto());
        let h2 = new Huesped('Paola Villa', 'Femenino');
        let h1 = new Huesped('José Villa', 'Masculino');
        a1.addHuesped(h1);
        a1.addHuesped(h2);
        console.log(a1.getNumHuespedes());
        console.log(a1.print());
        a1.listarHuespedes();
    }

    testHotel() {
        let a1 = new Reservacion(12, new Date(2007, 2, 12), 3);
        a1.addHuesped(new Huesped('Paola', 'Femenino'));
        a1.addHuesped(new Huesped('José', 'Masculino'));
        let x2 = new Reservacion(12, new Date(2007, 2, 12), 3);
        x2.addHuesped(new Huesped('Axel', 'Masculino'));
        x2.addHuesped(new Huesped('Fernando', 'Masculino'));

        let z = new Hotel('hotel');
        z.addReservaciones(a1);
        z.addReservaciones(x2);
    }
}

let app = new Main();
app.testHuesped();
app.testReservacion();
app.testHotel();