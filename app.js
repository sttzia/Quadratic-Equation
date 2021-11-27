function getID(i) {
  return document.getElementById(i);
}

function getVal(i) {
  return getID(i).value;
}

var submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};

function solve() {
  var a = parseFloat(getVal("a")),
    b = parseFloat(getVal("b")),
    c = parseFloat(getVal("c"));

  if (isNaN(a)) {
    a = 1;
  }
  if (isNaN(b)) {
    b = 0;
  }
  if (isNaN(c)) {
    c = 0;
  }

  // calculate discriminant
   var D = Math.pow(b, 2) - 4 * a * c;

  var dis = getID("DIS"),
    nos = getID("NOS"),
    s1 = getID("S1"),
    s2 = getID("S2");

  nos.style.display = "none";

  s1.innerHTML = "";
  s2.innerHTML = "";

  dis.innerHTML = 'Discriminant = <span id="D"></span>';

  var d = getID("D");
  d.innerHTML = D.toString();

  // if roots are not real
  if (D < 0) {
    dis.innerHTML = "It has Complex Roots !";

    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-D) / (2 * a);

    s1.innerHTML =
      "x1= " + realPart.toString() + "+i•" + imaginaryPart.toString();
    s2.innerHTML =
      "x2= " + realPart.toString() + "-i•" + imaginaryPart.toString();
  }

  // condition for real and equal roots
  else if (D == 0) {
    var S = -b / (2 * a);

    s1.innerHTML = "Only one root... " + S.toString();
  }

  // condition for real and different roots
  else {
    var S1 = (-b + Math.sqrt(D)) / (2 * a),
      S2 = (-b - Math.sqrt(D)) / (2 * a);

    s1.innerHTML = "x1= " + S1.toString();
    s2.innerHTML = "x2= " + S2.toString();
  }
}
