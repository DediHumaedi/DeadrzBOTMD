import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let url = args[0];
    let res = (await axios.get('https://api.akuari.my.id/downloader/tiktok?link=${url}')).data;
    
    let result = `⟐⟞⟚⟝⟮ *Title:* ⟯⟞⟚⟝⟐
┇⟣⟪ ${res.creator} ⟫⟢
▥ ━┉┄┄┈┈ ▢

┇⟐⟞⟚⟝⟮ *Author* ⟯⟞⟚⟝⟐
▥ ━┉┄┄┈┈ ▢
${res.creator}
◈ ━┉┈┄┈┈ ►`
    await conn.sendFile(m.chat,  res.respon.video, 'out.mp4', `*DONE* \n${result}`, m, 0)
    //conn.sendButtonVid(m.chat, res.video, result, '_© Created by aldi_', `Audio`, `.gettt ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i

export default handler
