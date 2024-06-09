
import {useState, useEffect} from "react"
import './App.css'
import { fetchDataFormApi } from "./utils/api"



function App() {
  const [data , setData] = useState()
  useEffect(()=>{
    apiTesting()
  },[])

  const apiTesting = () => {
    fetchDataFormApi('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }
  return (
    <> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
