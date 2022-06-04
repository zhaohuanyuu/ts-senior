
class People {
  constructor(
    public username: string,
    public age: number,
    public address: string
  ) {

  }
}

class Stu{
  public username!: string
  public age!: number;
  public address!: string
  public phone!: string

  constructor(username: string, age: number, address: string) {
    this.address = address;
  }

  study() {

  }
}


export { People, Stu }
