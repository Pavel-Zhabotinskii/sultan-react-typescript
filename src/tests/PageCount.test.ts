import { getPageCount } from "../utils/PageCount";

describe('Checking the function to get the number of product pages', () => {
    test('transfer the number of products: 17, limit: 15', () => {
        expect(getPageCount(17, 15)).toBe(2)
    })
    test('transfer the number of products: 15, limit: 15', () => {
        expect(getPageCount(15, 15)).toBe(1)
    })
    test('transfer the number of products: 10, limit: 15', () => {
        expect(getPageCount(10, 15)).toBe(1)
    })
    test('transfer the number of products: 0, limit: 15', () => {
        expect(getPageCount(0, 15)).toBe(0)
    })
})