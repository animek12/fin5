let handler = async (m, { conn, command, text }) => {
await conn.sendMessage(m.chat, { delete: m.key })
}
handler.customPrefix = /lonte|bitch|tits/i
handler.command = new RegExp

module.exports = handler
