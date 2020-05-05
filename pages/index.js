import React, {
  useState,
} from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { NEW, LEARNING } from '../constants/card';

import deck from '../mock-data/deck';

const Home = ({ deck }) => { 
  const cardsToReviewFilter = ({ status }) => status === NEW || status === LEARNING;
  const cardsToReview = deck.filter(cardsToReviewFilter);

  const [deckInReview, setDeckRatings] = useState(cardsToReview);
  const [ currentCard ] = deckInReview; // Just grab first card

  const handleRating = rating => {
    const ratedCard = {
      ...currentCard,
      status: rating,
    };

    const deckWithRatedCard = [
      ...deckInReview.slice(1),
      ratedCard,
    ];
      
    setDeckRatings(deckWithRatedCard.filter(cardsToReviewFilter));
  }

  const renderCurrentCard = () => {
    if (deckInReview.length === 0) {
      return <h2>You have nothing to review right now.</h2>;
    }
    console.log({ currentCard });

    return (
      <Card
        {...currentCard}
        onRating={handleRating}
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

Home.getInitialProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  // return {
  //   shows: data.map(entry => entry.show)
  // };
  console.log({ deck })

  return {
    deck,
  }
};

export default Home;
