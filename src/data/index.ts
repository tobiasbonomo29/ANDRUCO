export type Player = {
  id: number;
  name: string;
  rating: number;
  pos: string;
  tier: "S" | "A" | "B" | "C" | "D";
  score: number;
  stats: number[];
};
export const players: Player[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  name: [
    "VALENTE",
    "SANTORO",
    "VEGA",
    "MORETTI",
    "SILVA",
    "FERRER",
    "LEBLANC",
    "NAVARRO",
    "ROSSI",
    "COSTA",
    "ALONSO",
    "DUBOIS",
    "ROMERO",
    "MARTINS",
    "DE LUCA",
  ][i],
  rating: 94 - Math.floor(i / 2),
  pos: ["DC", "MC", "DFC", "POR"][i % 4],
  tier: (["S", "A", "B", "C", "D"] as const)[Math.floor(i / 3)],
  score: Math.round((9.8 - i * 0.23) * 10) / 10,
  stats: [94 - i, 90 - i, 86 - i, 93 - i, 55 + i, 81 - i],
}));
export type Tutorial = {
  id: number;
  title: string;
  category: string;
  tag: string;
  duration: string;
};
export const tutorials: Tutorial[] = [
  "El regate que marca la diferencia",
  "Domina las fintas de salida",
  "Control orientado: gana ese metro",
  "Defiende sin romper tu bloque",
  "El cambio de jugador perfecto",
  "Presión con cabeza",
  "Ataca los espacios libres",
  "El pase que rompe líneas",
  "Finalización en el área",
  "Calienta antes de competir",
  "Tu rutina de 15 minutos",
  "Aprende de tus derrotas",
].map((title, i) => ({
  id: i,
  title,
  category: ["Controles", "Defensivos", "Ofensivos", "Rutinas"][
    Math.floor(i / 3)
  ],
  tag: ["regate", "finta", "ataque rápido"][i % 3],
  duration: `${4 + (i % 5)}:${i % 2 ? "32" : "18"}`,
}));
export const tactics = ["4-2-3-1", "4-4-2", "4-3-2-1", "4-3-3", "3-5-2"].map(
  (formation, i) => ({
    formation,
    title: [
      "El equilibrio perfecto",
      "Dos puntas, mil opciones",
      "Ataque sin frenos",
      "Amplitud y control",
      "Domina el centro",
    ][i],
    code: `ANDY${i + 1}FC26`,
    style: ["Equilibrada", "Presión alta", "Ofensiva", "Posesión", "Vertical"][
      i
    ],
  }),
);
export const positions = [
  { pos: "DC", x: 50, y: 15 },
  { pos: "EI", x: 18, y: 30 },
  { pos: "ED", x: 82, y: 30 },
  { pos: "MC", x: 35, y: 48 },
  { pos: "MCO", x: 65, y: 48 },
  { pos: "MCD", x: 50, y: 64 },
  { pos: "LI", x: 15, y: 74 },
  { pos: "DFC", x: 37, y: 79 },
  { pos: "DFC", x: 64, y: 79 },
  { pos: "LD", x: 85, y: 74 },
  { pos: "POR", x: 50, y: 93 },
];
export const roleData = {
  roles: [
    ["Organizador", 9],
    ["Todocampista", 8],
    ["Recuperador", 7],
  ] as [string, number][],
  playstyles: ["Pase incisivo", "Primer toque", "Incansable"],
};
export type Post = {
  id: number;
  name: string;
  action: string;
  body: string;
  likes: number;
};
export const posts: Post[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: [
    "andy_oasis",
    "SergioUT",
    "mariafut",
    "ElChicuelo",
    "DaniFC",
    "Pablo10",
    "LuciaPlay",
    "AlexUT",
  ][i],
  action:
    i % 2
      ? "ha finalizado su Jornada de FUT Champions"
      : "ha compartido sus Tácticas",
  body:
    i === 0
      ? "Bienvenidos a vuestra nueva casa, chicuelos. Aquí venimos a aprender, compartir y disfrutar. ¡MUAK!"
      : i % 2
        ? "11 victorias y muchas cosas aprendidas. ¡Vamos a por la siguiente!"
        : "Esta 4-2-3-1 me está funcionando de locos. La clave está en no correr siempre.",
  likes: 42 - i * 4,
}));
export type Message = { id: number; name: string; text: string; color: string };
export const colors = [
  "#f7c843",
  "#7dd3fc",
  "#6ee7b7",
  "#f9a8d4",
  "#fda49a",
  "#c4b5fd",
];
export const messages: Message[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  name: ["SergioUT", "mariafut", "DaniFC", "andy_oasis", "ElChicuelo"][i % 5],
  text: [
    "Buenas, chicuelos 👋",
    "¿Alguien ha probado la nueva táctica?",
    "Ese pase incisivo es otra historia 🔥",
    "Hoy toca mejorar un poquito. MUAK 💛",
    "¡Nos vemos en el directo!",
  ][i % 5],
  color: colors[i % 6],
}));
export const notifications = [
  "Andy está en directo",
  "Andruco respondió a tu plantilla",
  "Nueva votación: ¿Vale la pena el SBC de hoy?",
  "Tu pregunta tiene una solución aceptada",
  "Ya tienes nuevas rutinas de entrenamiento",
  "¡Has desbloqueado el logro Primeros pasos!",
];
export const polls = [
  { id: "sbc", title: "¿Vale la pena el SBC de Valente?", yes: 76, no: 24 },
  { id: "vs", title: "¿Con quién te quedas?", yes: 61, no: 39 },
];
export const previousSquad = {
  date: "18 de octubre",
  reply:
    "Refuerza el centro del campo con Vega y dale libertad al MCO. ¡Tienes equipo para disfrutar, chicuelo!",
};
export const history = [
  { wins: 11, losses: 4 },
  { wins: 10, losses: 5 },
  { wins: 12, losses: 3 },
  { wins: 9, losses: 6 },
];
export type Match = {
  id: number;
  gf: number;
  ga: number;
  result: string;
  extra: string;
  scorer: string;
};
export const initialMatches: Match[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  gf: i < 9 ? 3 : 1,
  ga: i < 9 ? 1 : 2,
  result: i < 9 ? "Victoria" : "Derrota",
  extra: "Tiempo reglamentario",
  scorer: "Valente",
}));
export const initialUser = {
  name: "Chicuelo_10",
  platform: "PS5",
  color: colors[0],
  publicRecord: true,
};
export const positionRoles: Record<string, {roles:[string,number][];playstyles:string[]}> = {
 DC:{roles:[['Delantero avanzado',10],['Cazagoles',9],['Falso nueve',8]],playstyles:['Tiro colocado','Primer toque','Disparo potente']},
 EI:{roles:[['Extremo',9],['Delantero interior',10],['Organizador abierto',7]],playstyles:['Regate hábil','Paso rápido','Tiro colocado']},
 ED:{roles:[['Extremo',9],['Delantero interior',10],['Organizador abierto',7]],playstyles:['Regate hábil','Paso rápido','Centro preciso']},
 MCO:{roles:[['Organizador',10],['Segundo delantero',9],['Medio abierto',7]],playstyles:['Pase incisivo','Primer toque','Pase al hueco']},
 MCD:{roles:[['Contención',10],['Recuperador',9],['Pivote organizador',8]],playstyles:['Anticipación','Intercepción','Incansable']},
 DFC:{roles:[['Defensa',10],['Central con salida',9],['Marcador',8]],playstyles:['Anticipación','Juego aéreo','Intercepción']},
 LI:{roles:[['Lateral',9],['Carrilero',8],['Lateral invertido',8]],playstyles:['Incansable','Centro preciso','Intercepción']},
 LD:{roles:[['Lateral',9],['Carrilero',8],['Lateral invertido',8]],playstyles:['Incansable','Centro preciso','Intercepción']},
 POR:{roles:[['Portero',10],['Portero líbero',9],['Portero con salida',8]],playstyles:['Reflejos','Alcance','Saque rápido']}
};
