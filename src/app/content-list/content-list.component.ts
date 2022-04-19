import { Component, OnInit } from '@angular/core';
import {ClassService} from "../services/class.service";
import {listOfClasses} from "../helper-files/contentDb";
import {Content} from "../helper-files/content-interface";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  classList: Content[];
  titleFound?: boolean;

  constructor(private contentService: ClassService, private messageService: MessageService) {
    this.classList = [];
  }

  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(listOfClasses => this.classList = listOfClasses);
  }

  checkForTitle(title: string): void{

    this.titleFound = this.classList.some(c => c.title === title);
  }
}
