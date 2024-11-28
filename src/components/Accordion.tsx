import { useState } from 'react'

export type AccordionItem = {
  title: string
  content: string | JSX.Element
}

const Accordion = ({ data }: { data: AccordionItem[] }) => {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([])

  const handleQuestionToggle = (idx: number) => {
    if (activeQuestions.includes(idx)) {
      setActiveQuestions(activeQuestions.filter(q => q !== idx))
    } else {
      setActiveQuestions([...activeQuestions, idx])
    }
  }

  return (
    <div className="w-full">
      {data.map((item, index) => {
        return (
          <div className="mb-2 rounded-md border-2 border-red border-opacity-50" key={`faq-${index}`}>
            <button className="m-0 flex w-full justify-between p-3 text-xl" onClick={() => handleQuestionToggle(index)}>
              <div>{item.title}</div>
              <div className="text-xl">{activeQuestions.includes(index) ? '-' : '+'}</div>
            </button>
            <div
              className={`transition-accordionItem paragraph overflow-hidden px-3 text-base duration-200 ${
                activeQuestions.includes(index) ? 'max-h-96 pb-3 pt-0' : 'max-h-0 py-0'
              }`}
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
