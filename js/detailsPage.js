export class detailsPage {
  display_details(src, title, category, platform, status, paragraph, link) {
    let details = `
        <div class="container details">
          <div class="d-flex align-items-center justify-content-between">
            <h1 class="text-center h3 py-4">Details Game</h1>
            <button class="btn-close btn-close-white" id="btnClose" "></button>
          </div>
          <div class="row g-4" id="detailsContent">
            <div class="col-md-4">
              <img
                src="${src}"
                class="w-100"
                alt="image details"
              />
            </div>
            <div class="col-md-8">
              <h3>Title :${title}</h3>
              <p>Category: <span class="badge text-bg-info">${category}</span></p>
              <p>Platform: <span class="badge text-bg-info">${platform}</span></p>
              <p>Status: <span class="badge text-bg-info">${status}</span></p>
              <p class="paragraph">${paragraph}</p>
              <a
                class="btn btn-outline-warning"
                target="_blank"
                href="${link}"
                >Show Game</a
              >
            </div>
          </div>
        </div>
        `;

    document.getElementById("details").innerHTML = details;
    document.getElementById("details").classList.remove("d-none");

    document.getElementById("home").classList.add("d-none");

    $("#btnClose").click(() => {
      document.getElementById("home").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
  }
}
