import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[Highligth]',
  standalone: true
})
export class HighligthDirective implements OnInit {

  public element = inject(ElementRef)

  constructor() { }


  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }



}
