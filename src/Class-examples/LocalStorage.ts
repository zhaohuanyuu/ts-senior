class LocalStorage {
  static localstorage: LocalStorage

  private constructor() {

  }

  public static getInstance() {
    // let localstorage
    //
    // if (!localstorage) {
    //   localstorage = new LocalStorage()
    // }
    //

    // return localstorage

    if (!this.localstorage) {
      this.localstorage = new LocalStorage()
    }

    return this.localstorage
  }

  public setIem(key: string, value: any) {
    localStorage.setItem(key, value == undefined ? value : JSON.stringify(value))
  }

  public getIem(key: string) {
    const value = localStorage.getItem(key)

    return value != undefined ? JSON.parse(value) : null
  }
}

export default LocalStorage
