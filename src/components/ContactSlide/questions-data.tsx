export type FaqQuestion = {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
};

export const questionsData: FaqQuestion[] = [
  {
    question: "Što je uopće Hackathon?",
    answer:
      "Hackathon je timsko natjecanje u kojem sudionici kroz 20-30 sati traže optimalno rješenje za zadani problem. Naša je ideja napraviti hackathon koji povezuje dva srodna područja, ekonomiju i tehnologiju. Potaknuti nedostatkom studentskih i fakultetskih projekata, odlučili smo objediniti ove dvije grane u jedno natjecanje. Cilj ovog projekta je pružiti studentima nove poglede, znanja i ideje te ih inspirirati za daljnje suradnje.",
  },
  {
    question: "Tko može sudjelovati na AlgoTrade hackathonu?",
    answer:
      "Prijave su otvorene za sve redovne studente preddiplomskih, diplomskih i integriranih studija koji studiraju u Republici Hrvatskoj.",
  },
  {
    question: "Kako se prijaviti na AlgoTrade?",
    answer: (
      <>
        Prijaviti se možete ispunjavanjem{" "}
        <a
          href="https://forms.gle/owMEMstj5rdhrTmv8"
          target="_blank"
          rel="noreferrer"
        >
          obrasca
        </a>
        !
      </>
    ),
  },
  {
    question: "Kako se formiraju timovi?",
    answer: (
      <>
        Skupi ekipu od 5 ljudi, osmislite ime, te neka svako od vas ispuni{" "}
        <a
          href="https://forms.gle/owMEMstj5rdhrTmv8"
          target="_blank"
          rel="noreferrer"
        >
          obrazac
        </a>
        , upisujući isto ime tima.
      </>
    ),
  },
  {
    question: "Nemam tim, mogu li se svejedno prijaviti na Hackathon?",
    answer:
      "Možeš! Prilikom prijave stavi / za ime tima, pa ćemo te kasnije rasporediti u neki od timova!",
  },
  {
    question: "Koje predznanje je potrebno za sudjelovanje?",
    answer: "Bitno je da barem jedan član tima zna programirati.",
  },
  {
    question: "Kako se boduju rješenja?",
    answer:
      "Bodovat će se uspješnost vašeg algoritma, ali i prezentacija vašeg rješenja.",
  },
  {
    question: "Što sve trebam ponijeti sa sobom na Hackathon?",
    answer:
      "Ponesite laptope i sve što mislite da bi vam moglo biti potrebno! Na mjestu održavanja će biti osigurana hrana i piće.",
  },
  {
    question:
      "Ne planiram sudjelovati na Hackathonu, mogu li svejedno doći na predavanja?",
    answer:
      "Naravno! Prati naše objave na Instagramu, gdje ćemo objavljivati detalje o predavanjima.",
  },

  {
    question: "Mogu li sudjelovati od kuće?",
    answer:
      "Nažalost ne, ideja Hackathona je da se svi timovi okupe na jednom mjestu.",
  },
  {
    question: "Dokad su otvorene prijave?",
    answer:
      "Prijave su otvorene do 25.3. u 23:59. Požurite jer je broj mjesta ograničen!",
  },
];
