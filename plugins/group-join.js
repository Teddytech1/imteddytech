const config = require('../config');
const { cmd } = require('../command');
const { isUrl } = require('../lib/functions');

// Contact message for verified context
const quotedContact = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        remoteJid: "status@broadcast"
    },
    message: {
        contactMessage: {
            displayName: "TEDDY-XMD VERIFIED ✅",
            vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:TEDDY-XMD VERIFIED ✅\nORG:TEDDY-XMD BOT;\nTEL;type=CELL;type=VOICE;waid=254799963586:+254799963583\nEND:VCARD"
        }
    }
};

cmd({
    pattern: "join",
    react: "📬",
    alias: ["joinme", "f_join"],
    desc: "To Join a Group from Invite link",
    category: "group",
    use: '.join < Group Link >',
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, isCreator, reply }) => {
    const contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363421104812135@newsletter",
            newsletterName: "TEDDY-XMD",
            serverMessageId: 1
        }
    };

    try {
        if (!isCreator) return reply(`
╭───「 *ACCESS DENIED* 」───╮
│ ❌ You don't have permission to use this command.
╰──────────────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });

        if (!q && !quoted) return reply(`
╭───「 *USAGE* 」───╮
│ ❌ Please provide or reply with a valid group link.
╰──────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });

        let groupLink;

        if (quoted && quoted.type === 'conversation' && isUrl(quoted.text)) {
            groupLink = quoted.text.split('https://chat.whatsapp.com/')[1];
        } else if (q && isUrl(q)) {
            groupLink = q.split('https://chat.whatsapp.com/')[1];
        }

        if (!groupLink) return reply(`
╭───「 *ERROR* 」───╮
│ ❌ Invalid Group Link.
╰──────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });

        await conn.groupAcceptInvite(groupLink);

        return await conn.sendMessage(from, {
            text: `
╭───「 *SUCCESS* 」───╮
│ ✔️ Successfully joined the group!
╰────────────────────╯
            `.trim(),
            contextInfo
        }, { quoted: quotedContact });

    } catch (e) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        console.error("Join Error:", e);
        reply(`
╭───「 *ERROR* 」───╮
│ ❌ Failed to join the group.
│ 💬 Reason: ${e.message}
╰──────────────────╯
        `.trim(), { quoted: quotedContact, contextInfo });
    }
});
