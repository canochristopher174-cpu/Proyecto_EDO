const fs = require("fs");

const heun = require("./heun");
const rk4 = require("./rk4");

const {
    sistemaLineal
} = require("./problemas");

// =====================================
// PARÁMETROS
// =====================================

const t0 = 0;
const tf = 1;
const h = 0.1;

const y0 = [1, 0];

// =====================================
// SOLUCIONES ANALÍTICAS
// =====================================

function solucionAnaliticaX(t) {

    return (
        0.5 * (
            Math.exp(5 * t)
            + Math.exp(t)
        )
    );

}

function solucionAnaliticaY(t) {

    return (
        0.5 * (
            Math.exp(5 * t)
            - Math.exp(t)
        )
    );

}

// =====================================
// MÉTODOS NUMÉRICOS
// =====================================

const resultadoHeun =
    heun(
        sistemaLineal,
        y0,
        t0,
        tf,
        h
    );

const resultadoRK4 =
    rk4(
        sistemaLineal,
        y0,
        t0,
        tf,
        h
    );

// =====================================
// CSV
// =====================================

let csv =
    "t,x_analitica,y_analitica,x_heun,y_heun,x_rk4,y_rk4\n";

for (let i = 0; i < resultadoHeun.t.length; i++) {

    const tActual =
        resultadoHeun.t[i];

    const xAnalitica =
        solucionAnaliticaX(tActual);

    const yAnalitica =
        solucionAnaliticaY(tActual);

    const xHeun =
        resultadoHeun.Y[i][0];

    const yHeun =
        resultadoHeun.Y[i][1];

    const xRK4 =
        resultadoRK4.Y[i][0];

    const yRK4 =
        resultadoRK4.Y[i][1];

    csv +=
        `${tActual},${xAnalitica},${yAnalitica},${xHeun},${yHeun},${xRK4},${yRK4}\n`;

}

fs.writeFileSync(
    "sistema_lineal.csv",
    csv
);

console.log(
    "Archivo sistema_lineal.csv generado."
);