const axios = require("axios");
class Commands {
  static async affirmation() {
    const main = await axios.get("https://www.affirmations.dev/");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API :(");
    }

    let embed = {
      description: data.affirmation,
      color: 0x32cd32,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async meme() {
    const main = await axios.get("https://www.reddit.com/r/memes/random/.json");
    const data = await main.data[0].data.children[0].data;

    if (!data) {
      return console.log("couldnt fetch meme data :/");
    }

    const link = `https://reddit.com${data.permalink}`;

    let embed = {
      color: 0x34568b,
      title: data.title,
      url: link,
      image: { url: data.url },
      footer: {
        text: `👍 Upvotes - ${data.ups}`,
      },
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async dog() {
    const main = await axios.get("https://some-random-api.ml/animal/dog");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async cat() {
    const main = await axios.get("https://some-random-api.ml/animal/cat");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async koala() {
    const main = await axios.get("https://some-random-api.ml/animal/koala");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async panda() {
    const main = await axios.get("https://some-random-api.ml/animal/panda");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async whale() {
    const main = await axios.get("https://some-random-api.ml/animal/whale");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async kangaroo() {
    const main = await axios.get("https://some-random-api.ml/animal/kangaroo");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async fox() {
    const main = await axios.get("https://some-random-api.ml/animal/fox");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.image}`,
      },
      description: `${data.fact}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async joke() {
    const main = await axios.get("https://apis.duncte123.me/joke");
    const data = await main.data;

    if (!data.success) {
      return console.log("couldnt access the API");
    }

    let embed = {
      title: data.data.title,
      color: 0xf21717,
    };

    if (data.data.body) {
      embed.description = data.data.body;
    }

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async neko() {
    const main = await axios.get("https://neko-love.xyz/api/v1/neko");
    const data = await main.data;

    if (data.code !== 200) {
      return console.log("couldnt access the API");
    }

    let embed = {
      color: 0xffc0cb,
      image: {
        url: `${data.url}`,
      },
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async quote() {
    const main = await axios.get(
      "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    );
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      fields: [
        {
          name: `${data.quotes[0].text}`,
          value: `${data.quotes[0].author}`,
        },
      ],
      color: 0xadd8e6,
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async advice() {
    const main = await axios.get("https://api.adviceslip.com/advice");
    const data = await main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.slip.advice}`,
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async fact() {
    const main = await axios.get(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.text}`,
      fields: [
        {
          name: "source",
          value: `${data.permalink}`,
        },
      ],
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async duck() {
    const main = await axios.get("https://random-d.uk/api/v2/random");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.url}`,
      },
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }

  static async magic8ball(question) {
    if (!question) {
      return console.log("no question provided :/");
    }
    const main = await axios.get(
      `https://8ball.delegator.com/magic/json/${encodeURIComponent(question)}`
    );
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      fields: [
        {
          name: `your question`,
          value: `${data.magic.question}`,
        },
        {
          name: "my answer",
          value: `${data.magic.answer}`,
        },
      ],
      footer: {
        text: `reply category : ${data.magic.type}`,
      },
    };

    let syntax = { embeds: [embed] };

    return syntax;
  }
}
module.exports = Commands;
