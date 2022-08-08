function gerar_cor() {
  const r = parseInt(Math.random() * 255);

  const g = parseInt(Math.random() * 255);

  const b = parseInt(Math.random() * 255);

  const rgb = `(${r}, ${g}, ${b})`;
  console.log(rgb);

  const local = document.getElementById('local');
  const color = document.createElement('p');
  color.id = 'rgb-color';
  color.innerText = rgb;
  local.appendChild(color);
}
gerar_cor();
