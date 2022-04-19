import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { Observable, of } from "rxjs";
import {listOfClasses} from "../helper-files/contentDb";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private messageService: MessageService) { }

  getContentObs(): Observable<Content[]>{
    this.messageService.add('ClassService: fetched classes')
    return of(listOfClasses)
  }

  getClassItem(id: number): Observable<Content> {
    this.messageService.add('ClassService: fetched class')
    return of(listOfClasses[id]);
  }
}
