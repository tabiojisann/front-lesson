const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
    console.log('hello');
  }
}

class My {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new My();

obj.printFullName();
obj2.printFullName();
