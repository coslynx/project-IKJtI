import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InteractiveElements = () => {
  const [pollData, setPollData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [contestData, setContestData] = useState([]);

  useEffect(() => {
    fetchPollData();
    fetchQuizData();
    fetchContestData();
  }, []);

  const fetchPollData = async () => {
    try {
      const response = await axios.get('api/polls');
      setPollData(response.data);
    } catch (error) {
      console.error('Error fetching poll data: ', error);
    }
  };

  const fetchQuizData = async () => {
    try {
      const response = await axios.get('api/quizzes');
      setQuizData(response.data);
    } catch (error) {
      console.error('Error fetching quiz data: ', error);
    }
  };

  const fetchContestData = async () => {
    try {
      const response = await axios.get('api/contests');
      setContestData(response.data);
    } catch (error) {
      console.error('Error fetching contest data: ', error);
    }
  };

  return (
    <div>
      <h2>Polls</h2>
      <ul>
        {pollData.map((poll) => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>

      <h2>Quizzes</h2>
      <ul>
        {quizData.map((quiz) => (
          <li key={quiz.id}>{quiz.question}</li>
        ))}
      </ul>

      <h2>Contests</h2>
      <ul>
        {contestData.map((contest) => (
          <li key={contest.id}>{contest.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveElements;