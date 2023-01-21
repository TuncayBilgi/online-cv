import { Component } from '@angular/core';

@Component({
  selector: 'LeftBar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})


export class LeftBarComponent {

  Centrale = { title : 'Ecole Centrale Marseille (Marseille)', desc : ["2023 : Diplôme d'ingénieur généraliste","Cours d'Informatique, Physique, Gestion, Economie"],img :'./../../assets/CentraleW.png', };
  LyceeDuParc = { title : 'Lycée du Parc (Lyon)', desc :["Physique Chimie et Sciences de l'ingénieur (PCSI) (2018-2019)","Physique Chimie (PC*) (2019-2020)"],img :'./../../assets/Lycee_du_parc.png'};

  Languages = {title : 'Languages', desc :["JavaScript : React, NextJS, Angular, Node-Express, Tailwind","Python : Pytest, Pandas, Seaborn, Matplotlib, Numpy", "Java : Spring", "Bash, PowerShell"],img :'./../../assets/programming.png'};
  Devops = {title : 'DevOps', desc :["Git, Github, Docker, Jenkins"],img :'./../../assets/devops.png'};
  SoftSkills = {title : 'Soft Skills', desc :["Travail d'équipe, Créativité, Autonomie, Adaptabilité, Rigueur, Communication Orale"],img :'./../../assets/gear.png'};
  Français = {title : 'Français',desc:["Langue maternelle"],img :'./../../assets/Flag_of_France.webp'};
  Anglais = {title : 'Anglais', desc :["C1 (avancé) écrit et oral"],img :'./../../assets/Flag_of_the_United_Kingdom.png'};
  Italien = {title : 'Italien', desc :["Débutant"],img :'./../../assets/Flag_of_Italy.png'};



  sections = [
    {title : 'Formation', bullets : [this.Centrale,this.LyceeDuParc]},
    {title : 'Informatique', bullets : [this.Languages,this.Devops]},
    {title : 'Langues', bullets : [this.Français,this.Anglais,this.Italien]},
    {title : 'Compétences', bullets : [this.SoftSkills]}
  ];

}
