// let template = { name: "", imdbID: "", carlonotes:"", review:"" };

export const movieTitleAndId = [
  {
    name: "Mid90s",
    imdbID: "tt5613484",
    carlonotes:
      "Manny told me about it. Seems like an interesting chill movie.",
    review: "N/A",
  },
  {
    name: "The Irishman",
    imdbID: "tt1302006",
    carlonotes:
      "I love Martin Scorcese movies. I would like to watch it one day when I'm ready to dedicate 3 hours of my life.",
    review: "N/A",
  },
  {
    name: "GoodTime",
    imdbID: "tt4846232",
    carlonotes: "Gives same vibes as Nightcrawler",
    review: "N/A",
  },
  {
    name: "Sound of Metal",
    imdbID: "tt5363618",
    carlonotes: "A good drama I'm interested in.",
    review: "N/A",
  },
  {
    name: "Redline",
    imdbID: "tt1483797",
    carlonotes: "Animation looks crazyyyyyyy. Def will watch soon.",
    review: "N/A",
  },
  {
    name: "Cowboy Bebop: The Movie",
    imdbID: "tt0275277",
    carlonotes: "Simple. A movie from a classic anime.",
    review: "N/A",
  },
  {
    name: "Ghost in the Shell",
    imdbID: "tt0113568",
    carlonotes: "Looks cool. I hear great things.",
    review: "N/A",
  },
  {
    name: "Donnie Darko",
    imdbID: "tt0246578",
    carlonotes:
      "Never seen and apparently it's a classic. I heard about it first through a Logic song.",
    review: "N/A",
  },
  {
    name: "Mutafukaz",
    imdbID: "tt0413021",
    carlonotes:
      "Completely forgot where I found this but looks super interesting.",
    review: "N/A",
  },
  {
    name: "The Last Duel",
    imdbID: "tt4244994",
    carlonotes: "Sword fight.",
    review: "N/A",
  },
  {
    name: "The Gift",
    imdbID: "tt4178092",
    carlonotes:
      "I like Micheal Bateman. As I'm typing this I forget what genre the movie is.",
    review: "N/A",
  },
  {
    name: "The Forgotten",
    imdbID: "tt0356618",
    carlonotes: "No idea anything about this or when I found it.",
    review: "N/A",
  },
  {
    name: "Arrival",
    imdbID: "tt2543164",
    carlonotes:
      "Heard about it a while back and think it's similar to Annihilation.",
    review: "N/A",
  },
  {
    name: "The Invasion",
    imdbID: "tt0427392",
    carlonotes:
      "I believe I saw it when I was really young. Interested to watch it again.",
    review: "N/A",
  },
  {
    name: "Memories of Murder",
    imdbID: "tt0353969",
    carlonotes: "Asian crime.",
    review: "N/A",
  },
  {
    name: "The Prodigy",
    imdbID: "tt4504044",
    carlonotes: "Kinda looks cheesy but we'll see.",
    review: "N/A",
  },
  {
    name: "They Look Like People",
    imdbID: "tt4105970",
    carlonotes: "Very interested. Super excited to see this.",
    review: "N/A",
  },
  {
    name: "That Awkward Moment",
    imdbID: "tt1800246",
    carlonotes:
      "No idea why I saved this but I trust younger Carlo's interest.",
    review: "N/A",
  },
  {
    name: "X",
    imdbID: "tt13560574",
    carlonotes: "A24 makes great movies. Super excited to see this.",
    review: "N/A",
  },
  {
    name: "Triple Frontier",
    imdbID: "tt1488606",
    carlonotes:
      "At time of writing this I have absolutely no idea what it is about.",
    review: "N/A",
  },
  {
    name: "Dragon Ball Super: Broly",
    imdbID: "tt7961060",
    carlonotes:
      "Never seen anything of Dragon Ball, only when Goku fought Beerus and I've played FighterZ. Clips from TikTok look sick.",
    review: "N/A",
  },
  {
    name: "Deadstream",
    imdbID: "tt12788488",
    carlonotes: "No clue what this is.",
    review: "N/A",
  },
  {
    name: "Malum",
    imdbID: "tt9472334",
    carlonotes: "Seen clips on TikTok. Spooky Dooky.",
    review: "N/A",
  },
  {
    name: "Ford v Ferrari",
    imdbID: "tt1950186",
    carlonotes:
      "I want to watch this so bad. I will watch this when I finally have time.",
    review: "N/A",
  },
  {
    name: "Jeepers Creepers",
    imdbID: "tt0263488",
    carlonotes:
      "Remember this vaguely because the final scene was so f*king terrifying.",
    review: "N/A",
  },
  {
    name: "Crazy, Stupid, Love.",
    imdbID: "tt1570728",
    carlonotes: "I. Trust. Younger. Carlo's. Choices.",
    review: "N/A",
  },
  {
    name: "Manchester by the Sea",
    imdbID: "tt4034228",
    carlonotes:
      "Sadness and depression. We'll see how I feel after watching this.",
    review: "N/A",
  },
  {
    name: "Triangle of Sadness",
    imdbID: "tt7322224",
    carlonotes: "No clue what this is.",
    review: "N/A",
  },
  {
    name: "Horror in the High Desert",
    imdbID: "tt13964404",
    carlonotes:
      "I f*king love horror and this looks really interesting from my brief google search.",
    review: "N/A",
  },
  {
    name: "Scary Stories to Tell in the Dark",
    imdbID: "tt3387520",
    carlonotes:
      "Completely forgot about this until I checked the list but I remember when this came out and just never heard of it again.",
    review: "N/A",
  },
  {
    name: "Wildflower",
    imdbID: "tt12024308",
    carlonotes: "Looks super sad but very interesting.",
    review: "",
  },
  {
    name: "Talk to Me",
    imdbID: "tt10638522",
    carlonotes:
      "A24 makes great movies and I'm so excited to see this one. Probably and hopefully the first movie I watch on my watchlist.",
    review: "",
  },
];

export let movieData = [];

export const addMovieData = (movieObject) => {
  const exists = movieData.some((movie) => movie.imdbID === movieObject.imdbID);

  if (!exists) {
    movieData.push(movieObject);
  }
};
