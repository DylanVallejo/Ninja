// Crea una clase Ninja
// agregar un atributo: nombre
// agregar un atributo: salud
// agrega un atributo: velocidad - da un valor predeterminado de 3
// agrega un atributo: fuerza - da un valor predeterminado de 3
// agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
// agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
// agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja


class Ninja{
    constructor(nombre,salud,velocidad= 3 , fuerza= 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza= fuerza;
    }
    sayName(){
        this.nombre = this.nombre;
        console.log(ninja1.nombre);
    };
    drinkSake(){
        this.salud = this.salud+10;
        console.log("has bebido sake tu salud a aumentado en 10 salud total:", ninja1.salud)
    }
    showStats(){
        console.log("Tus estadisticas actuales son",ninja1)
    }
}
let ninja1 = new Ninja("Guts",50,100,300);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


