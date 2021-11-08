import Counter from '../counter/Counter';
import CounterAction from '../counter-action/CounterAction'
import { useState } from 'react';
import './CounterContainer.css'

export default function CounterContainer(){

    const [count, setCounter] = useState(0);
    const increaseCount =() => setCounter(count+1);
    const decreaseCount =() => {if(count>0)setCounter(count-1)};

    return (
        <section className="counter-container">
            <Counter count={count}/>
            <CounterAction increaseCount={increaseCount} decreaseCount={decreaseCount}/>
        </section>
    )
}