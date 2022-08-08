function genColors() {
  const r = parseInt(Math.random() * 255);

  const g = parseInt(Math.random() * 255);

  const b = parseInt(Math.random() * 255);

  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
}
const localResposta = document.getElementById('resposta');
const resposta = document.createElement('p');
function boasVindas() {
  localResposta.innerHTML = '';
  resposta.id = 'answer';
  resposta.innerText = 'Escolha uma cor!';
  localResposta.appendChild(resposta);
}
boasVindas();
function respCert() {
  localResposta.innerHTML = '';
  resposta.innerText = 'Acertou!';
  localResposta.appendChild(resposta);
}
function respErrada() {
  localResposta.innerHTML = '';
  resposta.innerText = 'Errou! Tente novamente!';
  localResposta.appendChild(resposta);
}
function dispColor() {
  const rgb = genColors();

  const local = document.getElementById('local');
  const color = document.createElement('p');
  color.id = 'rgb-color';
  color.innerText = rgb;
  local.innerHTML = '';
  local.appendChild(color);
  const aux = document.createElement('div');
  aux.id = 'aux';
  local.appendChild(aux);
  return rgb;
}
dispColor();

function genBalls() {
  const local = document.getElementById('color-balls');
  local.innerHTML = '';
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = `rgb${genColors()}`;
    local.appendChild(ball);
  }
}
genBalls();

function answer() {
  const answerColor = document.getElementById('rgb-color').innerText;
  const answerColorRgb = `rgb${answerColor}`;
  const vaAux = document.getElementById('aux');
  vaAux.style.backgroundColor = answerColorRgb;
  const aux2 = vaAux.style.backgroundColor;
  const options = document.querySelectorAll('.ball');
  const resposta = parseInt(Math.random() * 6);
  options[resposta].style.backgroundColor = answerColorRgb;
  for (let index = 0; index < options.length; index += 1) {
    options[index].addEventListener('click', (event) => {
      const color = event.target.style.backgroundColor;
      if (color == aux2) {
        respCert();
        scorePlacar();
      } else respErrada();
    });
  }
}

answer();

function reset() {
  const button = document.getElementById('reset-game');
  button.addEventListener('click', () => {
    boasVindas();
    dispColor();
    genBalls();
    answer();
  });
}
reset();
const scoreP = document.getElementById('score');
scoreP.innerText = 0;
let auxPlacar = 0;

function scorePlacar() {
  auxPlacar += 3;
  scoreP.innerText = auxPlacar;
}
