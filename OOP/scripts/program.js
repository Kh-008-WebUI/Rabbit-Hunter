class Animal {
    constructor(name) {
        this.name = name;
        this.hungry = true;

    }

    speak() {
        const voice = this.voice();
        const msg = `${this.type} ${this.name} ${this.voice()} ${this.hungry ? '- хочет есть' : ''}`;
        console.log(msg);
    }

    isHungry() {
        return this.hungry;
    };

    setHungry(hungry) {
        this.hungry = hungry;
        if (!hungry) {
            console.log(this.name + ' покормлен');
        }
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.type = 'Пес';
    }

    voice() {
        return this.hungry ? 'лает' : 'спит';
    }
}

class PedigreeDog extends Dog {
    constructor(name, pedigree) {
        super(name);
        this.pedigree = pedigree;
    }
    voice() {
        return this.pedigree + ' благородно ' + super.voice();
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.type = 'Кот';
    }

    voice() {
        return 'мявчить';
    }
}

class Zoo {
    constructor(animals) {
        console.log("creating zoo");
        this.animals = animals;
        this.keepers = [];
    }

    addAnimal(animal) { this.animals.push(animal); }

    addKeepers(keeper) { this.keepers.push(keeper); }

    listAnimals() {
        this.animals.forEach((animal) => {
            animal.speak();
        });
    }
}

const animals = [];
const kuzya = new PedigreeDog("Kuzya", "шпиц");
const lucky = new PedigreeDog("Лаки", "Бессенджи");
animals.push(kuzya);
animals.push(lucky);
const zoo = new Zoo(animals);
///zoo.addAnimal(kuzya);
zoo.addAnimal(new Dog("Лаки"));
zoo.addAnimal(new Cat("Leonardo"));
zoo.addAnimal(new PedigreeDog("Лаки"));

zoo.listAnimals();

kuzya.setHungry(false);

zoo.listAnimals();
