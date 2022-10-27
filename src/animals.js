const axios = require("axios");
class Animals {
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

  static async bird() {
    const main = await axios.get("https://some-random-api.ml/animal/bird");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.fact}`,
      image: {
        url: `${data.image}`,
      },
    };

    let syntax = { embeds: [embed] };
    return syntax;
  }

  static async raccoon() {
    const main = await axios.get("https://some-random-api.ml/animal/raccoon");
    const data = main.data;

    if (!data) {
      return console.log("couldnt access the API");
    }

    let embed = {
      description: `${data.fact}`,
      image: {
        url: `${data.image}`,
      },
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
}

module.exports = Animals;