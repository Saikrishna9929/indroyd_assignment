import React, { useState } from 'react';
import "./index.css"

const sampleQuestions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome', 'Berlin'], answer: 'Paris' },
  { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Earth', 'Jupiter', 'Venus'], answer: 'Mars' },
  { question: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Shark', 'Giraffe'], answer: 'Blue Whale' },
  { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Homer', 'Plato', 'Tolstoy'], answer: 'Shakespeare' },
  { question: 'What is the chemical symbol for water?', options: ['HO', 'O2', 'H2O', 'CO2'], answer: 'H2O' }
];

const MobilePlayerScreen = () => {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send the answer to the main screen or backend
    // Here we simulate an answer submission
    setMessage(`Your answer has been submitted!`);
  };

  return (
    <div className = "player-screen">
      <h1>Player Screen</h1>
      
      
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <br />
        <h2>Current Question:</h2>
        <p>{sampleQuestions[currentQuestionIndex].question}</p>
        <select value={answer} onChange={(e) => setAnswer(e.target.value)} required>
          <option value="">Select an Answer</option>
          <option value={sampleQuestions[currentQuestionIndex].options[0]}  >A : {sampleQuestions[currentQuestionIndex].options[0]} </option>
          <option value = {sampleQuestions[0].options[1]}  >B : {sampleQuestions[0].options[1]}</option>
          <option value ={sampleQuestions[0].options[2]} >C : {sampleQuestions[0].options[2]}</option>
          <option value =  {sampleQuestions[0].options[3]} >D : {sampleQuestions[0].options[3]} </option>
        </select>
        <br />
        <button type="submit">Submit Answer</button>
      </form>
      <button onClick={ ()=>{
        if (currentQuestionIndex < sampleQuestions.length-1){
          setCurrentQuestionIndex( currentQuestionIndex + 1)
        }
        }}>Next Question</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MobilePlayerScreen;
