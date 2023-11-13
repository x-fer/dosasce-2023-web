export type PartnerData = {
  name: string;
  imgSrc: string;
  website: string;
  dark?: boolean;
};

export const partnersData: PartnerData[] = [
  {
    name: "Fakultet elektrotehnike i računarstva",
    imgSrc: require("../../resources/partner-logos/fer-logo.png"),
    website: "https://fer.unizg.hr/",
  },
];
