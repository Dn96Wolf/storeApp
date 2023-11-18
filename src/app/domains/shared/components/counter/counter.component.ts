import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message = '';

  public counter = signal<number>(0);
  private counterRef: number | undefined;
  constructor() {
    ///NO ASYNC
    //before render
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before and during
    //detecta un cambio en los inputs y outputs
    console.log('on changes', changes);
    console.log('-'.repeat(10))
    const duration = changes['duration'];
    console.log(duration)
    if (duration && duration.currentValue !== duration.previousValue) {
      this.durationChange();
    }
  }

  ngOnInit(): void {
    //el chidoo
    //corre solo una vez
    //async
    console.log('on init')
    console.log('-'.repeat(10))


    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval')
    //   this.counter.update(lastState => lastState + 1)
    // }, 2000)

  }

  ngAfterViewInit() {
    //after render
    console.log('after init');
    console.log('-'.repeat(10))

  }


  ngOnDestroy(): void {
    console.log('destroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }


  durationChange() {
    //correr logica asincrona o no
    console.log('implementamos alguna logica')
  }

}
