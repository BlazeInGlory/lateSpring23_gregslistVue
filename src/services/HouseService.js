import { AppState } from "../AppState.js"

class HouseService {
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log('[GETTING HOUSES]', res.data)
    AppState.houses = res.data.map (h=>new House(h))
  }
  async createHouse(formData) {
    const res = await api.post('api/houses', formData)
    logger.log('[CREATING HOUSE]', res.data)
    AppState.houses.unshift(new Car(res.data))
}

}

export const houseService = new HouseService()