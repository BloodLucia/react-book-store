// 将美元转换为人民币
export const usd2Rmb = (input) => {
  const usdStr = input.split('$')[1];
  const usd = +usdStr * 6.83
  return `￥${parseInt(usd)}`
}
