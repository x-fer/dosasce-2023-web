export type PartnerData = {
  name: string;
  imgSrc: string;
  website: string;
  dark?: boolean;
};

export const partnersData: PartnerData[] = [
  {
    name: "Asee",
    imgSrc: require("../../resources/partner-logos/asee-logo.png"),
    website: "https://see.asseco.com/",
    dark: true,
  },
  {
    name: "AVL",
    imgSrc: require("../../resources/partner-logos/avl-logo.png"),
    website: "https://www.avl.com/en",
  },
  {
    name: "Croatia Osiguranje",
    imgSrc: require("../../resources/partner-logos/crosig-logo.png"),
    website: "https://crosig.hr/",
    dark: true,
  },
  {
    name: "Ericsson Nikola Tesla",
    imgSrc: require("../../resources/partner-logos/ericsson-logo.png"),
    website: "https://www.ericsson.hr/",
    dark: true,
  },
  {
    name: "Fakultet elektrotehnike i računarstva",
    imgSrc: require("../../resources/partner-logos/fer-logo.png"),
    website: "https://fer.unizg.hr/",
  },
  {
    name: "InterCapital Asset Management",
    imgSrc: require("../../resources/partner-logos/intercapital-logo.png"),
    website: "https://icam.hr/",
  },
  {
    name: "Invento",
    imgSrc: require("../../resources/partner-logos/invento-logo.png"),
    website: "https://www.inventocapitalpartners.eu/",
  },
  // {
  //   name: "OptimTrader",
  //   imgSrc: require("../../resources/partner-logos/optim-trader-logo.png"),
  //   website: "https://optimtrader.com/en/",
  //   dark: true,
  // },
  {
    name: "Stablo Znanja",
    imgSrc: require("../../resources/partner-logos/stablo-znanja-logo.png"),
    website: "https://stabloznanja.com/",
  },
  {
    name: "Zagrebačka burza",
    imgSrc: require("../../resources/partner-logos/zagrebacka-burza-logo.png"),
    website: "https://zse.hr/",
  },
];
