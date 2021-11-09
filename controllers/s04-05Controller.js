const c = require('./../config/constants');

module.exports = {
    milisegundos: (req, res) => {
        res.status(c.status.success).send({dataActualMilisecs: new Date().getTime()});
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
        res.status(c.status.success).send({dataActual: `${dd}-${mm}-${yyyy}`});
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
        res.status(c.status.success).send({horaActual: `${hr}:${min}:${seg}`});
    },
    tablaMult: (req, res) => {
        const numero = req.params.numero;
        const message = [];

        if ((numero < 2 || numero > 5) || isNaN(numero)) {
            res.status(c.status.badRequest).send({error: 'Debes introducir un número entre el 2 y el 5!'});
        } else {
            for (let i = 1; i <= 10; i++) {
                message.push(`${numero} x ${i} = ${numero * i}`);
            }

            res.status(c.status.success).send({tabla: message});
        }
    },
    factorial: (req, res) => {
        const numero = req.query.num;

        if (isNaN(numero) || !numero || (numero % 1 !== 0)) {
            res.status(c.status.badRequest).send({error: 'Debes introducir un número entero!'});
        } else {
            res.status(c.status.success).send({factorial: calcFactorial(numero)});
        }

        function calcFactorial(num) {
            if (num === 0) { 
                return 1; 
            } else { 
                return num * calcFactorial( num - 1 ); 
            }
        }
    },
    calc: (req, res) => {
        const operacio = req.body.op;
        const num1 = req.body.num1;
        const num2 = req.body.num2;
        console.log(num1);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operacio) {
                case 'suma':
                    res.status(c.status.success).send({suma: `${num1} + ${num2} = ${sum(num1, num2)}`});
                    break;
                case 'resta':
                    res.status(c.status.success).send({resta: `${num1} - ${num2} = ${rest(num1, num2)}`});
                    break;
                case 'multiplicacio':
                    res.status(c.status.success).send({multiplicacio: `${num1} * ${num2} = ${mul(num1, num2)}`});
                    break;
                case 'divisio':
                    if (isNaN(div(num1, num2))) {
                        res.status(c.status.divisionMal).send({error: "No se puede dividir entre 0"});
                    }else {
                        res.status(c.status.success).send({divisio: `${num1} - ${num2} = ${div(num1, num2)}`});
                    }
                    break;
            }
        }

        function sum(num1, num2){return num1 + num2};
        function rest(num1, num2){return num1 - num2};
        function mul(num1, num2){return num1 * num2};
        function div(num1, num2){
            if (num2 == 0) {
                return NaN;
            } else {
                return num1 / num2;
            }
        };
    }
}