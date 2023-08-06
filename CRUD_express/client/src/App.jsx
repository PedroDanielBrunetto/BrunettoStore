import Cadaster from "./components/Cadaster"
import Home from "./components/Home"
import Jogos from "./components/Jogos"
import Navbar from "./components/Navbar"
import { useState, useEffect } from 'react';
import Axios from "axios"

export default function App() {
  const [page, setPage] = useState('Home');
  const [list, setList] = useState();

  console.log(list)

  const handleNavClick = (pageName) => {
    setPage(pageName);
  };

  useEffect(() =>{
    Axios.get("http://localhost:3001/getCards").then((response)=>{
      setList(response.data);
    });
  }, []);

  return (
    <main className="flex">
      <section className="min-h-screen w-2/4 flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold border-4 border-red-700 p-4 rounded-xl">Brunetto's Store</h1>
      </section>
      <section className="min-h-screen w-2/4 flex flex-col bg-red-700">
        <nav>
          <Navbar handleNavClick={handleNavClick} />
        </nav>
        <div className="min-h-screen flex flex-col justify-center items-center gap-4">
          {page === 'Home' ? <Home /> : page === 'Cadastro' ? <Cadaster /> : 
          typeof list !== "undefined" && list.map((value) => {
            return  <Jogos key={value.id} listcard={list} setListCard={setList} id={value.idgames} name={value.name} cost={value.cost} category={value.category}/>
          })
          }
        </div>
      </section>
    </main>
  )
}
