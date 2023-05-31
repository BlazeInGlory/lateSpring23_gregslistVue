import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService {
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log('[GETTING HOUSES]', res.data)
    AppState.houses = res.data.results.map (h=>new House(h))
  }
  async createHouse(formData) {
    const res = await api.post('api/houses', formData)
    logger.log('[CREATING HOUSE]', res.data)
    AppState.houses.unshift(new House(res.data))
}

}

export const houseService = new HouseService()