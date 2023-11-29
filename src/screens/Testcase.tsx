import { http } from '@/api/http'
import raw from '../../public/files/test123.txt'
import { useState } from 'react'

const Testcase = () => {
  const [formUrl, setFormUrl] = useState('')

  const send = (event: React.FormEvent) => {
    event.preventDefault()

    const ids = formUrl.split('/')

    fetch(raw)
      .then(r => r.text())
      .then(text => {
        http.patch(`/problem/${ids[0]}/cluster/${ids[1]}/testcase/${ids[2]}`, { input: text }).then(() => {})
      })
  }

  return (
    <div className="m-12">
      <form onSubmit={send}>
        <input
          type="text"
          className="mr-8 w-[400px] border-4 border-red"
          placeholder="ona 3 zadnja broja (ostavi i /)"
          value={formUrl}
          onChange={e => {
            e.preventDefault()
            setFormUrl(e.target.value)
          }}
        />
        <button type="submit" className="border-4 border-green">
          SEND
        </button>
      </form>
    </div>
  )
}

export default Testcase
