const catalogueService = require('../app/catalogue_service');

describe('catalogueService', () => {
    describe('catalogueService.checkBook', () => {
        test('returns true when a book is found by title', () => {
            expect(catalogueService.checkBook('Great Expectations')).toBe(true);
        });

        test('returns false when a book cannot be found by title', () => {
            expect(catalogueService.checkBook('Gone With The Wind')).toBe(false);
        });

        test('returns true when a partial match is found', () => {
            expect(catalogueService.checkBook('Expectations')).toBe(true);
        });

        test('returns false when not even a partial match is found', () => {
            expect(catalogueService.checkBook('The Wind')).toBe(false);
        });
    });

    describe('catalogueService.countBookByKeyword', () => {
        test('returns (Number) of book matches when given keyword', () => {
            expect(catalogueService.countBooksByKeyword('assassin')).toBe(3);
        });
        test('returns (Number) of book matches when given keyword', () => {
            expect(catalogueService.countBooksByKeyword('pineapple')).toBe(0);
        });
    });
    describe('catalogueService.getBooksByAuthor', () => {
        test('returns book title of author searched for', () => {
            const actual = catalogueService.getBooksByAuthor('Charles Dickens');
            const result = [
                'A Tale of Two Cities',
                'Oliver Twist',
                'Great Expectations'
            ];
            expect(actual).toEqual(result);
        });
    });
    describe('catalogueService.getStockCount', () => {
        test('returns quantity of books in stock', () => {
            const titleBook = catalogueService.getStockCount('The Blind Assassin');
            const bookQuantity = 8;
            expect(titleBook).toBe(bookQuantity);
        });
    });
    // describe("catalogueService.stockReview", () => {
    //     test("returns titles which have less than 5 in stock", () => {
    //         expect(catalogueService.stockReview(0)).toEqual("Dracula");
    //     })
    // })
});