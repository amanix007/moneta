const cardDefaults = {
    lastReviewed: null,
    learnRating: 0,
};

const facts = [
  {
    question: "What's your favorite color?",
    answer: "green",    
  },
  {
    question: "Who is your daddy and what does he do?",
    answer: "I'm a cop you idiot!",
  }
];

export default facts.map(fact => ({ ...cardDefaults, fact }));
