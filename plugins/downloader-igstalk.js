import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    try{
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* Followers
*${followingH}* Following
*${postsH}* Posts
*Bio:* ${description}
`.trim())
}catch(e){
    m.reply('Api Error')
}
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler