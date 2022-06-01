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
  //data added manually as an object as 2nd parameter of the post method
      const postData = ()=>{
        axios.post('http://localhost:3000',{
          name:"Kristofer",
          age:31,
          body:"my name is Kristofer"
        }).then((response)=>{
          console.log(response)
        }).catch((error)=>{
          console.log(error)
        })
      }
// delete element with the relative id
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
      <ul>
      {info.map((item,idx)=>{
        return (
          <div key={idx}>
            <li >User name:  {item.name}</li>
            <button onClick={()=>deleteItem(item._id)}>X</button>
          </div>

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
