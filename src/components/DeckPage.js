import Logo from "../assets/logo.png";
import Turn from "../assets/turn.png";

function DeckPage(){
    const deck = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes'
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        },
    ];

    deck.sort(comparador);

    return(
        <>
            <div className="deck-container">
                <header>
                    <img src={Logo} alt="ZapRecall"/>
                    <p>ZapRecall</p>
                </header>
                {deck.map((card, index) => <FlashCard question={card.question} answer={card.answer} questionNumber={index+1}/>)}
                <footer>X/X CONCLUÍDOS</footer>
            </div>
        </>
    );
}

function comparador() { 
	return Math.random() - 0.5; 
}

function FlashCard(props){
    return(
        <div className="flash-card">
            <div className="unopened-card">
                <p>Pergunta {props.questionNumber}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="card-front">
                <p>{props.question}</p>
                <img src={Turn} alt="ZapRecall"/>
            </div>
            <div className="card-back">
                <p>{props.answer}</p>
                <div className="buttons-container">
                    <button className="forgot">Não lembrei</button>
                    <button className="almost-forgot">Quase não lembrei</button>
                    <button className="remembered">Zap!</button>
                </div>
            </div>
            <div className="answered-card forgot">
                <p>{props.questionNumber}</p>
                <ion-icon name="close-circle"></ion-icon>
            </div>
            <div className="answered-card almost-forgot">
                <p>{props.questionNumber}</p>
                <ion-icon name="help-circle"></ion-icon>
            </div>
            <div className="answered-card remembered">
                <p>{props.questionNumber}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div> 
    );
}

export default DeckPage;