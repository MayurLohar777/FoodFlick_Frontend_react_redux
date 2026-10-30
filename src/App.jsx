
import { Router } from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
