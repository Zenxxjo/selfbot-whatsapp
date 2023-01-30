import { savefrom } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    await m.reply('_In progress, please wait..._')
    if (!args[0]) throw `Input URL`
  var { url } = await (await savefrom (args[0]))[0].url[0]

    console.log(url)
    if (!url) throw 'Can\'t download video!'
   await conn.sendMessage(m.chat, { video: { url: url }, caption : '*Sukses*', fileName : 'tiktok.mp4', mimetype : 'video/mp4'})

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function shorten(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
