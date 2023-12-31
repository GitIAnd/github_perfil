import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setmateriaA] = useState(0)
    const [materiaB, setmateriaB] = useState(0)
    const [materiaC, setmateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            estadoAnterior

        return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;

        if (media > 7) {
            return(
                <p>Olá {nome}. Você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}. Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>{item}</li>
            ))}

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt (evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt (evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt (evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario