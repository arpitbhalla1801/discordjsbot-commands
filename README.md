# discordjsbot-commands
lets be honest, every 6 out of 9 person on discord wants a custom made bot these days. and why shouldnt they, why pay for premium bots when you can just make your own custom ones? :)


## EXAMPLE
```js
const discord = require("discord.js");
const client = new discord.Client();
const { Commands } = require("discordjsbot-commands");
//....
// rest of your code
//....
client.on("message", async(message) => {
  if(message.content === "!meme") {
    let data = await Commands.meme()
    message.channel.send(data) //sends an embed containing the meme!
  }
})

```


## DOCUMENTATION
The documentation for the package can be [found here](https://tec-wizard.gitbook.io/discordjsbot-commands).


## Got any issues with the package ? (you shouldnt really but if you do)
Feel free to create an issue on the [project's Github](https://github.com/tec-wizard/discordjsbot-commands/issues).


__hope to update this package frequently... so make sure to come back... pwease UwU ;)__
