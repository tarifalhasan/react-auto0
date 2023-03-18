import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import LogoutButton from './components/logout';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Hero />
      <Features />
      <Services />
      <Team />
      <Blog />
      <Testimonial />
      <Contact />
    </Layout>
  );
}

export default App;
