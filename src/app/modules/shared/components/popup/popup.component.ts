import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements AfterViewInit, OnDestroy {
  private updateHeight = new Subject<number>();
  private destroy = new Subject();
  private containerHeight = 0;

  @HostBinding('style.height.px') public height?: number;
  @HostBinding('class.show_content') public showContent = false;
  @Output() public close = new EventEmitter();

  @Input() public set open(value: boolean) {
    if (value) {
      this.updateHeight.next(this.containerHeight);
    } else if (this.containerHeight) {
      this.updateHeight.next(0);
    }
    this.show = value;
  }
  @HostBinding('style.bottom.px')
  @Input() public positionBottom?: number;
  @HostBinding('class.show')
  public show = false;


  constructor(private elRef: ElementRef, private cdRef: ChangeDetectorRef) {
    this.updateHeight.pipe(takeUntil(this.destroy), debounceTime(0)).subscribe((value) => {
      this.height = value;
    })
  }

  ngAfterViewInit(): void {
    if (this.elRef.nativeElement) {
      console.log(this.elRef.nativeElement.offsetHeight, this.elRef.nativeElement.clientHeight);
      this.containerHeight = this.elRef.nativeElement.clientHeight;
      this.updateHeight.next(0);
      this.cdRef.detectChanges();
    }
  }

  public toggleContent () {
    this.showContent = !this.showContent;
  }

  ngOnDestroy(): void {
      this.cdRef.detach();
      this.destroy.next(null);
      this.destroy.unsubscribe();
  }

  onClose() {
    this.showContent = false;
    this.open = false;
    this.close.emit();
  }
}
