import MainPage from "./components/MainPage";
import DeckPage from "./components/DeckPage";
import { useState } from "react";

function App(){
    const [page, setPage] = useState('main');
    return(
        <>
            {page === 'main' ? <MainPage setPage={setPage}/> : ''}
            {page === 'deck' ? <DeckPage/> : ''}
        </>
    );
}

export default App;