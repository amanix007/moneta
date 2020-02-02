import Card from '../components/Card';

import cardsToReview from '../mock-data/cards';

function Home() { 
  // track if there are still cards to be review. show next card until they are all reviewed
  return (
    <>
      <div>Welcome to Moneta.js!</div>
      <Card
        front={"Who is your daddy and what does he do?"}
        back={"Ahnuld"}
      />
    </>
  );
}

export default Home;
