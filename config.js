const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "+917025247538+917025247538+917025247538"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '+917025247538' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RVTERrQTB2cUZqZU1MZ2N0SmtBUHUyL0Mwb01iNVhucWI0TGl0L0JrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjFRNjQ3UEdMd1dYWWljbmtDL0dEM3BRMVlnNjUxV0lzUmQyRC9BT2NrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQXU2aFlSVkpQR1dsQzNhNks0bXRqNnZ0WHRSSEkyNDBwa3ZGZ0o5VTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjN0cmIxN0RsVlRSQnBHdFdESGRVbml1ajh6Z2s5bmFLdkY4ajJKdm5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOcnVRYXR4R3cvWFZvZ3ZlQjcwOFJiQnFEYjBuSkhya0laNzVSY042R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPN3RzNmZTdkdiWk1qakFYWUZnSUpXOFdVSHNiZlFiSFJhK0JpMHJJRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NyTWNsRyttUGRpbTRPa2VtZzdRR0o0LzRwcExqa0gzWmZDcndSN1JWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRCtnSDhhVHBRaDVkOWx5SDNYMXdLREp6bmlPR0hOc0gwNjJBK3FiVklGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpiQXZJNnd1T1Bscm44WG9kWFcxQk9VVzhHMThiYjZqQ2RXUExackNVWS9GbFNjWGFQanpSS2M5K21VeE56WTAvQ0IzRzYwMmZSYlJnNjA4VXM4Yml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiVFBDVlJieEhBQ2NYamFhOGZ3TlN0cXp5VWxYVkZmdVg2M3FwZ0pKWnJDND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVzB2OTZ5MzhTQWVvWGpCbzFVYzdEZyIsInBob25lSWQiOiJkMDFkNzFjMS1iZDliLTQwZjUtOWUxNC0xYzhlZGMwNmEzYzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWduOTRGNjJOOW9Kd3lQUndNclV4dW5sN00wPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InByK2VRbDFSb0dDRThJbE5XY2V3MDliejg3bz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGTVdLMjdUOCIsIm1lIjp7ImlkIjoiOTE3MDI1MjQ3NTM4OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlF1ZWVuLUFueWFfVjIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQNWd1c0dFUHpaaTY4R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWjJLeDk1NzNDMkV0Mk1mZ3dXVGxDZmtUOVhBbE9RQXdUZU5TNWxGRTVFYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmVZb2FGMTIydGFCcEZPZmlDMGtvOFZFVEpaS3R3UnZFa2NlTldKTjN0RWU5cnZaNjZJUjBTa09DWkV1VjM3VWFFbkJtZlIwUmVMakNWUkljSDlYQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZJSlhxamhnZUUxREFCQkI1UVBXb3UxOTJHeGhpakUzVDVWL3RZTEY5ekRPN25XNHNmTUNFK1dVMG9idy8wejhnUEprLzJZUERwU1FjOUwxLy8vS2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDI1MjQ3NTM4OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldkaXNmZWU5d3RoTGRqSDRNRms1UW41RS9Wd0pUa0FNRTNqVXVaUlJPUkgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDkzNzA2MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmN2In0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
