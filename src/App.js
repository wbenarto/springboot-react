import './App.css';
import {getAllStudents} from './client.js'
import {useState, useEffect} from 'react'

function App() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = getAllStudents().then(res=>res.json()).then(data => setData(data))
        console.log(data)

    }, [])

    console.log( "data on app here")
  return (
    <div className="App">
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
