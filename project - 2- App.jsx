import React from 'react';
import Home from './components/Home';
import Tutorials from './components/Tutorials';
import Projects from './components/Projects';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import InternshipForm from './components/InternshipForm';
import OfferLetterForm from './components/OfferLetterForm';

function App() {
  return (
    <div>
      <Home />
      <SignupForm />
      <LoginForm />
      <Tutorials />
      <Projects />
      <InternshipForm />
      <OfferLetterForm />
    </div>
  );
}

export default App;
