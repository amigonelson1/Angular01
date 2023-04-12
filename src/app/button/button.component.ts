import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent {
 /*  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }

  ngOnInit(): void {
    console.log('Init ->');;
  }

  ngOnDestroy(): void {
    console.log('Destroy ->');;
  } */

  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  counterRender(): boolean{
    //console.log('Render Button');
    return true;
  }

}
