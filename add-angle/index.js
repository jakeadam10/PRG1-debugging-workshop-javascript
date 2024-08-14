function addAngle(currentAngle, angleToAdd) {
    const totalAngle = currentAngle + angleToAdd;
    return totalAngle + 360 % 360;
  }