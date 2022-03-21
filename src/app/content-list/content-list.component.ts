import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  public classList: Content[];
  titleFound?: boolean;

  public constructor() {
    this.classList = [{
      id: 0,
      title: 'Fighter',
      creator: "DND",
      description: "A person good with weapons",
      imgURL: 'https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png',
      type: "Martial Class",
      tags: []
    },{
      id: 1,
      title: 'Wizard',
      creator: "DND",
      description: "A person good with magic",
      imgURL: "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png",
      type: "Caster Class",
      tags: ["Smart", "Intelligent"]
    },{
      id: 2,
      title: 'Rogue',
      creator: "DND",
      description: "A person good at sneaking",
      imgURL: "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png",
      type: "Martial Class",
    },{
      id: 3,
      title: 'Magus',
      creator: "Pathfinder",
      description: "A person that can cast spells and use multiple weapons",
      imgURL: "https://2e.aonprd.com/Images/Classes/Iconic_Seltyiel.png",
      type: "Half-Caster Class",
      tags: ["Intelligent"]
    },{
      id: 4,
      title: 'Inventor',
      creator: "Pathfinder",
      description: "A person that makes things",
      imgURL: "https://2e.aonprd.com/Images/Classes/Iconic_Droven.png",
      type: "Martial Class",
      tags: ["Smart", "Inventive"]
    },{
      id: 5,
      title: 'Investigator',
      creator: "Pathfinder",
      description: "A person good at solving mysteries",
      imgURL: "https://2e.aonprd.com/Images/Classes/Iconic_Quinn.png",
      type: "Martial Class",
      tags: ["Cunning", "Smart"]
    },{
      id: 6,
      title: 'Champion',
      creator: "Pathfinder",
      description: "A person with strong morals",
      imgURL: "https://2e.aonprd.com/Images/Classes/Iconic_Seelah.png",
      type: "Martial Class",
      tags: ["Tough"]
    }];
  }

  ngOnInit(): void {
  }
  checkForTitle(title: string): void{

    this.titleFound = this.classList.some(c => c.title === title);
  }
}
