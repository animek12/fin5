//Jangan Di ganti!! 
// Jika ada yang Jual sc langsung Di hapus!!

let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/239f046a928370340401f.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SOURCE BOT*
│ *Source code :* 
│ https://linktr.ee/fin222
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa mampir Website Owner Kak!

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
