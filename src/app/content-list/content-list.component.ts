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
    if (this.classList.some(c => c.title === title)) {
      this.titleFound = true;
    } else {
      this.titleFound = false;
    }
    // this.titleFound = this.classList.some(c => c.title === title);
  }

  addContentToList(newContent: Content): void {
    console.log("content that came from the child element: ", newContent);
    this.classList.push(newContent);
    this.classList = [...this.classList];
    console.log("my list after cloning: ", this.classList);
  }
}
