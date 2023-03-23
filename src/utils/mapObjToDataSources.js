export const mapDataListToDatasources = (arr = []) => {
  return arr.map((item) => {
    return {
      key: item.isbn13,
      cover: item.image,
      title: item.title,
      amount: item.count,
      price: item.price,
    }
  }).reverse()
}