import fetch from 'node-fetch'

let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .crypto BTC`
  let coin = text.toUpperCase();
  let api = await fetch(`https://api3.binance.com/api/v3/ticker?symbol=${coin}USDT`)
  let res = await api.json()
  let memex = `${res.highPrice}`;
  let memex1 = `${res.lowPrice}`;
  let memex2 = `${res.lastPrice}`;
  let last = parseFloat(memex2).toFixed(3);
  let high = parseFloat(memex).toFixed(3);
  let low = parseFloat(memex1).toFixed(3);
  m.reply(`*── 「 HARGA ${coin} 」 ──*\n\n🏷️ Price : $${last} \n📈 High : $${high} \n📉 Low  : $${low} \n`)
}
handler.command = ['crypto','p']
handler.tags = ['fun']
handler.help = ['crypto']

export default handler