let pets = ['cat', 'dog', 'rat'];

// for (let i of pets) {
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);
