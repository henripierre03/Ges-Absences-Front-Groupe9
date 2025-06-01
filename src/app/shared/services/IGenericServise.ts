import { Observable } from 'rxjs';
import { RestResponse } from '../models/rest-response.model';

export interface IGenericService<T> {
  getAll(page: number, size: number): Observable<RestResponse<T[]>>;
  getOne(id: number): Observable<RestResponse<T>>;
  create(entity: T): Observable<RestResponse<T>>;
  update(entity: T, id: number): Observable<RestResponse<T>>;
  delete(id: number): Observable<void>;
}
