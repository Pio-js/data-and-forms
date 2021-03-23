import './Card.css';

export default function(props){
    return (
        <div className="flag">
            <img src = {props.imgSrc}/>
            <h3>{props.name}</h3>
        </div>
    );
}