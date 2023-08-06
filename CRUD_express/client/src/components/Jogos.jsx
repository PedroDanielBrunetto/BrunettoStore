import { useState } from "react";
import FormDialog from "./dialog/Dialog.jsx"

export default function Jogos(props){
  const [open, setOpen] = useState();

  const handleClickCard = () =>{
    setOpen(true)
  };
  return(
    <>
      <FormDialog open={open} setOpen={setOpen} name={props.name} cost={props.cost} category={props.category} listCard={props.listcard} setListCard={props.setListCard} id={props.id}/>
      <div className="w-48 bg-white rounded-lg flex flex-col gap-4 p-4 hover:bg-slate-300" onClick={() =>
      handleClickCard()}>
        <h1 className="text-center text-lg">
          {props.name}
        </h1>
        <div className="flex gap-4 justify-center">
          <h2 className="text-base text-center">R$ {props.cost}</h2>
          <h2 className="text-base text-center">{props.category}</h2>
        </div>
      </div>
    </>
  )
}