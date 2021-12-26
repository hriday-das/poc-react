
import { useState } from 'react';
import axios from "axios";
import { useSessionStorageString } from 'react-use-window-sessionstorage';



const Login = (props) => {
  // const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');



  const defaultValue = '';
  const [number,  setNumber] = useState('');
  const [value, setValue, loading] = useSessionStorageString('stringValue', defaultValue);
 // const [value2, setValue2, loading2] = useSessionStorageString('stringValue', defaultValue);





  // handle button click of login form
  const handleLogin = () => {

    axios.post("http://localhost:3007/api/login", {
      number: number,
      password: password
    }).then((response) => {

      props.history.push('/Dashboard');
    });

  };


  return (
    <div>
      {!loading && (
        <div>
          
          Login<br /><br />
          <div>
            Number<br />
           
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value); }}
              onKeyPress={e => e.key === 'Enter' && setValue(number)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            Password<br />
            <input type="password" onChange={(e) => { setPassword(e.target.value); }} />
          </div>
          <br />
          <button onClick={() => setValue(number)}>Login</button>
          <button onClick={handleLogin}
          >Login</button>
          <div>
            <strong>WELCOME:</strong> {value}
          </div>
        </div>)}


     
    </div>
  );
}




export default Login;