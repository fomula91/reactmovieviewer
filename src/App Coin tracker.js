import {useEffect, useState} from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [text, setText] = useState(1);
  const [cost, setCost] = useState(1);
  const onChange = (event) => {
    
    setText(event.target.value)
  }
  const onHandle = (event) => {
    setCost(event.target.value)
    console.log(event.target.value)
  }
  useEffect(()=>{
      fetch('https://api.coinpaprika.com/v1/tickers')
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setCoins(json);})
  }, [])
 
  return ( 
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      

      {loading ? <strong>Loading...</strong> 
      : <select onChange={onHandle}>
        {coins.map((coin) =>
         <option 
            value={coin.quotes.USD.price}
            >
           {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} mycoin: {text / coin.quotes.USD.price}
         </option>
          )}

      </select>}
      <hr/>
      <input 
      onChange={onChange} 
      value = {text} 
      type="number"
      ></input>
      <p>{text/cost}</p>
    </div>
  );
}

export default App;
