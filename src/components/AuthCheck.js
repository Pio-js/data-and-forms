import Login from '../pages/Login';

export default function (props) {
    let output;
    if (props.isLoggedIn == true) {
        output = props.children;
    } else {
        output = <Login setIsLoggedIn = {props.setIsLoggedIn} />
    }
    return output;
}