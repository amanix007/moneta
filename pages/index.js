import Layout from '../components/Layout';
import Card from '../components/Card';

import cardsToReview from '../mock-data/deck';

function Home() { 
  // basic algorithm:
  // filter if a card.reviewOn < new Date();
  const now = Date.now();
  const cardsInReview = cardsToReview.filter(card => card.reviewOn === null || card.reviewOn < now);
  // set to cardsInReview
  // while cardsInReview.length > 0
  // render cardsInReview[0]

  const renderCurrentCard = () => {
    if (cardsInReview.length === 0) {
      return (
        <div>
          <h2>You have nothing to review right now.</h2>
        </div>
      )
    }

    // Just grab first card
    const [ currentCard ] = cardsInReview;

    const {
      fact: {
        question,
        answer,
      }
    } = currentCard;

    return (
      <Card
        front={question}
        back={answer}
      />
    )
  }

  
  return (
    <Layout>
      <h1>Test mode</h1>
      {renderCurrentCard()}
    </Layout>
  );
}

export default Home;
