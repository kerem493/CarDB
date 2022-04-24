import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Color } from '../models/colors';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44352/api/';

  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath= this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
