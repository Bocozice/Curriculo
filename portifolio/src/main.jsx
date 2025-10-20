import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import AboutMe from './AboutMe.jsx';
import Header from './Header.jsx';
import Name from './Name.jsx';
import Academic from './Academic.jsx';
import Habilities from './Habilities.jsx';
import Project from './Project.jsx';
import Contacts from './Contacts.jsx';
import TopButton from './TopButton.jsx';
import ThemeButton from './ThemeButton.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Name />
    <AboutMe />
    <Academic />
    <Habilities /> 
    <Project /> 
    <Contacts />
  <TopButton />
  <ThemeButton />
  </StrictMode>,
)
