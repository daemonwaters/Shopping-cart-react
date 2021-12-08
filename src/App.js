import './App.css';
import {data} from './Data'
import {FaShoppingCart} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Card from './Card';

function App() {

  const [cards,setCards] = useState([])
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    let totalPrice = cards.reduce((sum,item)=>{
      sum = sum + item.price * item.quantity
      return sum
    },0)
    setTotal(totalPrice)
  },[cards])


 
  return (
    <div className="wrapper">
      <div className="grid">
        {data.map((item,index)=>(
          <div key={index} className="grid-item">
              <div className="img-container">
                <img src={item.pic} alt={`pic-${index}`}/>
              </div>
              <div className="info">
                <h2>
                  {item.h2}
                </h2>
                <p className="price">
                  ${item.price}
                </p>
                <p className="description">
                  {item.description}
                </p>
                <button onClick={()=> setCards([...cards,{
                  img:item.pic,
                  title:item.h2,
                  price:item.price,
                  quantity:1
                }])}>
                  <FaShoppingCart/>
                  Add
              </button>
              </div>
          </div>
        ))}
      </div>
      <div className="cart">
         <div className="head">
            <h3>your shop List</h3>
            <h3>
              items:{cards.length}
             </h3>
            <h3>
              Total:{total}
            </h3>
         </div>
          <div className="items">
                {cards.map((card,index)=>{
                  return (
                    <Card card={card} cards={cards} setCards={setCards} quantity={card.quantity} img={card.img} price={card.price} index={index} key={index} title={card.title}/>
                  )
                })}
          </div>
      </div>
    </div>
  );
}
export default App;
