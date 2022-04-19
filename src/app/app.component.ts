import { Component } from '@angular/core';
import {ClassService} from "./services/class.service";
import {MessageService} from "./services/message.service";
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DWhyteFantasyClasses';
  classItem?: Content;
  constructor(private classService: ClassService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.classService.getClassItem(2).subscribe((classItem => this.classItem = classItem));
  }
}
