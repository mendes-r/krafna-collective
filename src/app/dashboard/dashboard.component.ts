import { Component, OnInit } from '@angular/core';
import {Project} from "../project";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  portfolio: Project[] = [
    {
      id: 1,
      name: "Casa Chã",
      thumbnailUrl: "",
      leftImagesUrl: [""],
      rightImagesUrl: [""],
      description:"Oliveira de Azemeis"
    },
    {
      id: 1,
      name: "Belmont",
      thumbnailUrl: "",
      leftImagesUrl: [""],
      rightImagesUrl: [""],
      description:"Porto"
    },
    {
      id: 1,
      name: "Ceuta",
      thumbnailUrl: "",
      leftImagesUrl: [""],
      rightImagesUrl: [""],
      description:"Porto"
    },
    {
      id: 1,
      name: "Detroit",
      thumbnailUrl: "",
      leftImagesUrl: [""],
      rightImagesUrl: [""],
      description:"Detroit"
    },
    {
      id: 1,
      name: "Quinta Nova",
      thumbnailUrl: "",
      leftImagesUrl: [""],
      rightImagesUrl: [""],
      description:"Oliveira de Azemeis"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
