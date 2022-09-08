import React from 'react';
import Navbar from './components/Navbar';
import Todos from './components/todo/Todos';

function App() {
  return (
    <div className="App">
      <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
          <Navbar/>
            

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

                <Todos/>

                
            </div>
        </div>
    </div>
  );
}

export default App;
