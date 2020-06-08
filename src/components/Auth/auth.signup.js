import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { registerUser } from '../../utils/index';
import Step1 from './signup.components/signup.step1';
import Step2 from './signup.components/signup.step2';
import { Row, Col, Button } from 'react-bootstrap';
import Progressbar from '../../utils/Progressbar';
import Errors from '../../utils/errors';
import { useHistory } from 'react-router-dom';

const Signup = () => {

  const { user, setUser } = useContext(UserContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);
  const history = useHistory();

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <Button block size="md" onClick={() => _prev()}>Previous</Button>
      )
    }
  }
  const nextButton = () => {
    if (currentStep === 1) {
      return (
        <Button block size="md" onClick={() => _next()}>Next</Button>
      )
    }
  }
  const submitButton = () => {
    if (currentStep === 2) {
      return (
        <Button block size="md" onClick={() => _submit()}>Submit</Button>
      )
    }
  }
  const _prev = (e) => {
    if (currentStep <= 1) {
      setCurrentStep(1);
      subtractProgress();
    } else {
      setCurrentStep(cs => cs - 1);
      subtractProgress();
    }
  }

  const addProgress = () => {
    setProgress(progress + 50);
  };
  const subtractProgress = () => {
    setProgress(progress - 50);
  }

  const _next = (e) => {
    if (password !== passwordMatch || !password) {
      alert('Sorry but your passwords do not match')
      return;
    }
    if (currentStep >= 1) {
      setCurrentStep(cs => cs + 1);
      addProgress()
    }
  }
  const _submit = async () => {
    let userReturn;
    await addProgress();
    const userInfo = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    }
    try {
      userReturn = await registerUser(userInfo);
      await setUser(userReturn.data.user);
      await history.push('/')
    } catch (err) {
      if (userReturn.status === 400) {
        setErr(userReturn.data.msg);
      }
    }
  }


  return (
    <div>
      <Progressbar progress={progress} />
      <Step1
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        passwordMatch={passwordMatch}
        setPasswordMatch={setPasswordMatch}
        currentStep={currentStep}
      />
      <Step2
        currentStep={currentStep}
        firstName={firstName}
        setFirstname={setFirstname}
        lastName={lastName}
        setLastname={setLastname}
      />
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          {previousButton()}
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          {currentStep !== 1 ? (<span>{submitButton()}</span>) : (<span>{nextButton()}</span>)}
        </Col>
      </Row>
      {
        err && <Errors message={err} />
      }
    </div>
  )
};

export default Signup;
