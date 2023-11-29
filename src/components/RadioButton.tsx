//import './radioButton.scss'

const RadioButton = ({
  data,
  activeElement,
  onChange,
}: {
  data: { id: number; title: string }[]
  activeElement: number
  onChange: (id: number) => void
}) => {
  return (
    <div className="">
      {data.map(entry => (
        <button
          key={`radio-button-${entry.id}`}
          className={`m-0 inline-block border-2 border-red p-4 hover:bg-blue md:text-lg ${
            activeElement === entry.id ? 'bg-blue text-white' : 'bg-red text-white'
          }`}
          onClick={e => onChange(entry.id)}
        >
          {entry.title}
        </button>
      ))}
    </div>
  )
}

export default RadioButton
