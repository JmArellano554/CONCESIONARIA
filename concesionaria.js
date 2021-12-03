let autos = [{
   marca : "Ford",
   modelo : "Fiesta",
   precio : 150000,
   km: 200,
   color : "Azul",
   cuotas: 12,
   anio: 2019,
   patente: "APL123",
   vendido: false
},
{
   marca : "Toyota",
   modelo : "Corolla",
   precio : 100000,
   km: 0,
   color : "Blanco",
   cuotas: 14,
   anio: 2019,
   patente: "JJK116",
   vendido: false

}
]
module.exports = autos

let autos = require("./autos")
let persona =  { 
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
     };

const concesionaria = {

   autos: autos,

buscarAuto: function(patente){
      let encontrado = null
      this.autos.forEach(function(auto){ 
         if(auto.patente == patente){
       encontrado = auto
        }
         })
          return encontrado
} 
,
venderAuto:  function (patente){
     if  (this.buscarAuto(patente)){  
      return  this.buscarAuto(patente).vendido = true
    }
  }
,
autosParaLaVenta: function(){
    return this.autos.filter((function(auto)
      {return auto.vendido === false}),this)
   }
   ,
   autosNuevos: function (){ 
      return this.autosParaLaVenta().filter ( (function (nuevo){
        return nuevo.km < 100
      }),this)
      }
      ,
      listaDeVentas: function () {
  listaA = []
      for (let i = 0 ; i < this.autos.length ; i++){
      if (this.autos[i].vendido === true){  
      listaA.push (  autos[i].precio)
  }
    }return listaA
      }
,
totalDeVentas:  function(){ 
    return  this.listaDeVentas().reduce ( function (totalDeVenta,ventas){
       return totalDeVenta + ventas
      },0)
     }
     ,
     puedeComprar: function(auto,persona){ 
  let costoTotal = auto.precio;
  let autoEnCoutas =auto.cuotas;
  let compradorEnCuotas = persona.capacidadDePagoEnCuotas;
  let compradorPagoTotal = persona.capacidadDePagoTotal;
  if ( costoTotal <= compradorPagoTotal && 
     (costoTotal/autoEnCoutas) <= compradorEnCuotas) {
     return true
     console.log(true)
     }else{
      return false
      console.log(false)
      }
      }
      ,
      autosQuePuedeComprar: function(persona){
  let puede =[]
  this.autosParaLaVenta().forEach(function(auto){
   let puedeComprar =concesionaria.puedeComprar(auto,persona)
   if (puedecomprarComprar){
   puede.push(auto)
      }
       })
     return puede
        }
     }