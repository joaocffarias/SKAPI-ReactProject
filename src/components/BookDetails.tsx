import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Book {
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://stephen-king-api.onrender.com/api/book/${id}`);
        setBook(response.data.data);
      } catch (err: any) {
        console.error('Erro ao carregar detalhes do livro:', err);

        if (err.response) {
          if (err.response.status === 404) {
            setError('Por favor, verifique o nome do livro e tente novamente.');
          } 
            else {
            setError('Erro ao carregar os detalhes do livro.');
          }
        } 
         else {
          setError('Ocorreu um erro inesperado. Verifique as informções e tente novamente.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Nenhum detalhe disponível para este livro.</p>;
  }

  return (
    <div>
      <h1>{book.Title}</h1>
      <p><strong>Ano de Publicação:</strong> {book.Year}</p>
      <p><strong>Editora:</strong> {book.Publisher}</p>
      <p><strong>ISBN:</strong> {book.ISBN}</p>
      <p><strong>Páginas:</strong> {book.Pages}</p>
    </div>
  );
};

export default BookDetails;