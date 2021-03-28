// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "te estas quemando(ya casi)!";
  } else if (distance < 50) {
    return "muy caliente(falta poco)";
  } else if (distance < 70) {
    return "caliente(estas cerca segui)";
  } else if (distance < 100) {
    return "tibio(te falta)";
  } else if (distance < 180) {
    return "frio(segui buscando)";
  } else if (distance < 360) {
    return "muuy frio(ni cerca)";
  } else {
    return "estas congeladoo(lejisimos)!";
  }
}
