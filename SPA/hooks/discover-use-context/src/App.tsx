import './App.css'
import { AfficherContextPlayer } from './features/AfficherContextPlayer'
import { AfficherPlayerBis } from './features/AfficherPlayerBis'
import { AvecContext } from './features/AvecContext'
import { ChangeContext } from './features/ChangeContext'

function App() {
  return (
    <>
      <AvecContext>
        <AfficherContextPlayer></AfficherContextPlayer>
        <AfficherPlayerBis></AfficherPlayerBis>
        <ChangeContext></ChangeContext>
      </AvecContext>
    </>
  )
}

export default App
