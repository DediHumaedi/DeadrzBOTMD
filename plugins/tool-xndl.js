import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p, command, args }) => {
    if(args.length == 0) return m.reply(`Masukan query , Example : ${_p + command} https://www.xnxx.com/video-14dwbn02/hot_step_mom_fucks_her_s_best_friend_in_a_hotel_room`)
	const cari = args[0]
	try {
		const urls = await fetch(`http://api.sun3haxor.my.id/api/xndetail?url=${cari}&apikey=LLVOdtcN`)
		const url = await urls.json()
		
		let info = url.result.info.replace("\n"," ");
		let text = `🍌 Judul : ${url.result.title}\n`
		text += `👀 Penonton : ${url.result.duration}\n`
		let info2 = info.replace("\n", " ");
		text += `ℹ️ Info : ${info2.replace("\t\t\t\t\t"," ")}\n`
		/*await conn.sendMessage(
		    m.from,
			{
				document: await fetchBuffer(url.result.files.high, { skipSSL: true }),
				mimetype: "video/mp4",
				fileName: url.result.title + ".mp4",
				text: text,
			},
			{ quoted: m }
		);*/
	    //await conn.sendMessage(m.from, {video: {url: url.result.files.high}, caption: text}, {quoted: m});
	    await conn.sendFile(m.chat, url.result.files.high, 'out.mp4', `*DONE* \n${text}`, m, 0, { thumbnail: url.result.image })
	} catch(e){
	    await conn.sendMessage(m.from, {text: e.message}, { quoted: m});
    }
}
handler.help = ['xndl <link>']
handler.tags = ['fun']

handler.command = ['xndl']

export default handler