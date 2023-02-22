class Property {
  id;
  title;
  subtitle;
  description;
  price;
  credit;
  createdAt;
  imgUrl;
  constructor(
    id,
    title,
    subtitle,
    description,
    price,
    credit,
    createdAt,
    imgUrl
  ) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.price = price;
    this.Credit = credit;
    this.imgUrl = imgUrl;
    this.createdAt = createdAt;
  }
}
export default Property;
