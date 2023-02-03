import caliph from 'caliph-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    await m.reply('_In progress, please wait..._')
    if (!args[0]) throw `Input URL`
    await caliph.downloader.tiktok(args[0]).then(res => {

    console.log(res.nowm)
    if (!res) throw 'Can\'t download video!'
   conn.sendMessage(m.chat, { video: { url: res.nowm }, caption : '*Sukses*', fileName : 'tiktok.mp4', mimetype : 'video/mp4'})
})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

async function shorten(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
