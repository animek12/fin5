const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6285850539404
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} ๐*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '๐ฎNote : HALO KAK SAYA FIN-BOTZ, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu',
           hydratedButtons: [{
             urlButton: {
               displayText: '๐ฎ๐๐ง๐ค๐ช๐ฅ๐ฝ๐ค๐ฉ๐ฎ',
               url: 'https://linktr.ee/alfin222'
             }

           },
                {
               urlButton: {
               displayText: '๐ป๐๐ค๐ช๐ฉ๐ช๐๐ ๐พ๐ง๐๐๐ฉ๐ค๐ง๐ป',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
               {
             quickReplyButton: {
               displayText: '๐๐๐ฌ๐๐',
               id: '.sewabot',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '๐๐๐ง๐๐ฅ๐ฉ๐๏ธ',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '๐๐๐จ๐ฉ ๐พ๐ค๐ข๐ข๐๐ฃ๐๐',
               id: '.allmenu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
