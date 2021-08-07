class Book {
  constructor(title, author, numPages, currentlyReading) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentlyReading = currentlyReading;
  }
  toggleReading(readingStatus) {
    this.currentlyReading = readingStatus;
  }
  updateAuthor(author) {
    this.author = author;
  }
}
export default Book;
