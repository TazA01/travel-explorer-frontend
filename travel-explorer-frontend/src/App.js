import './styles/App.css';
import './styles/UserForm.css';
import items from './dummydata';
import UserForm from './components/UserForm';
import { useState, useEffect } from 'react';



function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);


  return (
    <div>
      <h1>Travel Explorer</h1>
      <h2>{message}</h2>
      {/* to render components */}
      <UserForm />

    </div>

  );
}

export default App;
