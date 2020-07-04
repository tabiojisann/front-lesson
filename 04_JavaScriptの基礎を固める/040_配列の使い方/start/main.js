const person = {
  name:  ['code', 'mafia'],
  age: 32,
  gender: 'male',
  interests: {
      sports: 'soccer',
      music: 'piano'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

person.getFullName();

