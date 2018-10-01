import React, { Component } from 'react';
import Score from './Score';
import Equation from './Equation';
import AnswerButton from './AnswerButton';

class Game extends Component {
    state = {
        value1: 0,
        value2: 0,
        value3: 0,
        proposedAnswer: 0,
        numQuestions: 0,
        numCorrect: 0
    };
    componentDidMount() {
        this.generateEquation();
    }
    generateEquation() {
        const value1 = Math.floor(Math.random() * 10);
        const value2 = Math.floor(Math.random() * 10);
        const value3 = Math.floor(Math.random() * 10);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        this.setState((prevState) => ({
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: proposedAnswer,
            answer: value1 + value2 + value3 === proposedAnswer
        }));
    }
    checkAnswer = (answer) => {
        console.log('Answer', this.state.answer);
        if (answer === this.state.answer) this.addScore();
        this.addQuestion();
    };
    addScore() {
        this.setState((prevState) => ({
            numCorrect: prevState.numCorrect += 1
        }));
    }
    addQuestion() {
        this.setState((prevState) => ({
            numQuestions: prevState.numQuestions += 1
        }));
        this.generateEquation();
    }
    render() {
        return (
            <div className="game container">
                <h2>Mental Math</h2>
                <Equation
                    value1={this.state.value1}
                    value2={this.state.value2}
                    value3={this.state.value3}
                    answer={this.state.proposedAnswer}
                />
                <AnswerButton text='True' answer={true} checkAnswer={this.checkAnswer}/>
                <AnswerButton text='False' answer={false} checkAnswer={this.checkAnswer}/>
                <Score correct={this.state.numCorrect} questions={this.state.numQuestions}/>
            </div>
        );
    }
}

export default Game;
