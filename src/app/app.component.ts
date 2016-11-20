import { Component, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('filterPanel') filterPanel: ElementRef;
  title = 'app works! hurray :)';
  programs: string[] = ['My Pattu', 'Vazthukal'];
  myValue = 4;

  toggleFilterPanel() {
    $(this.filterPanel.nativeElement).togglePanel();
  }
    
}
