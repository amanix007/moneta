import React, {
  useState,
} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Card from '../components/Card';

import deck from '../mock-data/deck';

function Home() { 
  const now = new Date();

  const [deckInReview, setDeckRatings] = useState(deck.filter(card => card.reviewOn < now));

  const renderCurrentCard = () => {
    if (deckInReview.length === 0) {
      return <h2>You have nothing to review right now.</h2>;
    }

    // Just grab first card
    const [ currentCard ] = deckInReview;

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
        onRating={setDeckRatings}
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
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};


export default Home;
