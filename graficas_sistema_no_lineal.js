const fs = require("fs");

const heun = require("./heun");
const rk4 = require("./rk4");

const {
    sistemaNoLineal
} = require("./problemas");

const t0 = 0;
const tf = 10;

const h = 0.1;

const y0 = [4, 1];

const resultadoHeun =
    heun(
        sistemaNoLineal,
        y0,
        t0,
        tf,
        h
    );

const resultadoRK4 =
    rk4(
        sistemaNoLineal,
        y0,
        t0,
        tf,
        h
    );

let csv =
    "t,x_heun,y_heun,x_rk4,y_rk4\n";

for (let i = 0; i < resultadoHeun.t.length; i++) {

    csv +=
        `${resultadoHeun.t[i]},` +
        `${resultadoHeun.Y[i][0]},` +
        `${resultadoHeun.Y[i][1]},` +
        `${resultadoRK4.Y[i][0]},` +
        `${resultadoRK4.Y[i][1]}\n`;

}

fs.writeFileSync(
    "sistema_no_lineal.csv",
    csv
);

console.log(
    "Archivo sistema_no_lineal.csv generado."
);