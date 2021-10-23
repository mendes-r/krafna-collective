import { Injectable } from '@angular/core';
import { Project } from '../entity/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getPortfolio(): Project[] {
    return [
      {
            id: 1,
            name: "Casa Chã",
            thumbnailUrl: "assets/images/1-casa-cha/krafna-architects-cha.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Oliveira de Azemeis"
          },
          {
            id: 2,
            name: "Belmonte",
            thumbnailUrl: "assets/images/2-belmonte/krafna-architects-belmonte.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Porto"
          },
          {
            id: 3,
            name: "Botschaft",
            thumbnailUrl: "assets/images/3-botschaft/krafna-architects-botschaft.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Porto"
          },
          {
            id: 4,
            name: "Detroit",
            thumbnailUrl: "assets/images/4-detroit/krafna-architects-detroit.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Detroit"
          },
          {
            id: 5,
            name: "Constituição",
            thumbnailUrl: "assets/images/5-constituicao/krafna-architects-constituicao.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Porto"
          },
          {
            id: 6,
            name: "Melro",
            thumbnailUrl: "assets/images/6-melro/krafna-architects-melro.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Beira Alta"
          },
          {
            id: 7,
            name: "Casa A",
            thumbnailUrl: "assets/images/7-casa-a/krafna-architects-casa-a.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Oliveira de Azemeis"
          },
          {
            id: 8,
            name: "Ceuta",
            thumbnailUrl: "assets/images/8-ceuta/krafna-architects-ceuta.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Porto"
          },
          {
            id: 9,
            name: "Casa Nova",
            thumbnailUrl: "assets/images/9-casa-nova/krafna-architects-casa-nova.jpg",
            leftImagesUrl: [""],
            rightImagesUrl: [""],
            description:"Oliveira de Azemeis"
          }
    ]
  }
}
