import './Login.css';

export default function(props){

    let submitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        let data = {};

        data.email = e.target[0].value;
        data.pass = e.target[1].value;

        let urlRegister = 'https://auth404.herokuapp.com/api/auth/register';
        let urlLogin = 'https://auth404.herokuapp.com/api/auth/login';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }

        if(e.nativeEvent.submitter.id =="register"){
            alert('register');
            fetch(urlRegister, options).then(result=>result.json().then(output=>{
                if(output.status == 'success'){
                    alert('Congrats! You registered as well! Please login!');
                }else{
                    alert(output.message);
                }
            }));
        }else if(e.nativeEvent.submitter.id =="login"){
            alert('login');
            fetch(urlLogin, options).then(result=>result.json().then(output=> {
                if(output.status == 'success'){
                    localStorage.setItem('token', output.token);
                    props.setIsLoggedIn(true);
                }else{
                    localStorage.removeItem('token');
                }
            }));
        }
    }

    return(
        <div className="wrapper">
            <form onSubmit = {submitHandler}>
                <input type = "email" />
                <input type = "password" />
                <input id = "register" type = "submit" value = "Register" />
                <input id = "login" type = "submit" value = "Login" />
            </form>
        </div>
    )
}