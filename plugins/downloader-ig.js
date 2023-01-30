import axios from 'axios'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = await instagram(args[0])
    console.log(results.url)
    for (const { url } of results) 
    await conn.sendMessage(m.chat, { video: { url: url }, caption : '*Sukses*', fileName : 'ig.mp4', mimetype : 'video/mp4'})
    }
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

async function instagram(url) {
    let res = await axios("https://indown.io/")
    let _$ = cheerio.load(res.data)
    let referer = _$("input[name=referer]").val()
    let locale = _$("input[name=locale]").val()
    let _token = _$("input[name=_token]").val()
    let {
        data
    } = await axios.post("https://indown.io/download", new URLSearchParams({
        link: url,
        referer,
        locale,
        _token
    }), {
        headers: {
            cookie: res.headers["set-cookie"].join("; ")
        }
    })
    let $ = cheerio.load(data)
    let result = []
    let __$ = cheerio.load($("#result").html())
    __$("video").each(function() {
        let $$ = $(this)
        result.push({
            type: "video",
            thumbnail: $$.attr("poster"),
            url: $$.find("source").attr("src")
        })
    })
    __$("img").each(function() {
        let $$ = $(this)
        result.push({
            type: "image",
            url: $$.attr("src")
        })
    })

    return result
}
export default handler
