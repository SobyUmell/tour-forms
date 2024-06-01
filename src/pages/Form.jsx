import '../scss/Form.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sendData = () => {
    

    if (name == '' && email == '') {
      setError("Поля пустые!");
      return;
    }
    if (name == '') {
      setError("Не указано ФИО!");
      return;
    }
    if (email == '') {
      setError("Не указана электронная почта!");
      return;
    }

    setError('');

    axios.post('https://tour-form-production.up.railway.app/api/form', {
      name,
      email,
    })
    .then((res) => {
      navigate('/thx');
    })
    .catch((err) => {
      setError("Что-то пошло не так!")
    })
    

    
    
  }

  return (
    <div className="Form">
      <div className="content">
        <div className="logo">
          <div>tour.</div>
        </div>
        <main>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder='ФИО' type="text" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email"/>
          <div className="btnbar">
            <button onClick={sendData}>Зарегистрироваться</button>
            <span>{error}</span>
          </div>

        </main>
      </div>
    </div>
  )
}

export default Form;