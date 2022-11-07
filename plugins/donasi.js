let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "0821253885",
"title": `Jasa Sewa Deadrz BOT`,
"description": `HALO BANG`,
"currencyCode": "IDR",
"bodyText": 'Dedi Humaedi',
"footerText": wm,
"priceAmount1000": "5000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": "wa.me/6285921750351"
},
"businessOwnerJid": "6285921750351@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftroli })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

handler.limit = true

export default handler