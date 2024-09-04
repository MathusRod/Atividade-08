//O Código abaixo feito em Java, funciona pois uma classe abstrata serve como uma base para outras classes que irão fornecer implementações concretas para os métodos abstratos criados na classe abstrata. Sendo assim, não é possível criar objetos diretamente a partir dela.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Poligono = /** @class */ (function () {
    function Poligono() {
    }
    return Poligono;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(_base, _altura) {
        var _this = _super.call(this) || this;
        _this._base = _base;
        _this._altura = _altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this._base * this._altura) / 2;
    };
    return Triangulo;
}(Poligono));
var p = new Array(3);
p[0] = new Triangulo(10, 15);
p[1] = new Triangulo(6, 9);
p[2] = new Triangulo(4, 19);
for (var i = 0; i < p.length; i++) {
    console.log("\u00C1rea dos tri\u00E2ngulo ".concat(i + 1, ": ").concat(p[i].calcularArea(), "cm\u00B2"));
}
// Área dos triângulo 1: 75cm²
// Área dos triângulo 2: 27cm²
// Área dos triângulo 3: 38cm²
