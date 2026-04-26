let page = 0;
let state = {};

const pages = [
  {
    text: "You wake up in a dark forest. Two paths lie ahead.",
    choices: [
      { text: "Take the left path", action: () => { state.path = "left"; nextPage(); } },
      { text: "Take the right path", action: () => { state.path = "right"; nextPage(); } }
    ]
  },
  {
    text: () => {
      if (state.path === "left") {
        return "The left path leads you to a peaceful river.";
      } else {
        return "The right path leads you to a spooky cave.";
      }
    }
  },
  {
    text: "Your journey continues... (add more pages here)"
  }
];

function renderPage() {
  const content = document.getElementById("content");
  const current = pages[page];

  content.innerHTML = "";

  let text = typeof current.text === "function" ? current.text() : current.text;
  let p = document.createElement("p");
  p.innerText = text;
  content.appendChild(p);

  if (current.choices) {
    current.choices.forEach(choice => {
      let btn = document.createElement("div");
      btn.className = "choice";
      btn.innerText = choice.text;
      btn.onclick = choice.action;
      content.appendChild(btn);
    });
  }
}

function nextPage() {
  if (page < pages.length - 1) {
    page++;
    renderPage();
  }
}

function prevPage() {
  if (page > 0) {
    page--;
    renderPage();
  }
}

renderPage();
