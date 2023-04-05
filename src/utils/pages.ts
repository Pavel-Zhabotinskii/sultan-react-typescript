export const getPageCount = (totalCount:number, limt:number) => {
    return Math.ceil(totalCount / limt)
}