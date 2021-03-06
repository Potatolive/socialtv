import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {
  @Input() post: Post;
  @ViewChild('cropImage') cropImage: ElementRef;
  cropCoordinates: any;
  isCropSetup: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCoords(cropCoordinates: any) {
    this.cropCoordinates = cropCoordinates;
  }

  ngAfterViewInit() {
    $(this.cropImage.nativeElement).find('iron-image').css('pointer-events', 'auto');
  }

  setupCrop() {

    if(this.isCropSetup) return;

    $(this.cropImage.nativeElement).find('img').Jcrop({
      onChange: this.showCoords,
      onSelect: this.showCoords,
      aspectRatio: 1
    });

    this.isCropSetup = true;
  }
}
