export interface RestResponse<T> {
  status: number;
  result: T;
  type: string;
  pages?: number[];
  curentPage?: number;
  totalPage?: number;
  totalItems?: number;
  first?: boolean;
  last?: boolean;
}