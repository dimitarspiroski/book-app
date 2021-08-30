import React, { Component } from "react";
import { storeBooks } from "./data";

const BookContext = React.createContext();

//Provider
class BookProvider extends Component {
  state = {
    books: [],
    detailBook: {},
    cart: [],
    modalOpen: false,
    modalBook: {},
    cartTotal: 0,
  };

  componentDidMount() {
    this.setBooks();
  }

  setBooks = () => {
    let tempBooks = [];
    storeBooks.forEach(book => {
      const singleBook = { ...book };
      tempBooks = [...tempBooks, singleBook];
    });
    this.setState(() => {
      return { books: tempBooks };
    });
  };

  getBook = id => {
    const book = this.state.books.find(book => book.id === id);
    return book;
  };

  handleDetail = id => {
    const book = this.getBook(id);
    this.setState(() => {
      return { detailBook: book };
    });
  };

  addToCart = id => {
    let tempBooks = [...this.state.books];
    const index = tempBooks.indexOf(this.getBook(id));
    const book = tempBooks[index];
    book.inCart = true;
    book.count = 1;
    const price = book.price;
    book.total = price;

    this.setState(
      () => {
        return { books: tempBooks, cart: [...this.state.cart, book] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const book = this.getBook(id);
    this.setState(() => {
      return { modalBook: book, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find(book => book.id === id);

    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];

    book.count = book.count + 1;
    book.total = book.count * book.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => this.addTotals()
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find(book => book.id === id);

    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];
    book.count = book.count - 1;
    if (book.count === 0) {
      this.removeBook(id);
    } else {
      book.total = book.count * book.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => this.addTotals()
      );
    }
  };

  removeBook = id => {
    let tempBooks = [...this.state.books];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(book => book.id !== id);
    const index = tempBooks.indexOf(this.getBook(id));
    let removedBook = tempBooks[index];
    removedBook.inCart = false;
    removedBook.count = 0;
    removedBook.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempBooks],
        };
      },
      () => this.addTotals()
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setBooks();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let total = 0;
    this.state.cart.map(book => (total += book.total));
    this.setState({
      cartTotal: total,
    });
  };

  addBook = book => {
    this.setState({
      books: [...this.state.books, book],
    });
  };

  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeBook: this.removeBook,
          clearCart: this.clearCart,
          addBook: this.addBook,
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

//Consumer
const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };
