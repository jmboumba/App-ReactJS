import logo from './logo.svg';
import './App.css';
import react , { Component, useState } from 'react' ;
import Header from './components/Header'
import Demo from './components/Demo';
import Fetch from './components/Fetch';
import { BrowserRouter as Router, Routes, Route, Link, Form, HashRouter} from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import Login from './components/Login';
import NewsListHook from './components/NewsListHook';
import Counter from './components/Counter';
import Listitem from './components/Listeitem';
import Liste from './components/List';
import { ContextHookA } from './components/ContextHookA';
import { ContextHookB } from './components/ContextHookB';
import React from 'react';
import ContextGeneral from './components/ContextGeneral';
import Weather from './components/Weather';


export const LangageContext = React.createContext('fr')
function App() {
  
  return(
    <HashRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path="/"  element={<Fetch />} />
            <Route path="/fetch"  element={<Fetch />} />
            <Route path="/demo"  element={<Demo />} />
            <Route path='/newsfeed' element={<NewsFeed/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/newslisthook' element={<NewsListHook />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/list' element={<Liste />} />
            <Route path='/contextgeneral' element={<ContextGeneral />} />
            <Route path='/weather' element={<Weather />} />
          </Routes>
      </div>
    </HashRouter>
    
  );
  }

export default App;