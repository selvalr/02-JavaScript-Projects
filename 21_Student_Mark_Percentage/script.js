function calculation() {
  let tamil = document.getElementsByClassName("scoreMarks")[0].innerHTML;
  let eng = document.getElementsByClassName("scoreMarks")[1].innerHTML;
  let mat = document.getElementsByClassName("scoreMarks")[2].innerHTML;
  let sc = document.getElementsByClassName("scoreMarks")[3].innerHTML;
  let sosc = document.getElementsByClassName("scoreMarks")[4].innerHTML;
  let phy = document.getElementsByClassName("scoreMarks")[5].innerHTML;

  let totalMark =
    parseInt(tamil) +
    parseInt(eng) +
    parseInt(mat) +
    parseInt(sc) +
    parseInt(sosc) +
    parseInt(phy);

  document.getElementById("scoreMarksTotal").innerHTML = totalMark;

  let per = Math.floor((totalMark / 600) * 100);

  document.getElementById("percentage").innerHTML = `Percentage:${per}`;
}
