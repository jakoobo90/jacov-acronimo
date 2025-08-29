// ---- Datos (CONSTANTES) ----
const DATA = [
  {
    letter: "J",
    word: "Jiraya",
    image: "images/jiraiya.png",
    fact: "Un dato curioso es que Jiraiya fue entrenado por el Tercer Hokage, quien también entrenó a su alumno, Minato Namikaze, el Cuarto Hokage, y Jiraiya a su vez entrenó a Naruto Uzumaki, el Séptimo Hokage. Además, la palabra en la banda de su frente, \"油\" (Abura), se traduce como \"aceite\" y hace referencia a los aceites especiales que se usan en el Monte Myōboku, el hogar de los sapos, donde Jiraiya entrenó."
  },
  {
    letter: "A",
    word: "Autismo",
    image: "images/autismo.png",
    fact: "Un dato curioso es que se cree que personas notables como Albert Einstein, Wolfgang Amadeus Mozart y Charles Darwin poseían rasgos asociados con el autismo, lo que resalta cómo esta condición puede coexistir con talentos excepcionales. Además, el autismo es un trastorno de espectro, lo que significa que cada persona con autismo tiene un conjunto único de habilidades y desafíos, presentando la condición de manera diferente en cada individuo. "
  },
  {
    letter: "C",
    word: "Caballero",
    image: "images/caballero.png",
    fact: "Un dato curioso es que, para el acto formal de convertirse en caballero, el aspirante realizaba un ayuno de un día y se le sometía a una noche de vigilia sobre sus armas. Por la mañana, recibía la espada y espuelas, culminando con el espaldarazo, un golpe en el cuello, que simbolizaba el ascenso a ese rango."
  },
  {
    letter: "O",
    word: "Osiris",
    image: "images/csiris.png",
    fact: "Osiris es una deidad del Antiguo Egipto, venerado como el dios de la fertilidad, la agricultura, la resurrección y el inframundo. Su mito central narra su asesinato y desmembramiento por parte de su hermano Seth, y su posterior resurrección gracias a los poderes mágicos de su esposa, Isis. Tras ser resucitado, se convierte en el juez de los muertos y en el símbolo de la renovación cíclica de la naturaleza y de la esperanza en una vida después de la muerte. "
  },
  {
    letter: "V",
    word: "Valhalla",
    image: "images/valhalla.png",
    fact: "El Valhalla era un vasto salón de banquetes. Tenía al menos 540 puertas y un techo de escudos. El poderoso dios nórdico Odín gobernaba el Valhalla. Solo permitía el acceso a los guerreros que habían muerto con valentía."
  }
];

// ---- Render dinámico ----
const list = document.getElementById('list');

DATA.forEach((item, idx) => {
  const row = document.createElement('section');
  row.className = 'row';

  const colLetter = document.createElement('div');
  colLetter.className = 'col-letter';
  colLetter.innerHTML = `
    <p class="big-letter">${item.letter}</p>
    <div class="word" data-palette="${(idx % 4) + 1}">${item.word}</div>
  `;

  const colImage = document.createElement('div');
  colImage.className = 'col-image';
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = `Imagen relacionada a ${item.word}`;
  img.className = 'thumb';
  colImage.appendChild(img);

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.setAttribute('type','button');
  btn.textContent = 'Dato curioso';
  btn.addEventListener('click', () => showToast(item.fact));

  // order in row
  row.appendChild(colLetter);
  row.appendChild(colImage);
  row.appendChild(btn);

  list.appendChild(row);
});

// ---- Toast helper ----
let toastTimer;
function showToast(text){
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}
