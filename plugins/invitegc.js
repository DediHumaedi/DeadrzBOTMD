let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363025951204044@g.us",
"inviteCode": "CYEBSMU6JGUBeyvehi8NyM",
"inviteExpiration": `99999999999`,
"groupName": "Deadrz BOT",
"caption": `Iya Halo Bang, Kenpa?`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: ftroli })
conn.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
handler.help = ['Hallo']
handler.tags = ['main']
handler.command = /^(hello|HaloBot|bots)$/i

export default handler