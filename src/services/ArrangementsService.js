import { AppState } from "../AppState"

class ArrangementsService {
  createArrangement(data) {
    AppState.arrangement = data
  }

  clear() {
    AppState.arrangement = null
    AppState.flowers = []
  }
}

export const arrangementsService = new ArrangementsService()