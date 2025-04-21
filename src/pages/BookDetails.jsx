import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://openlibrary.org/works/${id}.json`
        );
        setBook(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading)
    return (
      <Layout>
        <div>Loading book details...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );
  if (!book)
    return (
      <Layout>
        <div>Book not found</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="book-details">
        <div className="book-header">
          <h2>{book.title}</h2>
          {book.subtitle && <h3>{book.subtitle}</h3>}
          {book.covers?.[0] && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
              alt={`Cover of ${book.title}`}
              className="book-cover"
            />
          )}
        </div>

        <div className="book-info">
          {book.description && (
            <div className="description">
              <h4>Description</h4>
              <p>
                {typeof book.description === "string"
                  ? book.description
                  : book.description.value}
              </p>
            </div>
          )}

          {book.authors && (
            <div className="authors">
              <h4>Authors</h4>
              <ul>
                {book.authors.map((author) => (
                  <li key={author.author.key}>
                    <a
                      href={`https://openlibrary.org${author.author.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author.author.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {book.first_publish_date && (
            <div className="publish-date">
              <h4>First Published</h4>
              <p>{book.first_publish_date}</p>
            </div>
          )}

          {book.subjects && (
            <div className="subjects">
              <h4>Subjects</h4>
              <div className="subject-tags">
                {book.subjects.map((subject, index) => (
                  <span key={index} className="tag">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BookDetails;
