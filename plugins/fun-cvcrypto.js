import fetch from 'node-fetch'

let handler = async (m, {conn, text, args}) => {
  if (!text) throw `Untuk Menggunakanya Contoh .cv 100 USDT BTC`
  let coin1 = args[1].toUpperCase();
  let coin2 = args[2].toUpperCase();
  let jmal = args[0];
  let cvcoin = `${coin1}${coin2}`
  try{
      let api = await fetch(`https://api3.binance.com/api/v3/ticker?symbol=${cvcoin}`)
      let res = await api.json()
      let high = parseFloat(res.highPrice).toFixed(3);
	  let low = parseFloat(res.lowPrice).toFixed(3);
	  let last = `${res.lastPrice}`;
	  let hasils = jmal * `${last}`;
	  await conn.sendMessage(m.chat, { text: `📈 High : $${high} \n📉 Low  : $${low} \n📊 Convert Dari ${coin1} Ke ${coin2}\n\n${jmal} ${coin1} =  ${hasils} ${coin2}`, }, { quoted: m });
		        
  } catch (e) {
      m.reply(e)
    }
}
handler.command = ['vcrypto','cv']
handler.tags = ['fun']
handler.help = ['vcrypto']

export default handler
