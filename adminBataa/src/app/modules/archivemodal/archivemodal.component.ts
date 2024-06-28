import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-archivemodal',
  templateUrl: './archivemodal.component.html',
  styleUrls: ['./archivemodal.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity:1,transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ opacity:0,transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class ArchivemodalComponent {
  @Input() visible:boolean = true;
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();
  closePopup(){
    this.visible = false;
  }
}
