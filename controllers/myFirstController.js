module.exports.helloWorld = (req, res) => {
    const jsonResponse = {msg: 'Hello world!'}
    const status = 200;
    res.status(status).send(jsonResponse);
}

module.exports.alumnes = (req, res) => {
    const arrayAlumnes = ["Miquel", "Eric", "Alba", "Marc", "Albert", "Alejandro", "Biel", "Dani", "Gerard", "Gabriel", "Marcos"];
    const lengthArr = arrayAlumnes.length;
    const jsonResponse = {
        alumnesArr: arrayAlumnes,
        alumnesLength: lengthArr,
    };
    res.status(200).send(jsonResponse);
}