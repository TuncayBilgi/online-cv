import { Component,Input } from '@angular/core';

@Component({
  selector: 'CenterPart',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})


export class CenterComponent {


  CGI :object = {title : '', bullet : ''};
  Projects :object = {title : ''}

  images = [
    './../../assets/artblog_mon.png',
    './../../assets/firepixel.png',
    './../../assets/cvweb.png',
    './../../assets/jeudelavie.png',
    './../../assets/blackjack.png',
    './../../assets/fraiseuse.jpg',
    './../../assets/usbkey.png',
  ];
  captions = [
    "Blog utilisant Next.js et un headless CMS. Responsive, possibilté de commenter, implémentation DevOps ",
    'Webapp de dessin collaboratif hébergé en cloud. React,Express Websocket.',
    'CV web interactif en Angular. Responsive et Structure de Component modulable.',
    'Simulation interactive du jeu de la vie, en Python, animé avec Matplotlib.',
    'Simulateur MonteCarlo de BlackJack en Matlab. Définissez une stratégie et simulez des miliers de parties.',
    "Construction et paramètrage en groupe d'une fraiseuse numérique lowtech",
    "Schéma technique, modélisation puis rendu graphique d'une clé USB avec AutoCAD."
  ];

  links = [
    'http://node.curcuma.ovh1.ec-m.fr',
    'http://melisse.ovh1.ec-m.fr/',
    'https://tbilgi.perso.centrale-marseille.fr/index.html',
    'https://github.com/TuncayBilgi/heelo-dev/tree/main/Python/Jeu_de_la_vie'
  ];


}
