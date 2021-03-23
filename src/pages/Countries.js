import {useState, useEffect} from 'react';
import Card from '../Card';
import '../App.css';


function Countries() {

  const [countryList, setCountryList] = useState([]);

  let url = 'https://restcountries.eu/rest/v2/all';
  let options = {
    method:"GET"
    //timeDiff:'Id',
    //component: item => <li>{item.name}</li>,
    //log:true
  };

  //we use this to fetch the data just ones. But see below how!!!
  useEffect(() => {

    //axios({url, ...options}).then(res => console.log(res.data));

    //kyc(url, options).then(res => console.log('kyc', res));

    fetch(url, options).then(result =>{
      console.log(result);
      result.json().then(output => {
        console.log(output);
        //code goes here
        setCountryList(output.map(item => <Card imgSrc = {item.flag} name = {item.name}/>));
      })
    });
  }, []);//this array must be empty, or the component will be re-rendered constantly.

  return (
    <div className="container">
      <h1>Flags of the World</h1>
      <div className="App">
          {countryList}
      </div>
    </div>
  );
}

export default Countries;