import Trote from "./img/Trote.jpg";
import Sentadillas from './img/Sentadillas.jpg';
import Estiramiento_Estatico from './img/Estiramiento estatico.jpg';
import Equilibrio_sobre_una_pierna from './img/Equilibrio sobre una pierna.jpg';
import Circuito_de_entrenamiento from './img/Circuito de entrenamiento.jpeg';
import HIIT from './img/HIIT.jpg';
import yoga from './img/yoga.jpg';
import levantamiento_de_pesas from './img/levantamiento de pesas.png';
import saltar_la_cuerda from './img/saltar la cuerda.jpg';
import flexion_de_pecho from './img/flexion de pecho.jpg';

export const data = [
  {
    id: 1,
    imagen: Trote,
    titulo: 'Trote',
    descripcion: 'Actividad cardiovascular que consiste en correr a un ritmo constante.',
    tipoEjercicio: 'Cardiovascular',
    dificultad: 'Facil',
    objetivo: 'Mejora de la resistencia',
    duracion: '30 minutos',
    ejercicios: [
      { repeticiones: '3 series de 10 minutos', descanso: '2 minutos entre series' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 2,
    imagen: Sentadillas,
    titulo: 'Sentadillas',
    descripcion: 'Ejercicio de fuerza que consiste en flexionar las piernas y bajar el cuerpo como si se fuera a sentar.',
    tipoEjercicio: 'Fuerza',
    dificultad: 'Facil',
    objetivo: 'Fortalecimiento de piernas y glúteos',
    duracion: '15 minutos',
    ejercicios: [
      { repeticiones: '3 series de 12 repeticiones', descanso: '1 minuto entre series' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 3,
    imagen: Estiramiento_Estatico,
    titulo: 'Estiramientos estáticos',
    descripcion: 'Ejercicios de flexibilidad que implican estirar un músculo y mantener la posición durante un periodo de tiempo.',
    tipoEjercicio: 'Flexibilidad',
    dificultad: 'Facil',
    objetivo: 'Mejora de la flexibilidad muscular',
    duracion: '10 minutos',
    ejercicios: [
      { repeticiones: '2 series de 30 segundos por ejercicio', descanso: '10 segundos entre ejercicios' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 4,
    imagen: Equilibrio_sobre_una_pierna,
    titulo: 'Equilibrio sobre una pierna',
    descripcion: 'Ejercicio de equilibrio que consiste en mantener el equilibrio sobre una pierna durante un periodo de tiempo.',
    tipoEjercicio: 'Equilibrio',
    dificultad: 'Facil',
    objetivo: 'Mejora del equilibrio y la estabilidad corporal',
    duracion: '5 minutos',
    ejercicios: [
      { repeticiones: '3 series de 30 segundos por pierna', descanso: '1 minuto entre series' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 5,
    imagen: Circuito_de_entrenamiento,
    titulo: 'Circuito de entrenamiento',
    descripcion: 'Rutina de ejercicios que combina diferentes movimientos y actividades con poco descanso entre ellos.',
    tipoEjercicio: 'Resistencia',
    dificultad: 'Media',
    objetivo: 'Mejora de la resistencia cardiovascular y muscular',
    duracion: '45 minutos',
    ejercicios: [
      { repeticiones: 'Realizar cada ejercicio durante 1 minuto', descanso: '30 segundos entre ejercicios' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 6,
    imagen: HIIT,
    titulo: 'Entrenamiento de alta intensidad (HIIT)',
    descripcion: 'Entrenamiento que combina intervalos cortos de ejercicio intenso con períodos de descanso activo o pasivo.',
    tipoEjercicio: 'Resistencia',
    dificultad: 'Dificil',
    objetivo: 'Quemar calorías, mejorar la resistencia y la capacidad aeróbica',
    duracion: '20 minutos',
    ejercicios: [
      { repeticiones: 'Realizar cada ejercicio durante 45 segundos', descanso: '15 segundos entre ejercicios' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 7,
    imagen: yoga,
    titulo: 'Yoga',
    descripcion: 'Práctica física y mental que combina posturas, respiración y meditación para mejorar la flexibilidad, la fuerza y la relajación.',
    tipoEjercicio: 'Flexibilidad',
    dificultad: 'Facil',
    objetivo: 'Mejora de la flexibilidad, la fuerza y la relajación',
    duracion: '30 minutos',
    ejercicios: [
      { repeticiones: 'Realizar cada postura durante 1 minuto', descanso: '30 segundos entre posturas' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 8,
    imagen: levantamiento_de_pesas,
    titulo: 'Levantamiento de pesas',
    descripcion: 'Actividad de fuerza que implica levantar y mover pesas para trabajar los músculos específicos.',
    tipoEjercicio: 'Fuerza',
    dificultad: 'Media',
    objetivo: 'Desarrollo de la fuerza y la masa muscular',
    duracion: '40 minutos',
    ejercicios: [
      { repeticiones: '3 series de 8-12 repeticiones', descanso: '2 minutos entre series' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 9,
    imagen: saltar_la_cuerda,
    titulo: 'Saltos de cuerda',
    descripcion: 'Ejercicio cardiovascular que consiste en saltar una cuerda mientras se mantienen los pies juntos y se realiza un movimiento coordinado de brazos y muñecas.',
    tipoEjercicio: 'Cardiovascular',
    dificultad: 'Media',
    objetivo: 'Mejora de la resistencia y coordinación',
    duracion: '25 minutos',
    ejercicios: [
      { repeticiones: 'Realizar 5 series de 1 minuto', descanso: '30 segundos entre series' },
    ],
    showAdditionalContent: false,
  },
  {
    id: 10,
    imagen: flexion_de_pecho,
    titulo: 'Flexiones de pecho',
    descripcion: 'Ejercicio de fuerza que implica apoyar las manos y los pies en el suelo, mantener el cuerpo recto y bajar y subir el cuerpo flexionando los brazos.',
    tipoEjercicio: 'Fuerza',
    dificultad: 'Facil',
    objetivo: 'Fortalecimiento de los músculos del pecho, brazos y hombros',
    duracion: '10 minutos',
    ejercicios: [
      { repeticiones: '3 series de 10 repeticiones', descanso: '1 minuto entre series' },
    ],
    showAdditionalContent: false,
  },
];