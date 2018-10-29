import React, { Component } from 'react'
import PetContainer from './Pet'
import About from './About'
import Saved from './Saved'

const axios = require('axios')


class BodyContainer extends Component {
    constructor() {
        super();
        this.state = {
            allAnimals: [],
            savedAnimals: []
        }
        this.saveAnimal = this.saveAnimal.bind(this)
        this.updateSavedPets = this.updateSavedPets.bind(this)

    }

    saveAnimal(id) {
        console.log(id);
        var index = -1;
        console.log("INCOMING ANIMALS")
        console.log(this.state.allAnimals);
        for (var i = 0; i < this.state.allAnimals.length; i++) {
            console.log(+this.state.allAnimals[i].id.$t)
            if (id == +this.state.allAnimals[i].id.$t) {
                console.log("FOUND THE ANIMAL")
                axios.post("http://localhost:3005/api/pets", { pet: this.state.allAnimals[i] }).then(result => {
                    console.log(result)
                })
            }
        }
        this.updateSavedPets();
    }

    updateSavedPets() {
        axios.get("http://localhost:3005/api/getSavedPets").then(result => {
            console.log(result.data);

            this.setState({
                savedAnimals: result.data
            });
        })
    }

    componentDidMount() {
        axios.get("http://localhost:3005/api/pets").then(result => {
            // console.log(result.data.pet[0]);

            this.setState({

                allAnimals: [result.data.pet[0], result.data.pet[1], result.data.pet[2], result.data.pet[3], result.data.pet[4], result.data.pet[5], result.data.pet[6], result.data.pet[7], result.data.pet[8], result.data.pet[9]]

            });
        })
    }

    render() {
        if (this.props.currentPage === "Home") {
            let petArray = []
            for (var i = 0; i < this.state.allAnimals.length; i++) {
                let newAnimal = [this.state.allAnimals[i].name.$t, this.state.allAnimals[i].description.$t, this.state.allAnimals[i].media.photos.photo[2].$t, this.state.allAnimals[i].id.$t];

                petArray.push(newAnimal);
            }

            return (
                <div>
                    {petArray.map(pet => <PetContainer name={pet[0]} description={pet[1]} photo={pet[2]} id={pet[3]} handleClick={this.saveAnimal}></PetContainer>)}
                </div>

            )

        } else if (this.props.currentPage === "About") {
            return (<div>
                <About></About>
            </div>)
        } else if (this.props.currentPage === "Saved") {
            let petArray = []
            for (var i = 0; i < this.state.savedAnimals.length; i++) {
                console.log(this.state.savedAnimals[i])
                let newAnimal = [this.state.savedAnimals[i].name.$t, this.state.savedAnimals[i].description.$t, this.state.savedAnimals[i].media.photos.photo[2].$t, this.state.savedAnimals[i].id.$t];

                petArray.push(newAnimal);
            }

            return (
                <div>
                    {petArray.map(pet => <PetContainer name={pet[0]} description={pet[1]} photo={pet[2]} id={pet[3]} handleClick={this.saveAnimal}></PetContainer>)}
                </div>
            )

        } else {
            return (<div>
                404
        </div>)
        }
    }

}
export default BodyContainer;