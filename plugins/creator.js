import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝐴𝑑𝑟𝑖𝑎𝑛𝑛𝑋𝐷\nNICKNAME:👑 Owner 𝐷𝑟𝑦𝑎𝑛𝑋𝐷\nORG: 𝐷𝑟𝑦𝑎𝑛 𝑋𝐷\nTITLE:soft\nitem1.TRI;waid=6289513081052:+62 895-1308-1052\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: azzygota24@gmail.com\nitem3.X-ABLabel:💌 Mail Owner 𝐷𝑟𝑦𝑎𝑛𝑋𝐷\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,24 Mareti 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'own') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TRI;waid=6289513081052:+62 895-1308-1052\nitem1.X-ABLabel:${author}\nDryan-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nDryan-MD:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|own)$/i

export default handler