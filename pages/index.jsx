import { useState } from "react"

export default function home() {
    const [textInput, setTextInput] = useState("")
    const [arrayTarefas, setArrayTarefas] = useState([])
    const [arrayTarefasConcluidas, setTarefasConcluidas] = useState([])
    
    function adicionar(){
        //alert("Adicionou um item")
        let textSemEspaco = textInput.trim()
        if(textSemEspaco.length > 0) {
            setArrayTarefas(arrayTarefas => [... arrayTarefas, textInput])
            setTextInput("")
        }
    }

    function excluirItem(index){
        setArrayTarefas(arrayTarefas.filter((item, i) => index != i))

    }

    function concluirTarefa (index){
        setTarefasConcluidas(arrayTarefas.filter((item, i) => index === i))
        excluirItem(index)
    }

    return (
        <>
        <h1>Organizador de tarefas</h1>

        {/** Listatagem das taferas */}
        <div>
            {arrayTarefas.map((item, index) =><li key={index}>{item} 
            <span onClick={ ()=> concluirTarefa(index)}>o</span>
            <span onClick={()=> excluirItem(index)}>x</span>
            </li>)}
        </div>
        
        {/*Adição de novas tarefas*/}
        <div>
            <input value={textInput} onInput={(e) => {setTextInput(e.target.value)}} />
            <button onClick={adicionar}>+</button>
        </div>
        
        {/*Listagem de tarefas concluidas*/}
        <div>
        <div>
            {arrayTarefasConcluidas.map((item, index) =><li key={index}>{item} 
            </li>)}
        </div>
        </div>

        </>
    )
}