interface student {
  stuname: string
  age: number
}

class ArrayList {
  constructor(public element: Array<object>) {

  }

  get(index: number) {
    return this.element[index]
  }

  show() {
    this.element.forEach(ele => {
      console.log(ele)
    })
  }

  remove(value: number): number
  remove(vallue: student): student
  remove(identifer: number | student): number | student | undefined {
    let delIdx
    if (typeof identifer === 'number') {
      delIdx = identifer
    } else {
      delIdx = this.element.findIndex(ele => JSON.stringify(ele) === JSON.stringify(identifer))
    }
    this.element.splice(delIdx, 1)
    return identifer
  }
}

const stOne: student = { stuname: 'a', age: 20 }
const stTwo: student = { stuname: 'b', age: 21 }
const stThree: student = { stuname: 'c', age: 22 }
const arr = new ArrayList([stOne, stTwo, stThree])

arr.remove(stTwo)
arr.show();

export default ArrayList
