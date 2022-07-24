/**
 * A sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const paginate = (array, pageNumber, pageSize) => {
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
}
