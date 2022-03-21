import Logo from "../assets/logo.png";

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
                <div className="flash-card">
                    <div className="unopened-card">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="card-front">Gatos são ___</div>
                    <div className="card-back">Felinos</div>
                    <div className="answered-card">Pergunta 1 (respondida)</div>
                </div>
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
        <>
            {props.status === 'unoped' ? 
                <div className="flash-card">
                    <div className="unopened-card">Pergunta 1</div>
                    <div className="card-front hidden">Gatos são ___</div>
                    <div className="card-back hidden">Felinos</div>
                    <div className="answered-card hidden">Pergunta 1 (respondida)</div>
                </div>
            : ''}
            {props.status === 'front' ? 
                <div className="flash-card">
                    <div className="unopened-card hidden">Pergunta 1</div>
                    <div className="card-front">Gatos são ___</div>
                    <div className="card-back hidden">Felinos</div>
                    <div className="answered-card hidden">Pergunta 1 (respondida)</div>
                </div>
            : ''}
            {props.status === 'back' ? 
                <div className="flash-card">
                    <div className="unopened-card hidden">Pergunta 1</div>
                    <div className="card-front hidden">Gatos são ___</div>
                    <div className="card-back">Felinos</div>
                    <div className="answered-card hidden">Pergunta 1 (respondida)</div>
                </div>
            : ''}
            {props.status === 'answered' ? 
                <div className="flash-card">
                    <div className="unopened-card hidden">Pergunta 1</div>
                    <div className="card-front hidden">Gatos são ___</div>
                    <div className="card-back hidden">Felinos</div>
                    <div className="answered-card">Pergunta 1 (respondida)</div>
                </div>
            : ''}
        </>
    )
}

export default DeckPage;