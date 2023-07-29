import { useState } from 'react';
import './App.css';
import ModalComponent from './components/ModalComponent';

function App() {
  const [open,setModal] = useState()
  return (
    <>
    <button onClick={(e)=>setModal(true)}>Open Modal</button>
    <ModalComponent
      isModalOpen={open}
      setModal={setModal}
      header ={"Open Modal to Test Modal"}
      content={
        <></>
      }

    />
    </>
  );
}

export default App;
