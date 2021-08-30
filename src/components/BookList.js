import React, { Component } from "react";
import Book from "./Book";
import Title from "./Title";
import { BookConsumer } from "../context";

export default class BookList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Books" />
            <div className="row">
              <BookConsumer>
                {value => {
                  return value.books.map(book => {
                    return <Book key={book.id} book={book} />;
                  });
                }}
              </BookConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
