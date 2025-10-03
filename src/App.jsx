import { Routes, Route } from 'react-router-dom'

function Home() {
  return <h1 style={{ color: 'red' }}>Home Page Works!</h1>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
