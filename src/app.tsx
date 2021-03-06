import routes from './routes'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<span>loading...</span>}>{renderRoutes(routes)}</Suspense>
  </BrowserRouter>
)

export default App
