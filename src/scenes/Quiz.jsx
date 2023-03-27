import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  createTheme,
  useTheme,
  IconButton
} from "@mui/material";

import ReactPlayer from 'react-player';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import TypingText from "./TypingText";

const questions = [
  {
    id: 1,
    question: "What is your comfort level with risk?",
  },
  {
    id: 2,
    question: "What is your comfort level with change?",
  },
  {
    id: 3,
    question: "How easily do you see new opportunities?",
  },
  {
    id: 4,
    question: "How comfortable are you with a lack of clarity?",
  },
  {
    id: 5,
    question: "How comfortable are you with leaps of logic in a process?",
  },
  {
    id: 6,
    question: "How many variables can you comfortably manage in your head without writing them down?",
  },
];

const Quiz = () => {
  
  const theme = useTheme();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");

  const handleAnswer = (answer) => {
    answers[currentQuestionIndex] = answer;

    if (currentQuestionIndex === questions.length) {
      // last question, send email
      const emailBody = `
        Thank you for completing our quiz!
        
        Your answers:
        ${questions
          .map((question, i) => `${question.question}: ${answers[i]}`)
          .join("\n")}
      `;
      console.log("🚀 ~ file: Quiz.jsx:36 ~ handleAnswer ~ emailBody:", emailBody)
     
    } else {
      // go to next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     

    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box p="5rem">
      <Typography color="secondary" variant="h1" mb="2rem" fontFamily="Montserrat, sans-serif">Quiz</Typography>
      <Card sx={{padding:"2rem"}} >
        {currentQuestionIndex < questions.length ? (
          <Box>
          <Typography
          color="#fc6e08" variant="h4">One a scale of 1 to 10</Typography> 
          <Box justifyContent="center" ml="30%">
            <ReactPlayer
              url="https://media.istockphoto.com/id/1163430535/video/beautiful-young-african-american-woman-on-white-background-talking-and-smiling-to-camera.mp4?s=mp4-640x640-is&k=20&c=Tz0HehUAiPDvVtnaYoKtOIM7Ft1U8QxP2xpvQc3J21o="
              playing={true}
              loop={true}
              muted={true}
              controls={true}
            />
          </Box>
         <TypingText text={questions[currentQuestionIndex].question}/>   
            <Box>
              {[...Array(10)].map((_, i) => (
                <Button sx={{m:"1rem"}} size="large" variant="contained" 
                color="primary"
                style={{ backgroundColor: answers[currentQuestionIndex]-1===i ? "#fc6e08" : null }}
                key={i} onClick={() => handleAnswer(i + 1)}>
                  {i + 1}
                </Button>
              ))}
            </Box>
          </Box>
          
        ) : (
          <Box>
            <Typography  color="primary" variant="p">Enter your email to receive your results</Typography>
            
            <Box mt="10px">
              <TextField
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </Box>
              <Box mt="10px">
              <Button size="large" color="secondary" variant="contained" disabled={!email} onClick={() => handleAnswer()}>
                Send
              </Button>
            </Box>
          </Box>
        )}
        <Box display="flex" justifyContent="space-between">
          <IconButton>
            <ChevronLeft onClick={prevQuestion}/>
          </IconButton>
          <Box p={1}>
            {/* Your content here */}
          </Box>
          <IconButton>
            <ChevronRight  onClick={nextQuestion}/>
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
};
     
export default Quiz;
