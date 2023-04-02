const grid = document.getElementById("emojigrid"),
  emojis = [],
  emojitypes = [
    "big_smile",
    "cool",
    "hmm",
    "lol",
    "mad",
    "neutral",
    "roll",
    "smile",
    "tongue",
    "wink",
    "yikes"
  ],
  emojire = [
    ":D",
    ":cool:",
    ":/",
    ":lol:",
    ":mad:",
    ":|",
    ":rolleyes:",
    ":)",
    ":P",
    ";)",
    ":o"
  ]
  i = 0;
let width = document.getElementById("width").value,
  height = document.getElementById("height").value;

function generateEmojis() {
  width = document.getElementById("width").value;
  height = document.getElementById("height").value;
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  grid.innerHTML = "";
  let eI = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const img = document.createElement('img');
      let currentIndex = 0;
      img.src = `imgs/${emojitypes[currentIndex]}.png`;
      img.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % emojitypes.length;
        img.src = `imgs/${emojitypes[currentIndex]}.png`;
        img.setAttribute('data-emoji', emojire[currentIndex]);
      });
      img.setAttribute('data-emoji', emojire[currentIndex]);
      img.style.display = "block";
      img.style.marginLeft = "auto";
      img.style.marginRight = "auto";
      img.style.cursor = "pointer";
      img.id = `e-img-${i}-${j}`;
      grid.appendChild(img);
      eI++;
      if (eI >= emojitypes.length) {
        eI = 0;
      }
    }
  }
}

function parseGrid() {
  document.getElementById("result").style.display = "block";
  const bbcode = document.getElementById("bbcode");
  const emojis = grid.querySelectorAll("img");

  let parsedText = "";
  let columnIndex = 1;
  emojis.forEach((emoji, index) => {
    parsedText += `${emoji.getAttribute("data-emoji")} `;
    if (columnIndex >= width) {
      parsedText += "\n"; // add a newline after each row
      columnIndex = 1;
    } else {
      columnIndex++;
    }
  });

  bbcode.value = parsedText.trim();
  document.getElementById("result").style.display = "block";
}

const checkbox = document.getElementById('update-s');
checkbox.addEventListener('click', function() {
  if (this.checked) {
    checkBoxUpdate();
    function checkBoxUpdate(){
      parseGrid();
      if (this.checked) {
        
      }
      setTimeout(checkBoxUpdate, 0010);
    }
    }
});

if (window.location.search) {
  const param = new URLSearchParams(window.location.search);
  const data = param.get("data");
} else {
}