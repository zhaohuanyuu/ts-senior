
class People {
  public myusername!: string
  public myage!: number
  public address!: string
  public phone!: string

  constructor() {

  }

  eat() {

  }

  step() {
    console.log("People=>step");
  }
}

class Stu extends People {
  public username!: string
  public age!: number;
  public address!: string

  constructor(username: string, age: number, address: string, public phone: string) {
    //  super(username, age);
    super();
    this.address = address;
  }

  study() {

  }

}


export { People, Stu }
