import Accordion, { AccordionItem } from './Accordion'

const Contact = () => {
  const faq: AccordionItem[] = [
    {
      title: 'Tko može sudjelovati?',
      content: 'Sudjelovati mogu svi srednjoškolci (a i osnovnoškolci) te studenti s bilo kojeg hrvatskog sveučilišta.',
    },
    {
      title: 'Kako se prijaviti?',
      content:
        'Prijave će se otvoriti nekoliko dana prije početka natjecanja, ali pridružiti se možete bilo kada za vrijeme cijelog trajanja natjecanja. Prijavljujete se putem svog Google računa ispunjavanjem obrasca na stranici.',
    },
    {
      title: 'Koji se programski jezici/tehnologije mogu koristiti na natjecanju?',
      content: (
        <>
          Moguće je koristiti bilo koji programski jezik ili neku alternativnu metodu rješavanja (ovisno o zadatku). U
          zadacima koji su <i>output-only</i> tipa, bitan je samo rezultat koji pošaljete, a ne i kako ste do njega
          došli. U zadacima u kojima se traži kod, dozvoljeno je korištenje svih standarnih programskih jezika (Python,
          Java, C++, …).
        </>
      ),
    },
    {
      title: 'Nisam iz Zagreba, mogu li svejedno sudjelovati?',
      content:
        'Naravno! Natjecanje se u potpunosti održava online, a ako osvojiš neku od nagrada, oko preuzimanja ćemo se dogovoriti naknadno 🙂',
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      <div className="mb-6 w-full px-8 py-3 text-xl md:w-3/4 md:px-0">
        <h2 className="pb-5 pt-5 text-4xl font-extrabold leading-8 tracking-wide">KONTAKT</h2>
        <p className="paragraph pb-5 leading-8 tracking-wide">
          Ako imate bilo kakva pitanja, slobodno nam se obratite!
        </p>
        <p className="paragraph mb-3 pb-5 leading-8 tracking-wide">
          E-mail:{' '}
          <a
            target="_blank"
            className="text-red underline hover:opacity-60 active:opacity-80"
            href="mailto:dosasce@xfer.hr"
          >
            dosasce@xfer.hr
          </a>
          <br />
          Instagram:{' '}
          <a
            target="_blank"
            className="text-red underline hover:opacity-60 active:opacity-80"
            href="https://www.instagram.com/xfer_hr/"
          >
            @xfer_hr
          </a>
          ,{' '}
          <a
            target="_blank"
            className="text-red underline hover:opacity-60 active:opacity-80"
            href="https://www.instagram.com/eestec_lc_zagreb/"
          >
            @eestec_lc_zagreb
          </a>
        </p>
        {faq?.length > 0 && <Accordion data={faq} />}
      </div>
    </div>
  )
}

export default Contact
