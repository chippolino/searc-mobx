import { makeAutoObservable, observable } from "mobx"

const Cities = [
  'Amsterdam',
  'London',
  'Madrid'
]



class Store {
  constructor() {
    makeAutoObservable(this)
  }

  query = observable.box('')
  cities: string[] = ['Amsterdam', 'London', 'Madrid']

  setQuery = (query: string) => {
    this.query.set(query.toLowerCase())
  }

  get filteredCities() {
    return Cities.filter(city => city.toLowerCase().includes(this.query.get()))
  }
}

export const createStore = new Store()

// export type TStore = ReturnType<typeof Store>