const status = {
    success: 200,
    notFound: 404,
    badRequest: 400
};

module.exports = {
    milisegundos: (req, res) => {
        res.status(status.success).send({dataActualMilisecs: new Date().getTime()});
    },
    fechaActual: (req, res) => {
        const dataActual = new Date();
        let dd = dataActual.getDate();
        let mm = dataActual.getMonth() + 1;
        const yyyy = dataActual.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        res.status(status.success).send({dataActual: `${dd}-${mm}-${yyyy}`});
    },
    horaActual: (req, res) => {
        const dataActual = new Date();
        let hr = dataActual.getHours();
        let min = dataActual.getMinutes();
        let seg = dataActual.getSeconds();
        if (hr < 10) {
            hr = '0' + hr;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (seg < 10) {
            seg = '0' + seg;
        }
        res.status(status.success).send({horaActual: `${hr}:${min}:${seg}`});
    },
    tablaMult: (req, res) => {
        const numero = req.params.numero;
        const message = [];

        if((numero < 2 || numero > 5) || isNaN(numero)) {
            res.status(status.badRequest).send({error: 'Debes introducir un número entre el 2 y el 5!'});
        } else {
            for (let i = 1; i <= 10; i++) {
                message.push(`${numero} x ${i} = ${numero * i}`);
            }

            res.status(status.success).send({tabla: message});
        }

    }
}