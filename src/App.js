import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ({state, addPost}) => {
  return (
    <BrowserRouter> 
      <div className="appWrapper" >
        <Header />
        <div className='wpapper' >
          <Navbar />
            <Routes>
              <Route path="/profile"  element={<Profile posts={state.profilePage} addPost={addPost} />} /> 
              <Route path="/dialogs" 
                     element={<Dialogs dialogs={state.profilePage} messages={state.dialogsPage} />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;