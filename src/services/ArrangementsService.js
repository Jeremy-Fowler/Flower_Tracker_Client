import { AppState } from "../AppState"

class ArrangementsService {
  createArrangement(data) {
    AppState.arrangement = data
  }
}

export const arrangementsService = new ArrangementsService()