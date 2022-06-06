
interface People{
  username: string,
  age: number,
  address: string,
  phone: string,
}

class Stu{
  // public username!: string
  public age!: number;
  public address!: string
  public phone!: string

  constructor(username: string, age: number, address: string) {
    this.address = address;
  }

  public study() {

  }
}


export { People, Stu }
