import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home/index.tsx'
import { UpdateName } from './UpdateName/index.tsx'
import { StatefulForm } from './StatefulForm/index.tsx'
import { AddToCart } from './AddToCart/index.tsx'
import { FormStatus } from './FormStatus/index.tsx'
import { MessageWithOptimistic } from './MessageWithOptimistic/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/name/update' element={<UpdateName />} />
      <Route path='/statefull' element={<StatefulForm />} />
      <Route path='/add-to-cart' element={<AddToCart />} />
      <Route path='/form-state' element={<FormStatus />} />
      <Route path='/optimistic' element={<MessageWithOptimistic />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
