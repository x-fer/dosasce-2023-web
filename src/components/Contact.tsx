import Accordion, { AccordionItem } from './Accordion'

const Contact = () => {
  const faq: AccordionItem[] = [
    {
      title: 'Lorem ipsum',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit
      non nisi aliquam tincidunt.Nulla facilisi.Praesent euismod, diam vitae
      hendrerit dapibus, leo nunc consequat nunc, eget luctus quam urna eu
      augue.`,
    },
    {
      title: 'React components',
      content: (
        <>
          Lorem ipsum dolor sit amet <span className="text-red">consectetur adipiscing elit.</span> Nullam nec elit non
          nisi aliquam tincidunt. Nulla facilisi. Praesent euismod, diam vitae hendrerit dapibus, leo nunc consequat
          nunc, eget luctus quam urna eu augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit
          non nisi aliquam tincidunt. Nulla facilisi. Praesent euismod, diam vitae hendrerit dapibus, leo nunc consequat
          nunc, eget luctus quam urna eu augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit
          non nisi aliquam tincidunt. Nulla facilisi. Praesent euismod, diam vitae hendrerit dapibus, leo nunc consequat
          nunc, eget luctus quam urna eu augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit
          non nisi aliquam tincid
        </>
      ),
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
        </p>
        {faq?.length > 0 && <Accordion data={faq} />}
      </div>
    </div>
  )
}

export default Contact
