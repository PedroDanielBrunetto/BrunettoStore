export default function Navbar({ handleNavClick }){
  return(
    <header className="bg-red-700">
      <ul className="flex justify-center gap-40 p-4">
        <li className="text-white text-lg font-thin uppercase"><a href="#Home" onClick={() => handleNavClick('Home')}>Home</a></li>
        <li className="text-white text-lg font-thin uppercase"><a href="#Cadastro" onClick={() => handleNavClick('Cadastro')}>Cadastrar</a></li>
        <li className="text-white text-lg font-thin uppercase"><a href="#Jogos" onClick={() => handleNavClick('Jogos')}>Jogos</a></li>
      </ul>
    </header>
  )
}
