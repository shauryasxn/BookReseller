import { Link } from 'react-router-dom';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <div key={item._id} className="card">
          <BookSingleCard book={item} />
        </div>
      ))}
    </div>
  );
};

export default BooksCard;