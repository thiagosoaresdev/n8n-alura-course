import { useState } from 'react'

export default function App() {
  const [cliques, setCliques] = useState(0)

  return (
    <main className="app">
      <span className="badge">n8n Alura Course</span>
      <h1>Hello World 👋</h1>
      <p>Frontend em React criado para os testes do curso de n8n.</p>
      <button onClick={() => setCliques(cliques + 1)}>
        Cliques: {cliques}
      </button>
    </main>
  )
}
