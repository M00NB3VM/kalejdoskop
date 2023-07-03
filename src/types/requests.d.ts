interface Statistics {
  id: number;
  timestamp: string;
  answerId: number;
  answer: {
    id: number;
    answer: string;
    questionId: number;
    question: {
      id: number;
      question: string;
      character: string;
    };
  };
}

export default Statistics;
