const axios = require('axios')

let link = "http://api.petfinder.com/pet.find?format=json&key=2a42088b3b17ec3d18a2ac7cca5ad747&location=84111&count=10";
let pets = "";
let savedPets = [];

module.exports = {
    // GET
    getPets: (req, res) => {
        if (pets === "") {
            axios.get(link).then(result => {
                pets = result.data.petfinder.pets;
                console.log(pets);
            }).then(res.status(200).send(pets));
        }

        res.status(200).send(pets)
    },

    // POST
    savePet: (req, res) => {
        let petSaved = req.body;
        savedPets.push(petSaved);

        res.status(200).send(savedPets);

    },

    // DELETE
    deletePet: (req, res) => {
        let petDeletedId = req.params.id;
        let index = savedPets.findIndex(pet => pet.id === +petDeletedId)
        if (index !== -1) {
            savedPets.splice(index, 1)
        }
        res.status(200).send(savedPets);
    },

    // GET
    getSavedPets: (req, res) => {
        res.status(200).send(savedPets);
    }

    // UPDATE doesn't make sense in this case

}
