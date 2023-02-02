import React,{useState} from 'react'
import './App.css'
import cardback from './assets/bg-card-back.png';
import cardFront from './assets/bg-card-front.png';
import complete from './assets/icon-complete.svg'

const App = () => {
  const [value,setValue]=useState({name: '', num: '', num1: '', num2: '', num3: ''})
  const [error,setError] = useState([])
  const {name,num,num1,num2,num3} = value
  const [success, setSuccess] = useState(false);
  const formHandler = (event) =>{
    event.preventDefault();
     if(!name && name.length<4 ) setError((prevValue) => ([...prevValue, "name"]));
     if(!num && num.length<5 ) setError((prevValue) => ([...prevValue, "num"]));
    if (num1.length !== 2) {
      setError((value) => ([...value, "num1"]));
    }
     if(!num2 && num2.length<4 ) setError((prevValue) => ([...prevValue, "num2"]));
    if(!num3 && num3.length<3 ) setError((prevValue) => ([...prevValue, "num3"]));    
    if (error.length === 0 && num1.length === 2) {
      setSuccess(true);
    }
  }
  const changeHandler =(e)=>{
    if (e.target.name === "name") {
      setError(values => {
        return values.filter(value => value!==e.target.name);
      })
    }
    if (e.target.name === "num") {
      setError(values => {
        return values.filter(value => value!==e.target.name);
      })
    }
    if (e.target.name === "num1") {
      setError(values => {
        return values.filter(value => value!==e.target.name);
      })
    }
    if (e.target.name === "num2") {
      setError(values => {
        return values.filter(value => value!==e.target.name);
      })
    }
    if (e.target.name === "num3") {
      setError(values => {
        return values.filter(value => value!==e.target.name);
      })
    }
    setValue({...value, [e.target.name]: e.target.value});
  }
   
  return (
    <div class="first-div">
      <div class="second-div">
        <div>
          <img src={cardFront} alt="card" />
          <div class="card-details">
            <div class="circle"></div>
            <span class="card-num">4353 7879 6454 8997</span>
            <span class="name">FILICIA LEIRE<span>09/26</span> </span>
          </div>
        </div>
        <div>
          <img src={cardback} alt="card" />
        </div>
      </div>

      <div class="third-div">
        {!success ? <form class="form" onSubmit={formHandler} >
          <label>CARDHOLDER NAME</label><br />
          <input class="input-gap input radius" type="text" name='name'  value={name} onChange={changeHandler}/>
          {error.includes("name") && <div style={{color:"red"}}>"Name is required"</div>}
          <label>CARD NUMBER</label>
          <input class="input-gap input radius" type="number" name='num' value={num} onChange={changeHandler} />
          {error.includes("num") && "Num is required"}
          <div>
            <label>EXP.DATE [MM/YY] CVC</label>
            <div class="fourth-div">
              <input style={{width: '50px'}} class="first radius" type="number" name='num1' value={num1} onChange={changeHandler} />
              <input style={{width: '50px'}} class="second radius" type="number" name='num2' value={num2} onChange={changeHandler}/>
              <input class="third radius" type="number" value={num3} name='num3' onChange={changeHandler}/>
            </div>
            {(error.includes("num1") || error.includes("num2") || error.includes("num3")) && "date is required"}
          </div>
          <button class="radius button">Confirm</button>
        </form> : <div>
          <img style={{display: 'flex', justifyContent: 'center', transform: 'translateX(50%)'}} src={complete} alt={complete}/>
          <h1>Thank you</h1>
          </div>}
      </div>
    </div>
  )
}

export default App