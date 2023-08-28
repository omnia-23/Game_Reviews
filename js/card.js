import { detailsPage } from "./detailsPage.js";

export class card {
  display_cards(arr) {
    let games = ``;
    for (let i = 0; i < arr.length; i++) {
      games += `
          <div class="col-lg-3 col-md-6 cols-xl-4 g-4">
          <div class="card" id="${arr[i].id}">
            <img
              class="card-img-top p-3"
              src="${arr[i].thumbnail}"
              alt="Card image cap"
            />
            <div class="card-body pt-0 mb-2">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title small">${arr[i].title}</h5>
                <span class="badge txtheader p-2 rounded-1">free</span>
              </div>
              
              <p class="card-text small text-center opacity-50">
                ${arr[i].short_description}
             </p>
            </div>
            <div class="card-footer  small d-flex justify-content-between">
              <span class="badge txtfooter">${arr[i].genre}</span>
              <span class="badge txtfooter">${arr[i].platform}</a>
            </div>
          </div>
        </div> 
          `;
    }
    document.getElementById("games_body").innerHTML = games;
  }
}

export function  game_details() {
  $(".card").click(function () {
    $("#loading").fadeIn(100);
    $("body").css("overflow", "none");
    let id = $(this).attr("id");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "debb822c8emshb612ae8fe2875bcp1c0340jsnfd8930fa0ee7",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    async function get_details() {
      const response = await fetch(url, options);
      const result = await response.json();

      let d = new detailsPage();
      $("#loading").fadeOut(100);
      $("body").css("overflow", "auto");
      d.display_details(result.thumbnail,result.title,result.genre,result.platform,result.status,result.description,result.game_url);
    }
    get_details();
  });
}
