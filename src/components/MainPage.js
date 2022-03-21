import Logo from "../assets/logo.png";

function MainPage(props){
    return(
        <div className="main-container">
            <img src={Logo} alt="ZapRecall"/>
            <p>ZapRecall</p>
            <button onClick={()=>props.setPage('deck')}>Iniciar Recall!</button>
        </div>
    )
}

export default MainPage;