import { useParams } from 'react-router-dom';

const CardDetailsPage = () => {
  const params = useParams();
  return (
    <main className="app-card-details">
      <h1>
        Card Details Page
        {' '}
        {params.cardId}
      </h1>
    </main>
  );
};

export default CardDetailsPage;
