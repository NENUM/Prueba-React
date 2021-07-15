import React, {useState} from 'react';

const CounterApp = () =>{

    const [count, setCount] = useState(0);
    const [value, setJoke] = useState('')
    const [img, setImg] = useState([]);

    const addHandle = ()=>{
        setCount(count+1)
    }

    const restHandle = () =>{
        setCount(count-1)
    }

    const resetHandle = () =>{
        setCount(count-count)
    }

    const getJoke = async() =>{

        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const {value} = await res.json();
        setJoke(value)
    }

    const getImage = async()=>{

        const res = await fetch('https://source.unsplash.com/random')
        const img = res.url;
        setImg(imgs=>[...imgs, img])
    }

    return (
        <>
            <h2>Contador</h2>
            <button onClick={addHandle}>+</button>
            <button onClick={restHandle}>-</button>
            <button onClick={resetHandle}>reset</button>
            <p>{count}</p>
            <hr></hr>
            <h2>Chistes</h2>
            <button onClick={getJoke}>Obtener Chiste</button>
            <p>{value}</p>
            <hr></hr>
            <h2>Imagenes</h2>
            <button onClick={getImage}>Obtener imagen</button>
            <br></br>
            {
                img.map(url=>{
                    return (<img src={url}
                            key={url}
                            alt="imagen"
                            width="300"
                            height="300"
                    ></img>)
                })
            }
        </>
    )
}

export default CounterApp;