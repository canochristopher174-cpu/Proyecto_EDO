function sumarVectores(a, b) {
    return a.map((valor, i) => valor + b[i]);
}

function multiplicarVector(vector, escalar) {
    return vector.map(valor => valor * escalar);
}

function rk4(f, y0, t0, tf, h) {

    const t = [];
    const Y = [];

    let tActual = t0;
    let yActual = [...y0];

    t.push(tActual);
    Y.push([...yActual]);

    while (tActual < tf - 1e-12) {

        const k1 = f(tActual, yActual);

        const k2 = f(
            tActual + h / 2,
            sumarVectores(
                yActual,
                multiplicarVector(k1, h / 2)
            )
        );

        const k3 = f(
            tActual + h / 2,
            sumarVectores(
                yActual,
                multiplicarVector(k2, h / 2)
            )
        );

        const k4 = f(
            tActual + h,
            sumarVectores(
                yActual,
                multiplicarVector(k3, h)
            )
        );

        const incremento = k1.map(
            (valor, i) =>
                (valor + 2 * k2[i] + 2 * k3[i] + k4[i]) / 6
        );

        yActual = sumarVectores(
            yActual,
            multiplicarVector(incremento, h)
        );

        tActual += h;

        t.push(tActual);
        Y.push([...yActual]);
    }

    return { t, Y };
}

module.exports = rk4;