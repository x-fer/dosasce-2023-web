export type ScheduleItem = {
  hostImgSrc: string;
  hostName: string;
  hostDescription: string;
  name: string;
  timeAndLocation: string;
  description: string;
};

const day1: ScheduleItem[] = [
  {
    hostName: "X.FER & Financijski klub",
    hostDescription: "Organizatori Hackathona",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/AlgoTrade.png"),
    name: "Svečano otvorenje",
    timeAndLocation: "28.3.2023. u 17:00h, Siva vijećnica na FER-u",
    description: "",
  },
  {
    hostName: "Tomislav Burić",
    hostDescription: "Zavod za primijenjenu matematiku, FER",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Tomislav Buric - FER.png"),
    name: "Grafovi u akciji: Kako matematičke strukture pomažu na financijskom tržištu",
    timeAndLocation: "28.3.2023. u 17.45h, Siva vijećnica na FER-u",
    description: "",
  },
];

const day2: ScheduleItem[] = [
  {
    hostName: "Matej Čondra, Filip Benasić",
    hostDescription: "Ericsson Nikola Tesla",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Ericsson.png"),
    name: "Kod s 0 grešaka",
    timeAndLocation: "29.3.2023. u 16:00h, A302 na FER-u",
    description: "",
  },
  {
    hostName: "Goran Dubček",
    hostDescription: "InterCapital Asset Management",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Goran Dubcek - ICAM.png"),
    name: "Utjecaj market making opcija na tržište",
    timeAndLocation: "29.3.2023. u 18:00h, A302 na FER-u",
    description: "",
  },
];

const day3: ScheduleItem[] = [
  {
    hostName: "Ozren Iljadica",
    hostDescription: "Zagrebačka Burza",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Ozren Iljadica - Zagrebacka Burza.png"),
    name: "Upravljanje portfeljem",
    timeAndLocation: "30.3.2023. u 16:00h, A201 na FER-u",
    description: "",
  },
  {
    hostName: "Hrvoje Abraham",
    hostDescription: "AVL in Croatia",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Hrvoje Abraham - AVL.png"),
    name: "Novo otkriće brzog algoritma za najkraći put u grafovima s negativnim težinama",
    timeAndLocation: "30.3.2023. u 17:20h, A201 na FER-u",
    description: "",
  },
  {
    hostName: "Ivan Bimbi",
    hostDescription: "Croatia Osiguranje",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Ivan Bimbi - Croatia osiguranje.png"),
    name: "LAQO - Case Study",
    timeAndLocation: "30.3.2023. u 18:40h, A201 na FER-u",
    description: "",
  },
];

const day4: ScheduleItem[] = [
  {
    hostName: "Marija Herceg",
    hostDescription: "Invento Capital Partners",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Marija Herceg - Invento.png"),
    name: "Comms and promos tips & tricks - Digitalni marketing, društvene mreže i ostale promotivne aktivnosti",
    timeAndLocation: "31.3.2023. u 16:00h, A201 na FER-u",
    description: "",
  },
  {
    hostName: "Karlo Kukec",
    hostDescription: "Invento Capital Partners",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Karlo Kukec - Invento.png"),
    name: "Pitcham ti priču - Alati, tehnike i vještine prezentiranja",
    timeAndLocation: "31.3.2023. u 17:20h, A201 na FER-u",
    description: "",
  },
  {
    hostName: "Stipe Bumber",
    hostDescription: "Financijski klub",
    hostImgSrc: require("../../resources/schedule-hosts/mid-res/Stipe Bumber - FK.png"),
    name: "Hakiranje nekretnina",
    timeAndLocation: "31.3.2023. u 18:40h, A201 na FER-u",
    description: "",
  },
];

export const scheduleData = [day1, day2, day3, day4];
