import { BrowserRouter } from "react-router-dom"
import Navbar from "./component/Navbar"
import { AuthContext } from "./contaxt/AuthContext"

const App = () => {

   const userName=localStorage.getItem("user")
  //converting sting into object 
  const users=JSON.parse(userName)
  
  return (
    //  2 Provider will provide the data 
    <AuthContext.Provider value={users}>

    <BrowserRouter>
      <Navbar />
    </BrowserRouter>

    </AuthContext.Provider>
  )
}

export default App
