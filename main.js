
StName = [];

function submit() {

var N1 = document.getElementById("StName1").value;
var N2 = document.getElementById("StName2").value;
var N3 = document.getElementById("StName3").value;
var N4 = document.getElementById("StName4").value;

StName.push(N1);
StName.push(N2);
StName.push(N3);
StName.push(N4);

console.log(StName);

document.getElementById("Display Name"),innerHTML = StName;

}