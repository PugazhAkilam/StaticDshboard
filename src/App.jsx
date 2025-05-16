import StaticRouter from "./routes/Routes"
import { ThemeContextProvider } from "./theme/ThemeContext"

function App() {
  

  return (
    <>
  <ThemeContextProvider>
          <StaticRouter />

  </ThemeContextProvider>
   
    
    </>
  )
}

export default App
