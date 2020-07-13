const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// 1. an array of pokemon objects where the id is evenly divisible by 3
let divisibleBy3 = (object) => object.id %3 == 0;
let output1 = pokémon.filter(divisibleBy3);
// different way to do it 
let output2 = pokémon.filter(val => val.id  % 3 === 0);

console.log(output1)
console.log(output2)
console.log(pokémon.filter(id => id.id % 3 == 0))


// 2. an array of pokemon objects that are "fire" types
console.log(pokémon.filter(obje => obje.types.includes("fire")))

// 3. an array of pekmon objects that have more than one type 
console.log(pokémon.filter(object => object.types.length > 1));

// 4. an array with just the names of the pokemon 
console.log(pokémon.map (object => object.name))

// 5. an array with just the names of pokemon with an id greater than 99
console.log(pokémon.filter(object => object.id > 99).map(obje => obje.name))

// 6. an array with just the names of the pokemon whose only type is poison
console.log(pokémon.filter(obje => obje.types.includes("poison") && obje.types.length === 1).map(object => object.name))


// 7. an array containing just the first type of all pokemon whose second type is 'flying'
let sectypefly = pokémon.filter(obj => obj.types[1] === "flying")
console.log(sectypefly.map(obj => ({"name": obj.name , "1type": obj.types[0]})))


// 8. a count of the number of pokemon that are 'normal' type 
console.log(pokémon.filter(obj => obj.types.includes("normal")).length);


