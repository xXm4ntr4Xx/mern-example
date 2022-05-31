import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'


function App() {
  const [info,setInfo] = useState([]);

  

  const dataFetch = ()=>{ axios.get('http://localhost:3000')
    .then((response)=>{
      console.log(response.data.data)
      setInfo(response.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

    useEffect(()=>{
        dataFetch()
      },[])
  
      const postData = ()=>{
        axios.post('http://localhost:3000',{
          name:"Tommaso",
          age:34,
          body:"my name is Tommaso"
        }).then((response)=>{
          console.log(response)
        }).catch((error)=>{
          console.log(error)
        })
      }

      const deleteItem = (id)=>{
        axios.delete('http://localhost:3000',{
          data:{
            _id:id
          }
        })
        console.log(id,'client side')
        window.location.href='http://localhost:3001'
      }

  return (
    <div className="App">
      <h1>hello</h1>
      <ul>
      {info.map((item)=>{
        return (
          <>
            <li key={item._id}>{item.name}</li>
            <button onClick={()=>deleteItem(item._id)}>X</button>
          </>

        )
      })}
      </ul>

      <div>
        <button onClick={postData}>Post data</button>
      </div>
    </div>
  );
}

export default App;
