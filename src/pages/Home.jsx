import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
function Home() {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Calculate pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <Layout>
        <div>Loading books...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="book-list">
        {currentBooks.map((book) => (
          <Link
            to={`/book/${book.key.split("/").pop()}`}
            key={book.key}
            className="book-card"
          >
            <h4>{book.title}</h4>
            {book.subtitle && <p>{book.subtitle}</p>}
            {book.author_name && <p>By: {book.author_name.join(", ")}</p>}
            {book.first_publish_year && (
              <p>Published: {book.first_publish_year}</p>
            )}
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover of ${book.title}`}
              />
            )}
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        totalPages={totalPages}
      />
    </Layout>
  );
}

export default Home;
