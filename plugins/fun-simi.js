import fetch from 'node-fetch'

let handler = async (m, {text, args}) => {
  try {
    if (!args[0]) throw `Use example halo`
    let api = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
    let res = await api.json()
    await m.reply(res.success)
  }catch (e){
    await m.reply('Bot Turu BosQ')
  }
}
handler.command = ['simi','bot']
handler.tags = ['fun']
handler.help = ['simi','bot']

export default handler