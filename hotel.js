export default class Hotel {
    /**
*  @param {string} nombreHotel
* @param {Reservacion} reservaciones
*/
  constructor(nombreHotel, reservaciones){

      this.nombreHotel = nombreHotel
      this.reservaciones= reservaciones

  }
  addReservacion(reservacion){
    this.reservaciones.push(reservacion);
  }
  getNumHuespedesHotel(){
      let x = 0;
      this.reservaciones.forEach(reservacion => {
        x = reservacion + x
      })
      return(x)

  }
  

  print(){
    return ` Num de huespedes ${this.getNumHuespedesHotel()} `
  } }


  /*
  let app = new Hotel (this.getNumHuespedesHotel());
  console.log(app.print());
  */