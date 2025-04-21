

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { adams } = require("../Ibrahim/adams");

adams(
  { nomCom: "alive", reaction: "🦠", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Alive command triggered!");

    // List of 5 random audio URLs
    const audioUrls = [
      "https://files.catbox.moe/npi5nz.mp3",
      "https://files.catbox.moe/5x9pup.m4a",
      "https://files.catbox.moe/7rujoa.m4a",
      "https://files.catbox.moe/iy8itm.m4a",
      "https://files.catbox.moe/f93xir.m4a"
    ];

    const imageUrl = "https://files.catbox.moe/8wl1l2.jpg";  // Replace with your image URL
    const sourceUrl = "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";  // Replace with your source URL

    const varmess = `🦠 *Virusi mbaya* 🦠🦠✅\n\n🦠 *Bot is Online*\n✨ Health Status: Excellent ✨`;

    try {
      // Randomly pick an audio file
      const randomAudio = audioUrls[Math.floor(Math.random() * audioUrls.length)];

      // Send a typing indicator to create a leading effect
      await zk.sendMessage(dest, { text: "🦠*Preparing your audio...* Please wait..." });

      // Wait a moment to simulate processing (optional)
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay for leading effect

      // Send the audio message with context info
      await zk.sendMessage(dest, {
        audio: { url: randomAudio },
        mimetype: "audio/mpeg",  // Ensure correct MIME type for MP3
        ptt: true,  // Send as a voice message (playable with audio waves)
        caption: varmess,
        contextInfo: {
          mentionedJid: [commandeOptions.nomAuteurMessage || dest],
          externalAdReply: {
            title: "Virusi mbaya 🦠🦠✅",
            body: "© virusi",
            thumbnailUrl: imageUrl,
            sourceUrl: sourceUrl,
            mediaType: 2,  // Audio with external ad reply
            renderLargeThumbnail: true,  // Ensures large thumbnail display
          }
        }
      });

      console.log("Alive message with audio and large thumbnail sent successfully!");

    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  }
);

console.log("WhatsApp bot is ready.");




