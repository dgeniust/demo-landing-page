export function paginationData<T>(page: number, perPage: number, dataArray: T[]) {
    const start = (page - 1) * perPage
    const data = dataArray.slice(start, start + perPage);
    return { data, total: dataArray.length }
}