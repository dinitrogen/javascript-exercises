const ftoc = function(tempF) {
  let degC = (tempF - 32) * (5/9);
  degC = Math.round(degC * 10) / 10;
  return degC;
};

const ctof = function(tempC) {
  let degF = (tempC * (9/5) + 32);
  degF = Math.round(degF * 10) / 10;
  return degF;
};

module.exports = {
  ftoc,
  ctof
};
