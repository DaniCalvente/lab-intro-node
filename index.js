class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    let sortedItems = this.items.sort((firstItem, secondItem) => {
      if ( firstItem > secondItem){
        return 1
      } else {
        return -1
      }
    })
  }

  get(pos) {
    if ( this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
    
  } 

  max() {
    if ( this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if ( this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
      this.items.reduce(( acc, element) => {
        return acc + element
      } ,0);
    
      if (this.items.length === 0) {
        return 0
      }
    
  }
  // ESTAMOS TRATANDO DE UTILIZAR METODO REDUCE PARA RETORNAR UN UNICO VALOR, CON EL ACUMULADO DE TODOS, PERO NO CONSEGUIMOS IMPLEMENTARLO

  avg() {}
}

module.exports = SortedList;
