//نيترو يحبكم 🤭❤️
//قناه المصدر
//https://whatsapp.com/channel/0029VaoSo4yBPzjSNSsa6B1C

const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*⚠️ الامر بيشتغل كدا ${usedPrefix + command} الافضل؟|ايتاتشي|مادرا*`;
  if (b[12]) throw `*⚠️ الامر بيشتغل كدا  ${usedPrefix + command} الافضل؟|ايتاتشي|مادرا*`;
  const caption = `*مقدم التصويت:*\n${name}\n*السؤال ↧↧:*\n${text.split('|')[0]}`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['poll','pooll','تصويت'];
export default handler;
