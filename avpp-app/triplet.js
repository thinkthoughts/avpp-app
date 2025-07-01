function calculateTripletN(spiralN) {
  return (spiralN * 24) - 25;
}

function getPiStage(tripletN) {
  const piStage = Math.round(tripletN / Math.PI);
  return {
    tripletN,
    piStage,
    category: piStage % 3 === 0 ? 'Earth Resistance' :
              piStage % 3 === 1 ? 'Earth Imagination' : 'Earth Observation'
  };
}