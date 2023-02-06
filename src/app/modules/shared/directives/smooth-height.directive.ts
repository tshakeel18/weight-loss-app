import { Directive, OnChanges, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[smoothHeight]',
  host: { '[style.display]': '"block"', '[style.overflow]': '"hidden"' }
})
export class SmoothHeightAnimDirective implements OnChanges {
  @Input() public smoothHeight: boolean = false;
  private pulse: boolean = false;
  private startHeight: number = 0;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() {
    return { value: this.pulse, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
    console.log(this.startHeight);

  }

  ngOnChanges() {
    this.setStartHeight();
    this.pulse = !this.pulse;
  }
}
