// src/components/pages/Dashboard/Questions.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { Card, Button, Form } from "react-bootstrap";

export default function Questions() {
  const { user } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [answerText, setAnswerText] = useState({});

  const API_URL = "http://localhost:5000/api/questions";

  // Fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(API_URL);
        setQuestions(res.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  // Submit answer (Admin only)
  const handleAnswer = async (id) => {
    try {
      const res = await axios.post(
        `${API_URL}/${id}/answer`,
        { answer: answerText[id] },
        {
          headers: user?.token
            ? { Authorization: `Bearer ${user.token}` }
            : {},
        }
      );
      setQuestions(
        questions.map((q) => (q._id === id ? res.data : q))
      );
      setAnswerText({ ...answerText, [id]: "" });
    } catch (err) {
      console.error("Error submitting answer:", err);
      alert("Failed to submit answer.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">❓ Customer Questions</h2>

      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        questions.map((q) => (
          <Card
            key={q._id}
            className="mb-3 p-3 bg-dark text-light shadow-lg border-0"
          >
            <h5>Q: {q.question}</h5>
            <p className="text-muted">
              Asked by: {q.askedBy} | {new Date(q.createdAt).toLocaleString()}
            </p>

            {q.answer ? (
              <p className="text-success">✅ Answer: {q.answer}</p>
            ) : user?.role === "admin" ? (
              <>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Type your answer..."
                  className="bg-secondary text-light mb-2"
                  value={answerText[q._id] || ""}
                  onChange={(e) =>
                    setAnswerText({
                      ...answerText,
                      [q._id]: e.target.value,
                    })
                  }
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleAnswer(q._id)}
                >
                  Submit Answer
                </Button>
              </>
            ) : (
              <p className="text-warning">⏳ Awaiting admin response...</p>
            )}
          </Card>
        ))
      )}
    </div>
  );
}
