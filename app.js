(function () {
	"use strict";
	let pokemonIDs = [];
	let pokeapiURL = 'https://pokeapi.co/api/v2/pokemon'

	function getRandomPokemonData (e) {
		e.preventDefault()
		let id = randomPokemonID()
		fetch(`${pokeapiURL}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow'
		}).then(response => response.json())
			.then(data => {
				console.log('Fetching Pokemon Data')
				console.log(data)
			})
			.catch(error => {
				console.log(error);
				console.error(error)
			})
	}

	function randomPokemonID() {
		let randomNum = Math.floor((Math.random() * 500) +1)
		while (pokemonIDs.includes(randomNum) ){
			randomNum = Math.floor((Math.random() * 500) +1)
		}
		pokemonIDs.push(randomNum)
		return randomNum
	}

	//====================== EVENT LISTENERS  AND DOM MANIPULATION ================================
	let pokeButton = $('#poke-button')
	pokeButton.click(getRandomPokemonData)

})();