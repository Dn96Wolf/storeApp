import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

  public duration = signal<number>(1000);
  public message = signal<string>('Hola');
  public audio = 'assets/Grabación.m4a';
  public changeDuration(event:Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  public changeMessage(event:Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
