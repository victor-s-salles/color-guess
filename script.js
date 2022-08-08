function genColors() {
  const r = parseInt(Math.random() * 255);

  const g = parseInt(Math.random() * 255);

  const b = parseInt(Math.random() * 255);

  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
}

function dispColor() {
  rgb = genColors();

  const local = document.getElementById('local');
  const color = document.createElement('p');
  color.id = 'rgb-color';
  color.innerText = rgb;
  local.appendChild(color);
  return rgb;
}
dispColor();

function genBalls() {
  const local = document.getElementById('color-balls');
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = `rgb${genColors()}`;
    local.appendChild(ball);
  }
}
genBalls();
