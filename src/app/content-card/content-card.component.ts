import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { ContentList } from '../helper-files/content-list'

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() {

    this.item1 = {
      id: 0,
      title: 'Fighter',
      creator: "DND",
      description: "A person good with weapons",
      imgURL: 'https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png',
      type: "Martial Class",

    };

    this.item2 = {
      id: 1,
      title: 'Wizard',
      creator: "DND",
      description: "A person good with magic",
      imgURL: "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png",
      type: "Caster Class",

    };

    this.item3 = {
      id: 2,
      title: 'Rogue',
      creator: "DND",
      description: "A person good at sneaking",
      imgURL: "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png",
      type: "Martial Class",

    };

    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);

  }

  ngOnInit(): void {
  }

}
