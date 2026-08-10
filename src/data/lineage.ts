export type LineBrother = {
  name: string;
  lineName?: string;
};

export type ChapterLine = {
  season: 'Spring' | 'Fall';
  year: number;
  lineName?: string;
  image?: string;
  brothers: LineBrother[];
};

export const chapterLineage: ChapterLine[] = [
  {
    season: "Spring",
    year: 2026,
    lineName: "Authority",
    image: "/lineage/Authority.jpg",
    brothers: [
      {  name: "Elliot Rosa"},
      {  name: "Jacob Green" },
      {  name: "Zion Singleton" },
      {  name: "Noah Hoereth" },
    ],
  },
  {
    season: "Fall",
    year: 2025,
    lineName: "Exodus",
    image: "/lineage/Exodus.jpg",
    brothers: [
      {  name: "Osiel Iglesias Faez"},
      {  name: "Tyler Japal" },
    ],
  },
  {
    season: "Spring",
    year: 2024,
    lineName: "Nebula",
    image: "/lineage/Nebula.jpg",
    brothers: [
      {  name: "Jeremy Henderson"},
      {  name: "Cameron White" },
      {  name: "Christian Flournoy" },
      {  name: "Colin Michael" },
    ],
  },
  {
    season: "Spring",
    year: 2022,
    lineName: "Autonomy",
    image: "/lineage/Autonomy.jpg",
    brothers: [
      {  name: "Jarahn Johnson"},
      {  name: "Lawrence Bancroft" },
      {  name: "Luke Holbrook-Jackson" },
      {  name: "Aaron Brown" },
    ],
  },
  {
    season: "Fall",
    year: 2021,
    lineName: "ExcAlibur",
    image: "/lineage/ExcAlibur.jpg",
    brothers: [
      {  name: "Cameron Shaw"},
      {  name: "Mar'Quon Frederick" },
    ],
  },
  {
    season: "Fall",
    year: 2020,
    lineName: "Ascension",
    brothers: [
      {  name: "Shemar Christian"},
      {  name: "Ysrael Hernandez" },
      {  name: "Paul Adebayo" },
    ],
  },
  {
    season: "Fall",
    year: 2019,
    lineName: "Retribution",
    image: "/lineage/Retribution.jpg",
    brothers: [
      {  name: "Daytawn Campbell"},
      {  name: "Lassan Bagayoko" },
      {  name: "Meshach Boyce" },
      {  name: "Nnaemeka Nwankpa"},
    ],
  },
  {
    season: "Fall",
    year: 2018,
    lineName: "Absolute Zero",
    brothers: [
      {  name: "Malik Scales"},
      {  name: "Joseph Arewa" },
      {  name: "Lamin Johnson" },
      {  name: "Uchenna Chukwukere"},
      {  name: "Oderachukwu Ugwu"},
      {  name: "Justin Kobler"},
      {  name: "Darnell Campbell"},
    ],
  },
  {
    season: "Fall",
    year: 2017,
    image: "/lineage/RevelAtion.jpg",
    lineName: "PHrozen RevelAtion",
    brothers: [
      {  name: "Brandon Adams"},
      {  name: "Evan Reynolds" },
      {  name: "Emmanuel Nimarko" },
      {  name: "Noah Gear"},
    ],
  },
  {
    season: "Fall",
    year: 2016,
    image: "/lineage/perphection.jpg",
    lineName: "EternAl PerPHection",
    brothers: [
      {  name: "Colin Hancock"},
      {  name: "Jamal Starling" },
      {  name: "John Powell" },
      {  name: "Chandler Harrington"},
      {  name: "Ronald Joseph" },
      {  name: "Caleb Ruffin"},
      {  name: "Abraham Araya"},
      {  name: "Joseph Olalusi" },
      {  name: "Joel Davis"},
    ],
  },
  {
    season: "Fall",
    year: 2015,
    image: "/lineage/inphinity.jpg",
    lineName: "InPHInity",
    brothers: [
      {  name: "Joseph Nelzy"},
      {  name: "Vincent Harrison" },
      {  name: "Ishmail Grady" },
    ],
  },
  {
    season: "Fall",
    year: 2014,
    image: "/lineage/seventh.jpg",
    lineName: "The Seventh Pillar",
    brothers: [
      {  name: "Denzale Reese"},
      {  name: "Sami Mesgun" },
      {  name: "Armon Sadler" },
      {  name: "Ogbogu Ukuku"},
      {  name: "Nicolas Earley" },
      {  name: "Andrew Boseman" },
    ],
  },
  {
    season: "Fall",
    year: 2013,
    image: "/lineage/voyage.jpg",
    lineName: "PHrozen VoyAge",
    brothers: [
      {  name: "Aaron Hancock"},
      {  name: "Carlton Burrell" },
      {  name: "Brandon Dennis" },
      {  name: "Jabari Archer"},
      {  name: "Connor Cash" },
      {  name: "Ignacio Saldana" },
    ],
  },
  {
    season: "Fall",
    year: 2012,
    image: "/lineage/trilogy.jpg",
    lineName: "The SAcred Trilogy",
    brothers: [
      {  name: "Steven Bell"},
      {  name: "Jeremy Freeman" },
      {  name: "Fabien Smallwood" },
    ],
  },
  {
    season: "Fall",
    year: 2011,
    image: "/lineage/sanctiphied.jpg",
    lineName: "SanctiPHIed",
    brothers: [
      {  name: "William Jackson"},
      {  name: "Dean Oliver" },
      {  name: "Dazell Washington" },
    ],
  },
  {
    season: "Fall",
    year: 2009,
    image: "/lineage/salvation.jpg",
    lineName: "Salvation",
    brothers: [
      {  name: "Tony Craddock, Jr."},
      {  name: "Joseph Agyei" },
      {  name: "Rodney Jean" },
      {  name: "Asa Craig"},
      {  name: "Robert Davis"},
      {  name: "Kemar Trowers" },
      {  name: "Rodney Jean" },
      {  name: "Clifford Dawkins" },
      {  name: "Antonio James" },
    ],
  },
  {
    season: "Fall",
    year: 2008,
    image: "/lineage/newtons.jpg",
    lineName: "Newton's Boyz",
    brothers: [
      {  name: "Ryan Middleton"},
      {  name: "Maximilian Aggrey" },
      {  name: "Ruke Ufomata" },
      {  name: "Marcus Mitchell"},
      {  name: "Ernie Jolly"},
      {  name: "Brandon Espinosa" },
      {  name: "Kenneth Woods" },
      {  name: "Adedamola Majekodunmi" },
      {  name: "Khalfani Leslie" },
      {  name: "Mikael Yisrael" },
      {  name: "Gabriel Hurst" },
      {  name: "Earl Jones" },
      {  name: "Durrell Harper" },
      {  name: "Idris Akinpelu" },
      {  name: "Edgar Galvis" },
      {  name: "Marvis Burns" },
    ],
  },
];