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
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VU27KiOBT9l7xqtaiAaNWpGsALCN7B29Q8RAgYBAJJALHLf5/C06dPP8z0nHkLSbH32mutvb6DlGCGLFSD0XeQUVxCjpojrzMERkArggBR0AY+5BCMwGQNJYd7+U03AnMTSY9cLaf61Zp0DkoRFt64ZTNbsyJjyt7Asw2y4hJj7zcFtRztumc93vgtGymSiUJBlfrKcVt5fFWV1aUTlueyN69r4Q08m4oQU5yGk+yKEkRhbKF6DTH9Gnykk6m6w4dw0pqnPcNg5JYZgWkuODKLIduX683M3Z2v6mTyNfgLrTZwlOfS4yRb9RQTUSJ6ZHjX+7C/5cVKtMlCrvv9vkDe4TMcpsg3fZRyzOsv876wzYtczQa4HlSd5F4MbXOxjw+WMB+fg/Q4e9hFJItyT3O9rwGHu/2+6kStAIsuLHE2FOFeLk17YULV7lv1ssiVm35UJcH7Ffiafnjl9n94143k4Mse2lzJwUruTmSI8w4hkTOp7b6mGYttlbo75nZnwtfg98w46TyWNt4H5tmF2rl7K9Kk/1joE0j5ILTm6WB8mhfKQfiED3lBf4dyb+Ra1vWQTFeZZgVKsaBneg+4GOksqvLeHcr3pQztZYDC42XKrl58GTjT0jhbkVuw7n4n9baSmQmPs1+pbqmu71it3l4T3VBt+mDUfbYBRSFmnEKOSdrc9cU2gH65Qx5F/MUu2GEkpPLZCy5BhcTHitTpgd4ueLKOcZAafjaVFYf4R0cR30AbZJR4iDHkG5hxQusFYgyGiIHRn3+1QYru/F23V7duGwSYMu6mRRYT6H+I+vEIPY8UKd/Vqac3B0TBSPi8RpzjNGQNjUUKqXfFJdKvkDMwCmDM0M8BEUU+GHFaoJ9LqxO/4X190ndSXzFAGyQvPbAPRmAoDnqyIghDeTjqdf9g36qmKsyybyniDYU/EDQ/+IhDHLPGWavcLJFiTGw4fzBxNhsLoaqHKvhE/KH8O7VOHS404p6vRV0T8dZxlFXXyi+nJFeVekuclbw69AenWZiYb/9QBIzAtB7bW12Ma8smbnKTvMPpbheXDV2eznV1PO1bqRSGS+ni4sHNvFoygaK47a0kySAXXp9V+Jhd1XmieIfbrXC6D+GoaJu3ppuPSuyhX5tZKdtuZmmuhEF/H02dwqZuKJTsrtF1FyZof3TM62Eio+O6VXci8VSp9uY+nKWT4QmhU2+2HN6TLEqm87wyDqvhZcsWWvjuyddOxD+yCL/s0mjRfAYYvVY7hY1C/6HNB+7GQcKz/UuJH1nxb9nvKmSswunsdGEsX83XQmfMd3nSm+fhenGDk0cRxbzV08gcg+fzrzbIYsgDQpMmwFKfEuyDNqCkaCxppgH5XQSpgqmr4bQZPIaMq582d3CCGIdJBkbdwUAS5eFAkp5/Ax5pdUsbBwAA',
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
  
