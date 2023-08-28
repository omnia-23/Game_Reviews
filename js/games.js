import { card } from "./card.js";
import { game_details } from "./card.js";

export class games {
  async get_games() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMORPG`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "debb822c8emshb612ae8fe2875bcp1c0340jsnfd8930fa0ee7",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const x = new card();
    x.display_cards(result);
    $("#loading").fadeOut(100);
    $("body").css("overflow", "auto");
    game_details();
  }

  async display_category(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "debb822c8emshb612ae8fe2875bcp1c0340jsnfd8930fa0ee7",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const x = new card();
    x.display_cards(result);
    $("#loading").fadeOut(100);
    $("body").css("overflow", "auto");
    game_details();
  }
}
