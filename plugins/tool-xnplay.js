import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p, command, text}) => {
	if (!text) return m.reply(`No query given to search. \nUse example : ${_p + command} japan`);
	const xn = await fetch(`https://api.sun3haxor.my.id/api/xnsearch?query=${text}&apikey=LLVOdtcN`);
	const xnPlay = await xn.json()
	try {
		let sections = [{ title: "*[ Silahkan Pilih ]*", rows: [] }];
		var i = 0
		while ( i < xnPlay.result.length ) {
			const info = xnPlay.result[i].info.replace("\n", " ");
			let info1 = info.replace("\n"," ")
	    	let info2 = info1.replace("\n"," ")
			sections[0].rows.push({ title: `${xnPlay.result[i].title}`, rowId: `#xndl ${xnPlay.result[i].link}`, description: `${info2}`});
			i++
			}
		let listMessage = {
		    text: '*[ List XNXX ]*\n\n*Note :* Silahkan dinikmati moga crot',
		    footer: 'Deadrz',
		    buttonText: 'Silahkan Klik Di Sini',
		    sections
        	}
		await conn.sendMessage(m.chat, listMessage, m)
	   	}catch (e) {
			await m.reply('Error BosQ');
	    }
}
handler.help = ['xnplay <japan>']
handler.tags = ['fun']

handler.command = ['xnplay','xnp']

export default handler