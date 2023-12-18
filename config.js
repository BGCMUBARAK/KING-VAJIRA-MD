const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2349150212473'
global.devs = '94710903687';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Prime Bishara 𝐁𝐨𝐭' : process.env.Bishara,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.Bishara,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5VdWM2U2NtbXMxcmxHaytibHdkMk9acmhIOHQ1cWRVTXI5UTRzWE9GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakc5bVZkMVc1eGVCeDBkUmJVb01nTGJ4ZFFXUm9XY20wVHh4RE0rZlFEOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RmJwb3E5WkNUSmsxU1dWcThQTEJhYjdMQ3RmM1g1c1BtUkhzaEgzYVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJa1k2cWp5MmRUdklQNUVlaEh1Q21jRlNrU0p2N1RhanM1Zm95T1JteGlBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPMDVpSGpNclRvRTVDNGNDNFhTSUxWQlRLek14ZkNoNU5UWG9lQm1kbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhUMkdXd0IzNFpLUjhEYU5RMGlRbTFFUXRNcHpac2FiWHNjTW1MTS9zeXM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSEU4MEpDZW5HZzgvRVMxa0wwTm4rUUovWTNYRVNMVzdYcXhUd3pPbmQrZ1F1eEFXdVV2WFd5akJIaGNYSjJjNTBBRjZCQjFNRng4L0lVQ1BqNkRnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExNCwiYWR2U2VjcmV0S2V5IjoiWi92UE0yVW9FQ2ZxdHB6ckFOT3hNbkR1bWpET25NNGZPYVlYWUhld2Ftdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNHY4SjJ5djJSYm1YZU1lbjN6dV9DUSIsInBob25lSWQiOiI4MGVmNjA4Yy1iYjQ4LTQ3N2EtOGEwNC0zZWVmOWFjODU5ZmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFdUZk1GK1VtbCsvaER4bzJ5c0FFcUZnY1JRPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZEZQQlJFZEJYZnBGOFQxWkRWMWFzVVJPL3c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYUdqODhFRUlYZC82c0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrZkN4LzZneGZkdzJleTd1Sll3L3U4aS9MdW5hVFp2WmFPNXFKY01BcVNZPSIsImFjY291bnRTaWduYXR1cmUiOiJsMitwT3JNMm4yWnN5VWdwVE5QKytERjJJRE1sSE9FaklYWXRMd2tCNGhBdlVsclhZb2lZOHlPdlFTL244Qy9nWXpIVWVBejEvb2FjQk5UeUdTZkVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid3loaEJ4eklpcTBoUVZFUXBvenRmWEZGQmJyNFhDL2VnOTdQdStuTldQSEgxQ1RmQzI5eXAzN1pYYkpxWitSQzN6Y25QS24yL2szNzJwN2pKM0pnZ0E9PSJ9LCJtZSI6eyJpZCI6IjIzNDkxNTAyMTI0NzM6MTFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1MDIxMjQ3MzoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaSHdzZitvTVgzY05uc3U3aVdNUDd2SXZ5N3AyazJiMldqdWFpWERBS2ttIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAyODgyOTUzfQ==,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['/'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
