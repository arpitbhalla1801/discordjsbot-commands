const axios = require("axios");
class Fun {
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

  static async lyrics(query) {
    const main = await axios.get(
      `https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`
    );
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.lyrics}`,
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async reverse(text) {
    const main = await axios.get(
      `https://normal-api.tk/reverse?text=${encodeURIComponent(text)}`
    );
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      fields: [
        {
          name: "reversed text",
          value: `${data.reversed}`,
        },
      ],
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async nextmarvelfilm() {
    const main = await axios.get(`https://whenisthenextmcufilm.com/api`);
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      title: `${data.title}`,
      description: `${data.overview}`,
      thumbnail: {
        url: `${data.poster_url}`,
      },
      footer: {
        text: `${data.release_date} - ${data.days_until} days | ${data.type}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async yomamajoke() {
    const main = await axios.get(`https://yomomma-api.herokuapp.com/jokes`);
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.joke}`,
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async iambored() {
    const main = await axios.get(`http://www.boredapi.com/api/activity/`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.activity}`,
      footer: {
        text: `${data.type}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async insult() {
    const main = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the APi");
    }

    let embed = {
      description: `${data.insult}`,
    };

    let syntax = {
      embeds: [embed]
    };
    return syntax;
  }

  static async startupidea() {
    const main = await axios.get(`https://itsthisforthat.com/api.php?json`);
    const data = main.data;

    if(!data) {
      return console.timeLog("couldnt access the API");
    }

    let embed = {
      description: `so basically its a **${data.this}** for **${data.that}**`,
    }

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async encode(text) {
    //base64
    const main = await axios.get(`https://normal-api.tk/encode?text=${text}`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `successfully encoded \n${data.encoded}`,
    };

    let syntax = {
      embeds: [embed],
    }
    return syntax;
  }

  static async decode(code) {
    //base64
    const main = await axios.get(`https://normal-api.tk/decode?text=${code}`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `successfully decoded \n${data.decoded}`,
    };

    let syntax = {
      embeds: [embed],
    }
    return syntax;
  }

  // static async ytsr(query) {
  //   const main = await axios.get(`https://normal-api.tk/youtube/searchvideo?query=${encodeURIComponent(query)}`);
  //   const data = main.data;

  //   if(!data) {
  //     return console.log("couldnt access the API");
  //   }

  //   let embed = {
  //     title: `${data.title}`,
  //     description: `${data.description}`,
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  static async parsems(ts) {
    const main = await axios.get(`https://normal-api.tk/parsems?ms=${ts}`)
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `
      ${data.days} days
      ${data.hours} hours
      ${data.minutes} minutes
      ${data.seconds} seconds
      ${data.milliseconds} milliseconds
      `
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async randomuser() {
    const main = await axios.get(`https://randomuser.me/api/`);
    const data = main.data.results[0];
  
    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      title: `${data.name.title} ${data.name.first} ${data.name.last}`,
      thumbnail: {
        url: `${data.picture.large}`
      },
      description: `${data.location.city}, ${data.location.state}, ${data.location.country}`,
      fields: [
        {
          name: `DOB | Age`,
          value: `${data.dob.date} | ${data.dob.age}`
        },
        {
          name: 'E-mail',
          value: `${data.email}`
        },
        {
          name: 'Nationality',
          value: `${data.nat}`
        },
      ],
      footer: {
        text: `${data.gender}`
      }
    };

    let syntax = { embeds: [embed]};
    return syntax;
  }

  static async dictionary(word) {
    const main = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(word)}`);
    const data = main.data.list[0];

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      title: `${word}`,
      url: `${data.permalink}`,
      description: `${data.definition}`,
      fields: [
        {
          name: 'example',
          value: `${data.example}`
        },
      ]
    }

    let syntax = { embeds: [embed] };
    return syntax;
  }
}
module.exports = Fun;
