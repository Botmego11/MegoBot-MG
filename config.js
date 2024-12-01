import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = "*『🔥┇𝙼𝙴𝙶𝙾-𝙱𝙾𝚃』*"
global.confirmCode = ""

global.owner = [['218945188849', '𝙢,𝙚,𝙜,𝙤, ❦︎', true],
];

global.suittag = ['218945188849'];
global.prems = ['218945188849'];

global.packname = '☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎';
global.author = '✩𝙼𝙴𝙶𝙾-𝙱𝙾𝚃☆';
global.wm = '✯𝐌𝐄𝐆𝐎𝐁𝐎𝐓-𝐌𝐃✯';
global.vs = 'V2 • 1.0.5';
global.titulowm = '☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎';
global.titulowm2 = `☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎`
global.igfg = '☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎';
global.wait = '*[ ⏳ ] انتظر جاي التحميل تابع صاحب البوت*...\n\n*atom.bio/mego51_51*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎`;
global.gt = '☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎';
global.mysticbot = '☾︎ 𝙈𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 ☽︎';
global.md = 'atom.bio/mego51_51';
global.mysticbot = 'atom.bio/mego51_51';
global.waitt = '*[ ⏳ ] انتظر جاي التحميل تابع صاحب البوت*...\n\n*atom.bio/mego51_51*';
global.waittt = '*[ ⏳ ] انتظر جاي التحميل تابع صاحب البوت*...\n\n*atom.bio/mego51_51*';
global.waitttt = '*[ ⏳ ] انتظر جاي التحميل تابع صاحب البوت*...\n\n*atom.bio/mego51_51*';
global.nomorown = '201025663589';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] التاريخ:*  ${moment.tz('Egypt/cairo_city').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الوقت:* ${moment.tz('Egypt/cairo_city').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
