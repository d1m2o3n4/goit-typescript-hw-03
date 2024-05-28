class Key {
  private sinnature: number = Math.random();
  getSignature(): number {
    return this.sinnature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tenants: Person[] = [];
  constructor(protected key: Key) {}
  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
