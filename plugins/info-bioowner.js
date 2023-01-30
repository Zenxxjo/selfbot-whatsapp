let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(global.owner[0][0] + '@s.whatsapp.net', 'image').catch(_ => 'https://telegra.ph/file/f14cb0033a6489eafff32.jpg') 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : DEFF
*✉️ Nama RL* : Daffa Yudhistira
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 16 Februari 2007
*🎨 Umur* : 15
*🧮 Kelas* : 10
*🧩 Hobby* : Nonton Anime, Mobile Legend, Main Bot
*💬 Sifat* : Baik,Ramah
*🗺️ Tinggal* : Indo, Riau, Indragiri Hulu, Air Molek
*❤️ Suka* : kuning & biru, Hanime, waifu, loli, trap, furry, neko
*💔 Benci* : autis, anak epep, seleb
*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @this.deff.y
*🏮 Chanel Youtube* : DEFF
*🐈 Github:* DEFF-Y
`
conn.sendHydrated(m.chat, teksbio, global.botName, ppown, "wa.me/" + global.owner[0][0], "💬 ᴄʜᴀᴛs", null,null, [[null, null], [null, null],[null,null]], m, { viewOnce: m })
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
