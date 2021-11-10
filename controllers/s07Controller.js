const c = require('./../config/constants');

module.exports = {
    add: (req, res) => {
        const obj = {
            id: ++c.id,
            modelo: req.body.modelo,
            precio: req.body.precio,
            pulgadas: req.body.pulgadas,
            ram: req.body.ram,
            cpu: req.body.cpu
        };
        c.moviles.push(obj);

        res.status(c.status.success).send({
            Mensaje: 'Móvil añadido con éxito!',
            AddedPhone: obj,
        });
    },
    get: (req, res) => {
        res.status(c.status.success).send({Moviles: c.moviles});
    },
    set: (req, res) => {
        const obj = {
            id: req.body.id,
            modelo: req.body.modelo,
            precio: req.body.precio,
            pulgadas: req.body.pulgadas,
            ram: req.body.ram,
            cpu: req.body.cpu
        };
        if (c.moviles.length === c.moviles.filter(movil => movil.id !== obj.id).length) {
            res.status(c.status.badRequest).send({Error: 'El móvil que quieres modificar no existe.'});
        } else {
            c.moviles = c.moviles.filter(movil => movil.id !== obj.id);
            c.moviles.push(obj);
            c.moviles.sort((a, b) => a.id - b.id);
            res.status(c.status.success).send({
                Mensaje: 'Móvil modificado con éxito!',
                ModifiedPhone: obj,
            });
        }
    },
    delete: (req, res) => {
        const obj = c.moviles.find(movil => movil.id === req.body.id);
        if (c.moviles.length === c.moviles.filter(movil => movil.id !== obj.id).length) {
            res.status(c.status.badRequest).send({Error: 'El móvil que quieres eliminar no existe.'});
        } else {
            c.moviles = c.moviles.filter(movil => movil.id !== obj.id);
            res.status(c.status.success).send({
                Mensaje: 'Móvil eliminado con éxito',
                DeletedPhone: obj,
            });
        }
    }
}