import { useState } from "react"
import Axios from "axios";

export default function Cadaster(){
  const [values, setValues] = useState()
  
  const handleChangesValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then(() => { //.then pq estamos trabalhando com promisses
      console.log(response);
    });
  }
  return(
    <div className="flex flex-col gap-6 rounded-lg bg-white p-6">
      <h1>Cadastrar novo jogo:</h1>
      <input type="text" name="name" placeholder="Nome do jogo:" className="border-2 rounded-lg border-red-700 p-2" onChange={handleChangesValues}/>
      <input type="text" name="cost" placeholder="Valor do jogo:" className="border-2 rounded-lg border-red-700 p-2" onChange={handleChangesValues}/>
      <input type="text" name="category" placeholder="Categoria do jogo:" className="border-2 rounded-lg border-red-700 p-2" onChange={handleChangesValues}/>
      <button className="rounded-full bg-red-700 text-white hover:bg-black p-2" onClick={() => handleClickButton()}>
        Cadastrar
      </button>
    </div>
  )
}