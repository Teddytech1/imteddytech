const { cmd } = require('../command');
let antideleteStatus = {}; // Tracks the ON/OFF status for each chat


cmd({
    pattern: "channel",
    desc: "Get the link to the official WhatsApp channel.",
    react: "📢",
    category: "utility",
    use: ".channel",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the channel link inside the command
        const channelLink = "https://whatsapp.com/channel/0029Vb6b7ZdF6sn4Vmjf2X1O";

        // Send the channel link to the user
        reply(`*ʜᴇʀᴇ's ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴏᴜʀ ᴏғғɪᴄɪᴀʟ ᴡʜᴀᴛsᴀᴘᴘ ᴀʟɪ ᴄʜᴀɴɴᴇʟ*:\n\n${channelLink}\n\n> *ᴊᴏɪɴ ᴜs ᴛᴏ sᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ ᴡɪᴛʜ ᴛʜᴇ ʟᴀᴛᴇsᴛ ɴᴇᴡs ᴀɴᴅ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛs🧞‍♂️.*`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending channel link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the channel link.");
    }
});
// Command for sending the support group or page link
cmd({
    pattern: "support",
    desc: "Get the link to the support group or page.",
    react: "🛠️",
    category: "utility",
    use: ".support",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the support link inside the command
        const supportLink = "https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n";

        // Send the support link to the user
        reply(`*ɴᴇᴇᴅ ʜᴇʟᴘ ᴏʀ ʜᴀᴠᴇ ǫᴜᴇsᴛɪᴏɴs ? ᴊᴏɪɴ ᴀʟɪ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ🪀*\n\n${supportLink}\n\n
> *ғᴇᴇʟ ғʀᴇᴇ ᴛᴏ ᴀsᴋ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴs ᴏʀ ʀᴇᴘᴏʀᴛ ɪssᴜᴇs🙇🏻‍♂️.*.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending support link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the support link.");
    }
});
