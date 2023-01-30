import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Reply/Sertakan gambar dengan perintah\n${usedPrefix + command} [${atas ? atas : 'teks atas'}|${bawah ? bawah : 'teks bawah'}]\n\nContoh: .smeme Lala|Bot`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `${mime} tidak didukung !\n\nReply/sertakan gambar dengan perinah\n.smeme teks`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.help = ['smeme (teks|teks)']
handler.tags = ['convert']
handler.command = /^(smeme)$/i


export default handler