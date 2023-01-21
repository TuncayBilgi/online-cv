import { Component,Input } from '@angular/core';


@Component({
  selector: 'LeftSection',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})

export class LeftSectionComponent {
  @Input() data : any;

}
