//O Código abaixo feito em Java, funciona pois uma classe abstrata serve como uma base para outras classes que irão fornecer implementações concretas para os métodos abstratos criados na classe abstrata. Sendo assim, não é possível criar objetos diretamente a partir dela.

//CÓDIGO FORNECIDO PELA QUESTÂO:
// public abstract class Poligono {
//   public static void main(String[] args) {
//       Poligono[] p = new Poligono[10];
//   }
// }

//CÓDIGO EM TYPESCRIPT:
// abstract class poligono{
// }
// const p: poligono[] = new Array(10)

//Um exemplo mais concreto:
abstract class Poligono{
  abstract calcularArea(): number;
}

class Triangulo extends Poligono{
  constructor(private _base:number, private _altura:number){
    super()
  }
  calcularArea(): number {
    return (this._base*this._altura) / 2;
  }
}
const p: Poligono[] = new Array(3)

p[0] = new Triangulo(10, 15);
p[1] = new Triangulo(6,9);
p[2] = new Triangulo(4, 19);

for(let i = 0; i<p.length; i++){
  console.log(`Área dos triângulo ${i+1}: ${p[i].calcularArea()}cm²`)
}

// Área dos triângulo 1: 75cm²
// Área dos triângulo 2: 27cm²
// Área dos triângulo 3: 38cm²