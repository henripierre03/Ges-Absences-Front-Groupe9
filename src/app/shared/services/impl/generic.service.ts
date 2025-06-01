import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { RestResponse } from '../../models/rest-response.model';
import { IGenericService } from '../IGenericServise';

@Injectable({
  providedIn: 'root',
})
export class GenericService<T> implements IGenericService<T> {
  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly endpoint: String,
  ) {}
  getAll(
    page: number = environment.page,
    size: number = environment.size,
  ): Observable<RestResponse<T[]>> {
    return this.httpClient.get<RestResponse<T[]>>(
      `${environment.apiUrl}/${this.endpoint}?page=${page}&size=${size}`,
    );
  }
  getOne(id: number): Observable<RestResponse<T>> {
    return this.httpClient.get<RestResponse<T>>(
      `${environment.apiUrl}/${this.endpoint}/${id}`,
    );
  }
  create(entity: T): Observable<RestResponse<T>> {
    return this.httpClient.post<RestResponse<T>>(
      `${environment.apiUrl}/${this.endpoint}`,
      entity,
    );
  }
  update(entity: T, id: number): Observable<RestResponse<T>> {
    return this.httpClient.put<RestResponse<T>>(
      `${environment.apiUrl}/${this.endpoint}/${id}`,
      entity,
    );
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/${this.endpoint}/${id}`,
    );
  }
}
