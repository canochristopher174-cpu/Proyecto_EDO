function edoPrimerOrden(t, Y) {

    const y = Y[0];

    return [
        -3 * y + 2 * t
    ];
}

function edoSegundoOrden(t, Y) {

    const y1 = Y[0];
    const y2 = Y[1];

    return [
        y2,
        4 * y2 - 3 * y1 + Math.exp(2 * t)
    ];
}

function sistemaLineal(t, Y) {

    const x = Y[0];
    const y = Y[1];

    return [
        3 * x + 2 * y,
        2 * x + 3 * y
    ];
}

function sistemaNoLineal(t, Y) {

    const x = Y[0];
    const y = Y[1];

    return [
        -0.16 * x + 0.08 * x * y,
        4.5 * y - 0.9 * x * y
    ];
}

module.exports = {
    edoPrimerOrden,
    edoSegundoOrden,
    sistemaLineal,
    sistemaNoLineal
};