require("dotenv").config();



const { Client, MessageAttachment } = require("discord.js");
const getImage = require("./apiCall");

const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.tag} has looged in`);
});
client.on("message", (message) => {
  console.log(message.content);

  const m = message.content;
  const brokenm = m.split(" ");
  const pre = brokenm[0];
  if (pre === "oi" || pre === "Oi") {
    message.reply("Haan bool");
  } else if (message.content === "hi" || message.content === "Hi") {
    message.reply(`Haan`);
  } else if (message.content === "hello") {
    message.reply("bhag bsdk, hello boolta hai");
  } else if (m === "done" || m === "Done") {
    message.reply("Thanks");
    getImage(m);
  } else if (m === "Parhaga" || m === "parhaga") {
    message
      .react("😂")
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (message.content === "!india") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment(
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png"
    );
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  } else if (message.content === "!love") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment(
      "https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg?w=636&h=358"
    );
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  } else if (
    message.content === "!kutta" ||
    message.content === "!dog" ||
    message.content === "!Dog" ||
    message.content === "!Kutta"
  ) {
    
    const attachment = new MessageAttachment(
      "https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"
    );
   
    message.channel.send(`${message.author},`, attachment);
  } else if (pre === "image" || pre === "Image" || pre === "IMAGE") {
    const q = brokenm[1];

    getImage(q)
      .then((res) => {
        const attachment = new MessageAttachment(res);
       
        message.channel.send(`${message.author},`, attachment);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
