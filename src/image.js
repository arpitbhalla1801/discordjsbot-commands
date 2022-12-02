const axios = require("axios");
class Image {
  static async trumptweet(text) {
    let embed = {
      image: {
        url: `https://faketrumptweets.herokuapp.com/tweet?text=${encodeURIComponent(
          text
        )}`,
      },
      description: "trump tweeted something!",
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async wink() {
    const main = await axios.get("https://some-random-api.ml/animu/wink");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async cry() {
    const main = await axios.get(`https://purrbot.site/api/img/sfw/cry/gif`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async cuddle() {
    const main = await axios.get(`https://purrbot.site/api/img/sfw/cuddle/gif`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async dance() {
    const main = await axios.get(`https://purrbot.site/api/img/sfw/dance/gif`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async kiss() {
    const main = await axios.get(`https://purrbot.site/api/img/sfw/kiss/gif`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async lick() {
    const main = await axios.get(`https://purrbot.site/api/img/sfw/lick/gif`);
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async hug() {
    const main = await axios.get("https://some-random-api.ml/animu/hug");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async facepalm() {
    const main = await axios.get("https://some-random-api.ml/animu/face-palm");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async comfy() {
    const main = await axios.get("https://purrbot.site/api/img/sfw/comfy/gif");
    const data = main.data;

    if(!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`,
      },
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
  static async pat() {
    const main = await axios.get("https://some-random-api.ml/animu/pat");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      image: {
        url: `${data.link}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async triggered(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/triggered?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async wasted(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/wasted?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async jail(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/jail?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async mpassed(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/passed?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async blur(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/blur?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async rainbow(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/gay?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async pixelate(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/blur?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async jpg(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/jpg?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }
  static async greyscale(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/greyscale?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async sepia(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/sepia?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async simp(avatarURL) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/simpcard?avatar=${encodeURIComponent(
          avatarURL
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async oogwayquote(quote) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/oogway?quote=${encodeURIComponent(
          quote
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async color(hex) {
    let embed = {
      image: {
        url: `https://api.alexflipnote.dev/colour/image/${encodeURIComponent(
          hex
        )}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async hex() {
    const main = await axios.get(`https://x-colors.herokuapp.com/api/random`);
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.hex}`,
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async tweet(avatarURL, text, username, displayname) {
    let embed = {
      image: {
        url: `https://some-random-api.ml/canvas/tweet?avatar=${avatarURL}&comment=${text}&username=${username}&displayname=${displayname}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  // static async fan(avatarURL) {
  //   let embed = {
  //     image: {
  //       url: `https://api.jeyy.xyz/image/fan?image_url=${encodeURIComponent(avatarURL)}`,
  //     }
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  // static async flagripple(avatarURL) {
  //   let embed = {
  //     image: {
  //       url: `https://api.jeyy.xyz/image/ripple?image_url=${encodeURIComponent(avatarURL)}`,
  //     }
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  // static async tv(avatarURL) {
  //   let embed = {
  //     image: {
  //       url: `https://api.jeyy.xyz/image/tv?image_url=${encodeURIComponent(avatarURL)}`
  //     }
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  // static async explicit(avatarURL) {
  //   let embed = {
  //     image: {
  //       url: `https://api.jeyy.xyz/image/explicit?image_url=${encodeURIComponent(avatarURL)}`,
  //     },
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  // static async rain(avatarURL) {
  //   let embed = {
  //     image: {
  //       url: `https://api.jeyy.xyz/image/rain?image_url=${encodeURIComponent(avatarURL)}`,
  //     },
  //   }

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }

  // static async paint(avatarURL) {
  //   let embed = { 
  //     image: {
  //       url: `https://api.jeyy.xyz/image/paint?image_url=${encodeURIComponent(avatarURL)}`,
  //     },
  //   };

  //   let syntax = { embeds: [embed] };
  //   return syntax;
  // }
}

module.exports = Image;
