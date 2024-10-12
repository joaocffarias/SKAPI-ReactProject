import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Book {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
        setBooks(response.data.data);
      } catch (err: any) {
        console.error('Erro ao carregar a lista de livros:', err);
        setError('Não foi possível carregar a lista de livros.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (books.length === 0) {
    return <p>Nenhum livro encontrado.</p>;
  }

  return (
    <div>
      <h1>Livros de Stephen King</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.Title} ({book.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;