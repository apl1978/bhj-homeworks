const request = new XMLHttpRequest();
const pollTitle = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

request.addEventListener("readystatechange", () => {
  if (request.readyState === request.DONE) {
    let data = JSON.parse(request.responseText);

    pollTitle.textContent = data.data.title;

    for (let i of data.data.answers) {
      answers.innerHTML += `<button class="poll__answer">
              ${i}
             </button>`;
    }
    const answerBtns = Array.from(document.querySelectorAll(".poll__answer"));
    answerBtns.forEach((answer) => {
      answer.onclick = () => {
        alert("Спасибо Ваш голос учтён");
      };
    });
  }
});
request.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
request.send();
