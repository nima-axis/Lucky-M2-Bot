/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['256789966218','256789966218'], // Add your number without + or spaces (e.g., 256789966218)
    ownerName: ['Lucky 218', 'Lucky M2 Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Lucky M2 Bot',
    version: '1.5.0',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VU25KiSBT8l3rFGBEvgBEdsYCIoDa0oKIb+1BCcZFLYVUh4oT/voE9PT0Pu7O9b0VVkCdPZp7zHZQ4pWiJWjD9DiqSXiFD3ZG1FQJToNZRhAjogRAyCKZgtEoOqC8dJmeuDWSTM+uT6zvn65ZEu5P6iiN/oWd9XTV8+gIePVDVpzwNfgPY6jYnZTsPRm/+ZW0NHd9brCC5t1ihhCzOhq3ojkzO5Ca9gEeHCFOSlrFeJahABOZL1DowJV+jr8wi4dgkVpOcJsdwnBnoxloMdcsarJhqF1uX1ea1vB94/Wv0M3nHBpXvOgOX3bJ+k2ywyic3bmAFb8ru0GwUQZSP1rWvbd/p0zQuUWiGqGQpa7+su2scldP15kxQ6Tq2J0b2slyNV0VTcm3SjvdyG81iV7a2e/NrxKFlnal5mxhFsFPTNfPz1z5e5IuwhJquQ3aerNZ2XM+ymfQrcYd8ZCX7P7pvl3I08vTjcN8Up4Uinu9EP2mZo/gc1zSlYZvS5rV2zpKOv0a/73mGpBPnkKzEiBVw4/H7/YXbFlDF15Hdl0ktCGs8Tm/0kz5kNfltuAVveGn380Kbpzzcco4Y+VIqi2utzEPpcFGlOKkcfUlp0xeuyeocD+vLhXtjXL3erfVZTPLJ5MQyC57wVRKsYIYNrXl5dpSh1gzBdPDoAYLilDICWYrL553I9wAMry4KCGJPeQGLlPstGAq1suNvaTgUboulfrxWprMazOsqoQYMteFileTNC+iBiuAAUYrCRUoZJu0aUQpjRMH0z796oEQ39m5cV2446IEoJZRty7rKMQw/XP14hEGA65K5bRlo3QERMOU/rxFjaRnTTse6hCRI0ivSEsgomEYwp+hnh4igEEwZqdHPqdVw2AkvOntVXYxd0APF05A0BFMgj0RhIvG8PJGnAv8H/dZ0qLCqvpWIdRr+YND9ECIG05yCKdDsi3lF0kK3WvVOR4Yxa2JFixXwyfjD+ndpvTZeq3h7TOq2xaOs70n2YHk5HYqLIrUb7NkTez8UD0ZcmC//AAKmYGPK8LgPNWbf8kINBUFEuXsYeyPPG9PCy5arzFHmeJn5jDOakfHqc+H8to8IHmT4mAnqsZ6I1Nm4nu697TWrCWEwi1+6aiG6pgH6tdhpuRlWs0ki0GY4luuFnDRisTvbcrWKzGat+XB05A9U9w9NKSX+LkSDxOLdQIlLoXIQdHWcCPe6Nsuw3GdmWuCZpcTvoXwORf5jGaXPuHRedJ9Rip6zXcLOof/w5oN3lyD+0fsF4sey+JeBU7cSnilwbhxOlF5sy+H7M+ZeCsG6xM46g/q9PueME1RspeDx+KsHqhyyCJOi22BlSHAagh4guO4iaZYR/k0xTeFNTYnnXeM5pEz5jLmXFogyWFTdMIrj0UQS+eHjb2NdRg4cBwAA',
    newsletterJid: '120363420656466131@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/Tomilucky218/Lucky-M2-Bot/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Lucky M2 Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
    autoRecording: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'all', // set bot or all via cmd
    autoDownload: false,
    
    // Auto Reply
    AUTO_REPLY: true,
   
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Kampala',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/Tomilucky218',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@LUCKYTECHHUB'
    }
};
  
