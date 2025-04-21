# React + Vite

# React Application -> Book with paginated

# search book by title using Binary Search

support both local (useState) and global (Redux toolkit)

# Routing Structure

/ -> Home page (Book list with search + pagination)
/book/:id -> Book dedails page

# home page Features

Fetch book form url:
Display books in a paginated format (10 per page).
add a search input to filter book by title

# Book Dedails page

use route params to fetch and display details book info (title, author, descripion).

use useEffect for API fetch and loading state with useState

# Redux Toolkit for Global State

create a bookSlice with:
books:
selectedBook
loading and error

use createAsync Thunk

#pagination Logic

Display Next prev button and current page

# Theme Toggle (use Context API)

# Component Breakdown

Navbar
BookList
BookCard - individual Book card
Pagination
SearchBar
BookDetails - show book info on /book/:id
