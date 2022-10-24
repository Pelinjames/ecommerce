import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';

function App() {
        const [counter, setCounter] = useState(0);
        console.log(counter)
        
        let addCounter = () => {
            setCounter(counter + 1);
        };
    
        let minusCounter = () => {
            setCounter(counter-1);
            // if (minusCounter < 0) {
            //     return <null/>
            // }
            //  else{
            //       return <number />;
            // };
        };
    
  return (
    <div className="app">
            <ul className="title">
                <li className="good"><img src="images/logo.svg" alt="Sneakers" /></li>
                 <li className="good"><a href="/">Collections</a></li>
                 <li className="good"><a href="/">Men</a></li>
                 <li className="good"><a href="/">Women</a></li>
                 <li className="good"><a href="/">About</a></li>
                 <li className="good"><a href="/">Contact</a></li>
                 <li className="icon"><img src="images/cart.svg" alt="cart" /></li>
                 <li className="avatar"><img src="../../images/avatar.png" alt="shoe"/> </li>
            </ul>
            <div className="row row-cols-2">
                <div className="col_1">
                <img src="../../images/product1.jpg" alt="shoe" className="image" width="500" height="400"/>
                <div className="row row-cols-4">
                    <div className="col_3">
                        <img className="shoe" src="../../images/product2.jpg" alt="shoe" width="150"/>
                    </div>
                    <div className="col_3">
                        <img className="shoe" src="../../images/product3.jpg" alt="shoe"  width="150"/>
                    </div>
                    <div className="col_3">
                        <img className="shoe" src="../../images/product4.jpg" alt="shoe"  width="150"/>
                    </div>
                    <div className="col_3">
                        <img className="shoe" src="../../images/product5.jpg" alt="shoe"  width="150"/>
                    </div>
                </div>
                </div>
                <div className="col_2 description">
                    <h6 className="come">SNEAKER COMPANY</h6>
                    <h1 className="fall">Fall Limited Edition Sneakers</h1>
                    <p className="bad">This low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div className="flex">
                        <p className="price"> $125.00</p>
                        <p className="one">50%</p>
                    </div>
                        <p>$250.00</p>
                    <div className="flex button">
                        <button className="calculate" onClick={minusCounter}><img src="images/minus.svg" alt="minus" /></button>
                        <p className="number">{counter}</p>
                        <button className="calculate" onClick={addCounter}><img src="images/plus.svg" alt="plus" /></button>
                        <button className="cart"><img src="images/cart.svg" />Add to Cart</button>
                    </div>
                </div>
            </div>
    </div>
  );
  };

export default App;
