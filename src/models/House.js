export class House {
  constructor(data) {
    this.id = data.id
    this.style = data.style
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = new Profile(data.creator)
  }
}