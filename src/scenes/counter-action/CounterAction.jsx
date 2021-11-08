import './CounterAction.css'
export default function CounterAction(props){
    return (
        <div>
            <button onClick={props.increaseCount}>Increase Count</button>
            <button onClick={props.decreaseCount}>Decrease Count</button>
        </div>
    )
}