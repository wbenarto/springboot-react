import './App.css';
import {getAllStudents, addNewStudent} from './client.js'
import {useState, useEffect} from 'react'

function App() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = getAllStudents()
        .then(res=>res.json())
        .then(data => setData(data))
        .catch(err=>{
            console.log(err.response)
            err.response.json().then(res => {
            console.log(res);
            })
        })
        console.log(data)

    }, [])

    console.log( "data on app here")
  return (
    <div className="App">
        <button >
            +
        </button>
      {data.map((e,i) => (
      <>
        <p>
            {e.name}
        </p>
      </>
      ))}
    </div>
  );
}

export default App;
