import { useState } from "react"

export default function home() {
    const [textInput, setTextInput] = useState("")
    const [arrayTarefas, setTarefas] = useState(["primeiro"])
    const [arrayTarefasConcluidas, setTarefasConcluidas] = useState([""])
    
    function adicionar(){
        //alert("Adicionou um item")
        let textSemEspaco = textInput.trim()
        if(textSemEspaco.length > 0) {
            setTarefas(arrayTarefas => [... arrayTarefas, textInput])
            setTextInput("")
        }
    }

    return (
        <>
        <h1>Organizador de tarefas</h1>

        {/** Listatagem das taferas */}
        <div>
            {arrayTarefas.map((item, index) =><li key={index}>{item} 
            <span>o</span>
            <span>x</span>
            </li>)}
        </div>
        
        {/*Adição de novas tarefas*/}
        <div>
            <input value={textInput} onInput={(e) => {setTextInput(e.target.value)}} />
            <button onClick={adicionar}>+</button>
        </div>
        
        {/*Listagem de tarefas concluidas*/}
        <div>
            <li></li>
        </div>

        </>
    )
}