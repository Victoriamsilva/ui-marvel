export interface IDefaultResponse {
  code: number;
  status: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDefaultResponsePagination;
}

export interface IDefaultResponsePagination {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
