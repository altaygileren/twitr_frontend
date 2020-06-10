import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import Step1 from './signin.components/signin.step1';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Title from '../../utils/Title';
import { loginUser } from '../../utils/';

const Signin = () => {

  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submitLogin = async (e) => {
    const info = {
      username,
      password
    }
    const loginSubmit = await loginUser(info);
    setUser(loginSubmit.data.user)
    await history.push('/')
  }

  return (
    <div>
      <Title title={'Log in'} />
      <Step1
        user={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Button variant="primary" onClick={submitLogin}>Sign in</Button>
    </div>
  )
}

export default Signin;