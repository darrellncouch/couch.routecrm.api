export interface IPagedResponse<T> {
    totalCount: number;
    skip: number;
    limit: number;
    value: Array<T>;
}