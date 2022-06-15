import { AppState } from "../AppState"
import { generateId } from "../utils/GenerateId"

class FlowerService {
  create(data) {
    data.id = generateId()
    AppState.flowers.unshift(data)
  }
}

export const flowersService = new FlowerService()