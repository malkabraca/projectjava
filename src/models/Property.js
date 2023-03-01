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
    this.credit = credit;
    this.createdAt = createdAt;
    this.imgUrl = imgUrl;
  }
}
export default Property;
