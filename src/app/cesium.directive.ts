import { Directive, ElementRef, OnInit } from '@angular/core';
import { Cartesian3, CzmlDataSource, Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer = new Viewer(this.el.nativeElement, { shouldAnimate: true });
    viewer.dataSources.add( CzmlDataSource.load('https://raw.githubusercontent.com/CesiumGS/cesium/master/Apps/SampleData/simple.czml'));
    viewer.camera.flyHome(0);
  }

}
