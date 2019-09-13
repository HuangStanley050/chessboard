let chessboard = document.querySelector(".chessboard");

//first row is 0 to 7
//second row is 8 to 15
//so on and so forth...

for (let i = 0; i < 64; i++) {
  const node = document.createElement("DIV");
  if (i >= 0 && i <= 7) {
    //first row
    if (i % 2 !== 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 8 && i <= 15) {
    //second row
    if (i % 2 == 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 16 && i <= 23) {
    //third row
    if (i % 2 !== 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 24 && i <= 31) {
    //fourth row
    if (i % 2 == 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 32 && i <= 39) {
    //fifth row
    if (i % 2 !== 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 40 && i <= 47) {
    //sixth row
    if (i % 2 == 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 48 && i <= 55) {
    //seventh row
    if (i % 2 !== 0) {
      node.setAttribute("style", "background:black");
    }
  } else if (i >= 56 && i <= 63) {
    //eighth row
    if (i % 2 == 0) {
      node.setAttribute("style", "background:black");
    }
  }

  chessboard.appendChild(node);
}
