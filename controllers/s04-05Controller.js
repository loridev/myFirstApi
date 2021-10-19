module.exports = {
    milisegundos: (req, res) => {
        res.status(200).send({dataActualMilisecs: new Date().getTime()});
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
        res.status(200).send({dataActual: `${dd}-${mm}-${yyyy}`});
    },
    horaActual: (req, res) => {
        const dataActual = new Date();
        let hr = dataActual.getHours();
        let min = dataActual.getMinutes() + 1;
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
        res.status(200).send({horaActual: `${hr}:${min}:${seg}`});
    }
}