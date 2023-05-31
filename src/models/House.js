import { Profile } from "./Account.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = new Profile(data.creator)
    this.levels = data.levels
  }
}