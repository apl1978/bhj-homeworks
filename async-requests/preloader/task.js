const loader = document.getElementById("loader");
const request = new XMLHttpRequest();
const items = document.getElementById("items");

request.addEventListener("readystatechange", () => {
  if (request.readyState === request.DONE) {
    loader.classList.remove("loader_active");
    let data = JSON.parse(request.responseText);
    let valutes = data.response.Valute;
    for (var key in valutes) {
      let value = valutes[key];

      items.innerHTML += `<div class="item">
            <div class="item__code">
                ${value.CharCode}
            </div>
            <div class="item__value">
                ${value.Value}
            </div>
            <div class="item__currency">
               руб.
            </div>
            </div>`;
    }
  }
});

request.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
request.send();
