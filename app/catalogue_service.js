// eslint-disable-next-line no-unused-vars
const catalogue = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10 },
    { title: "Dracula", author: "Bram Stoker", quantity: 0 },
    { title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9 },
    { title: "Wolf Hall", author: "Hilary Mantel", quantity: 33 },
    { title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31 },
    { title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11 },
    { title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8 },
    { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43 },
    { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12 },
    { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1 },
    { title: "Normal People", author: "Sally Rooney", quantity: 2 },
    { title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6 },
    { title: "2666", author: "Robert Bolaño", quantity: 17 },
    { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 },
    { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3 },
    { title: "Oliver Twist", author: "Charles Dickens", quantity: 7 },
    { title: "Great Expectations", author: "Charles Dickens", quantity: 1 },
    { title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8 },
    { title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19 },
    { title: "The Origin of Species", author: "Charles Darwin", quantity: 50 },
];

function checkBook(title) {
    if (!title) throw new Error("Please provide a title");
    let result = false;
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.title.toLowerCase().includes(title.toLowerCase())) {
            result = true;
        }
    }
    return result;
}

function countBooksByKeyword(keyword) {
    if (!keyword) throw new Error("Please provide a keyword");
    let count = 0;
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.title.toLowerCase().includes(keyword.toLowerCase())) {
            count++;
        }
    }
    return count;
}

function getBooksByAuthor(author) {
    if (!author) throw new Error("Please provide an author");
    const booksByAuthor = [];
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.author === author) {
            const title = book.title;
            booksByAuthor.push(title);
        }
    }
    return booksByAuthor;
}

function getStockCount(title) {
    if (!title) throw new Error("Please provide a title");
    let result = 0;
    for (let i = 0; i < catalogue.length; i++) {
        const book = catalogue[i];
        if (book.title.toLowerCase().includes(title.toLowerCase())) {
            result = book.quantity;
        }
    } // end of loop
    return result;
}

// function stockReview(title) {
//     if (!title) throw new Error("Please provide a title");
//     let result = "";
//     // "returns titles which have less than 5 in stock"
//     for (i = 0; i < catalogue.length; i++) {
//         const book = catalogue[i];
//         if (book.quantity <= 5) {
//             result = book.title;
//             console.log(book.title);
//         }
//     }
//     return result;
// }

module.exports = {
    checkBook,
    countBooksByKeyword,
    getBooksByAuthor,
    getStockCount,
    // stockReview
};