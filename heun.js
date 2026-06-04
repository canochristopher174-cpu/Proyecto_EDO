function sumarVectores(a, b) {
    return a.map((valor, i) => valor + b[i]);
}

function multiplicarVector(vector, escalar) {
    return vector.map(valor => valor * escalar);
}

function heun(f, y0, t0, tf, h) {

    const t = [];
    const Y = [];

    let tActual = t0;
    let yActual = [...y0];

    t.push(tActual);
    Y.push([...yActual]);

    while (tActual < tf - 1e-12) {

        const k1 = f(tActual, yActual);

        const yPred = sumarVectores(
            yActual,
            multiplicarVector(k1, h)
        );

        const k2 = f(tActual + h, yPred);

        const promedio = k1.map(
            (valor, i) => (valor + k2[i]) / 2
        );

        yActual = sumarVectores(
            yActual,
            multiplicarVector(promedio, h)
        );

        tActual += h;

        t.push(tActual);
        Y.push([...yActual]);
    }

    return { t, Y };
}

module.exports = heun;