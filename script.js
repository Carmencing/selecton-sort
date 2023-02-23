let list = document.querySelector(".list");
let enterButton = document.querySelector(".enterButton");
let rankings = [7, 2, 4, 56, 2, 78, -6, 0];
let newRankings = [];

function sortRankings() {
  while (rankings.length > 0) {
    min = 0;
    for (j = min + 1; j < rankings.length; j++) {
      if (rankings[min] > rankings[j]) {
        min = j;
      }
    }
    newRankings.push(rankings[min]);
    rankings.splice(min, 1);
    console.log("old" + rankings)
    console.log("new" + newRankings)
  }
}

function clearDisplay() {
  list.innerHTML = ""
}

function addInput() {
  response = document.querySelector(".numberInput").value;
  if (response == "") {
    return
  }
  else {
    rankings.push(response);
  }

}

function displayRankings() {
  newRankings.forEach(function(element) {
    let rankItem = document.createElement("li");
    rankItem.innerHTML = element;
    list.appendChild(rankItem);

  });
}


enterButton.onclick = function() {
  addInput();
  sortRankings();
  clearDisplay();
  displayRankings();




}
