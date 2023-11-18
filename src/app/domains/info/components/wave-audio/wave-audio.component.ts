import { AfterViewInit, Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import waveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})

export class WaveAudioComponent implements AfterViewInit {

  @Input({ required: true }) audioUrl: string = '';

  @ViewChild('wave') container!: ElementRef;
  private ws!: waveSurfer;
  public isPlaying = signal<boolean>(false);

  ngAfterViewInit(): void {
   this.ws =  waveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
  }

  public playPause(){
    this.isPlaying.update(lastState => !lastState )
    this.ws.playPause()
  }
}
