const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["teddy","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 𝐓𝐄𝐃𝐃𝐘-𝐗𝐌𝐃 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs 𝐓𝐄𝐃𝐃𝐘-𝐗𝐌𝐃*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : Teddy*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : Kibet Wycliffe*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : TEDDY-XMD*
*┃★│* *ᴀɢᴇ : 21 ʏᴇᴀʀs*
*┃★│* *ᴄɪᴛʏ : Kericho*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ  𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢TEDDY TECH*
*┃★│* *▢CHAT-GPT*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚃𝙴𝙳𝙳𝚈 ᴛᴇᴄʜ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/9yy6iy.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421104812135@newsletter',
      newsletterName: '𝐓𝐄𝐃𝐃𝐘-𝐗𝐌𝐃',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
