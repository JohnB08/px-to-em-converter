var example = document.getElementById("example");
function pxcalc() {
  let basePx = document.getElementById("basepx").value;
  let px = document.getElementById("pixelvalue").value;
  let em = document.getElementById("emvalue");
  let emvalue = px / basePx;
  em.value = emvalue;
  //   example.style.fontsize = `${emvalue}em`;
}
function emcalc() {
  let basePx = document.getElementById("basepx").value;
  let px = document.getElementById("pixelvalue");
  let em = document.getElementById("emvalue").value;
  let pxvalue = em * basePx;
  px.value = pxvalue;
  console.log(pxvalue);
}
// function fontsizeem_set() {}
// function fontsizepx_set() {
//   example.fontSize = `${emvalue}px`;
// }
function buttonpx() {
  pxcalc();
  //   fontsizeem_set();
}
function buttonem() {
  emcalc();
  //   fontsizepx_set();
}
