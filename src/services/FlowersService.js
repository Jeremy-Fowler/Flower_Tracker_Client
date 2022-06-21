import { AppState } from "../AppState"
import { generateId } from "../utils/GenerateId"

class FlowerService {
  create(data) {
    data.id = generateId()
    AppState.flowers.unshift(data)
  }
  remove(id) {
    AppState.flowers = AppState.flowers.filter(f => f.id !== id)
  }

  edit(id, bool) {
    let flower = AppState.flowers.find(f => f.id == id)
    if (bool) {
      flower.quantity++
    }
    else if (!bool && flower.quantity > 1) {
      flower.quantity--
    }
  }
}

export const flowersService = new FlowerService()