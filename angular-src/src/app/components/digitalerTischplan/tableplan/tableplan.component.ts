import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';
import { NavService }   from '../../../services/tables.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../tischplan.component.css']
})

export class TableplanComponent implements AfterViewInit {
  @Input('tablesAndreasSaal') tablesAndreasSaal: Table[];
  @Input('showAndreasSaalBool') showAndreasSaalBool: boolean;
  @Input('tablesRoterSalon') tablesRoterSalon: Table[];
  @Input('showRoterSalonBool') showRoterSalonBool: boolean;
  @Input('tablesTurm') tablesTurm: Table[];
  @Input('showTurmBool') showTurmBool: boolean;
  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('tablesBlauerSalon') tablesBlauerSalon: Table[];
  @Input('showBlauerSalonBool') showBlauerSalonBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedTurm: EventEmitter<any> = new EventEmitter();
  @Output()
  movedBlauerSalon: EventEmitter<any> = new EventEmitter();
  @Output()
  movedRoterSalon: EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanorama: EventEmitter<any> = new EventEmitter();
  @Output()
  movedAndreasSaal: EventEmitter<any> = new EventEmitter();
  @Output()
  changeBgColorIfAnreise: EventEmitter<any> = new EventEmitter();
  @Output()
  kiRoterSalonExport:EventEmitter<any> = new EventEmitter();
  @Output()
  erwRoterSalonExport:EventEmitter<any> = new EventEmitter();
  @Output()
  erwBlauerSalonExport:EventEmitter<any> = new EventEmitter();
  @Output()
  kiBlauerSalonExport:EventEmitter<any> = new EventEmitter();
  @Output()
  erwPanoramaExport:EventEmitter<any> = new EventEmitter();
  @Output()
  kiPanoramaExport:EventEmitter<any> = new EventEmitter();
  @Output()
  erwTurmExport:EventEmitter<any> = new EventEmitter();
  @Output()
  kiTurmExport:EventEmitter<any> = new EventEmitter();
  @Output()
  erwAndreasSaalExport:EventEmitter<any> = new EventEmitter();
  @Output()
  kiAndreasSaalExport:EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  erwTurm: any[] = [];
  kiTurm: any[] = [];
  erwPanorama: any[] = [];
  kiPanorama: any[] = [];
  erwBlauerSalon: any[] = [];
  kiBlauerSalon: any[] = [];
  erwRoterSalon: any[] = [];
  kiRoterSalon: any[] = [];
  erwAndreasSaal: any[] = [];
  kiAndreasSaal: any[] = [];
  timer: any;
  delay: any;
  prevent: boolean;
  isZoomed: boolean;


  constructor(private tischplanService: TischplanService, private _navService: NavService, private el: ElementRef, public renderer: Renderer2) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
    this.timer = 0;
    this.delay = 200;
    this.prevent = false;
    this.isZoomed = false;
  }

  zoom(){
    if(this.isZoomed) {
      return "scale(3)";
    } else {
      return "scale(1)";
    }
  }

  ngAfterViewInit() {
  }

  addTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.addTable(table).subscribe(response => {

      for (let a = 0; a < response[0].tables.length; a++) {
        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });
      }

      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      console.log("response[0].tables.department" + response[0].tables[j].department);

      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "turm") {
          this.movedTurm.emit(response[0].tables);
          //this.tablesTurm = response[0].tables;
        }
        else if (response[0].tables[j].department === "panorama") {
          this.movedPanorama.emit(response[0].tables);
          //this.tablesPanorama = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].tables[j].department === "blauer-salon") {
          this.movedBlauerSalon.emit(response[0].tables);
          //this.tablesBlauerSalon = response[0].tables;
        }
        else if (response[0].tables[j].department === "roter-salon") {
          this.movedRoterSalon.emit(response[0].tables);
          //this.tablesRoterSalon = response[0].tables;
        }
        else if (response[0].tables[j].department === "andreas-saal") {
          this.movedAndreasSaal.emit(response[0].tables);
          //this.tablesRoterSalon = response[0].tables;
        }
      }
      this.changeBgColorIfAnreise.emit();
    });
  }

  removeTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.removeTable(table).subscribe(response => {

      for (let a = 0; a < response[0].tables.length; a++) {
        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });
      }

      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      console.log("response[0].tables.department" + response[0].tables[j].department);
      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "turm") {
          this.movedTurm.emit(response[0].tables);
          //this.tablesTurm = response[0].tables;
        }
        else if (response[0].tables[j].department === "panorama") {
          this.movedPanorama.emit(response[0].tables);
          //this.tablesPanorama = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].tables[j].department === "blauer-salon") {
          this.movedBlauerSalon.emit(response[0].tables);
          //this.tablesBlauerSalon = response[0].tables;
        }
        else if (response[0].tables[j].department === "roter-salon") {
          this.movedRoterSalon.emit(response[0].tables);
          //this.tablesRoterSalon = response[0].tables;
        }
        else if (response[0].tables[j].department === "andreas-saal") {
          this.movedAndreasSaal.emit(response[0].tables);
          //this.tablesRoterSalon = response[0].tables;
        }
      }
      this.changeBgColorIfAnreise.emit();
    });
  }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].traceValue);
        if (a[b].traceValue != "-" || a[b].newTraceText) {
          this.trace = true;
        }
      }
      if (this.trace) {
        this.trace = false;
        return "solid 3px red";
      } else {
        return "solid 3px rgb(243, 239, 228)";
      }
    }
  }

  none(event) {
    event.stopPropagation();
  }

  mouseEnterMoveTableButton() {
    console.log("mouse enter : ");
    if (this.buttonMoveTable === "ff0000") {
      console.log('mouse enter1 :');
      this.buttonMoveTable = "bc0000";
    }
  }

  mouseLeaveMoveTableButton() {
    if (this.buttonMoveTable === "bc0000") {
      console.log('mouse leave1 :');
      this.buttonMoveTable = "ff0000";
    }
  }

  mouseEnterInfoButton() {
    console.log("mouse enter : ");
    if (this.buttonInfo === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonInfo = "cfcfcf";
    }
  }

  mouseLeaveInfoButton() {
    if (this.buttonInfo === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonInfo = "ffffff";
    }
  }

  mouseEnterHinzufuegenButton() {
    console.log("mouse enter : ");
    if (this.buttonHinzufuegen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonHinzufuegen = "cfcfcf";
    }
  }

  mouseLeaveHinzufuegenButton() {
    if (this.buttonHinzufuegen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonHinzufuegen = "ffffff";
    }
  }

  mouseEnterEntfernenButton() {
    console.log("mouse enter : ");
    if (this.buttonEntfernen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonEntfernen = "cfcfcf";
    }
  }

  mouseLeaveEntfernenButton() {
    if (this.buttonEntfernen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonEntfernen = "ffffff";
    }
  }

  getStyleTrace(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

  sumUpPersonenAnzahl(){
    console.log("sumUpPersonenAnzahl called");
    if (this.tablesTurm) {
      for (let p = 0; p < this.tablesTurm.length; p++) {
        this.erwTurm[p] = 0;
        this.kiTurm[p] = 0;
        if (this.tablesTurm[p].groups) {
          for (let g = 0; g < this.tablesTurm[p].groups.length; g++) {
            if (this.tablesTurm[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesTurm[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwTurm[p] = this.erwTurm[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiTurm[p] = this.kiTurm[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesPanorama) {
      for (let p = 0; p < this.tablesPanorama.length; p++) {
        this.erwPanorama[p] = 0;
        this.kiPanorama[p] = 0;
        if (this.tablesPanorama[p].groups) {
          for (let g = 0; g < this.tablesPanorama[p].groups.length; g++) {
            if (this.tablesPanorama[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesPanorama[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwPanorama[p] = this.erwPanorama[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiPanorama[p] = this.kiPanorama[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesBlauerSalon) {
      for (let p = 0; p < this.tablesBlauerSalon.length; p++) {
        this.erwBlauerSalon[p] = 0;
        this.kiBlauerSalon[p] = 0;
        if (this.tablesBlauerSalon[p].groups) {
          for (let g = 0; g < this.tablesBlauerSalon[p].groups.length; g++) {
            if (this.tablesBlauerSalon[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesBlauerSalon[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwBlauerSalon[p] = this.erwBlauerSalon[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiBlauerSalon[p] = this.kiBlauerSalon[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesRoterSalon) {
      for (let p = 0; p < this.tablesRoterSalon.length; p++) {
        this.erwRoterSalon[p] = 0;
        this.kiRoterSalon[p] = 0;
        if (this.tablesRoterSalon[p].groups) {
          for (let g = 0; g < this.tablesRoterSalon[p].groups.length; g++) {
            if (this.tablesRoterSalon[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesRoterSalon[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwRoterSalon[p] = this.erwRoterSalon[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiRoterSalon[p] = this.kiRoterSalon[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesAndreasSaal) {
      for (let p = 0; p < this.tablesAndreasSaal.length; p++) {
        this.erwAndreasSaal[p] = 0;
        this.kiAndreasSaal[p] = 0;
        if (this.tablesAndreasSaal[p].groups) {
          for (let g = 0; g < this.tablesAndreasSaal[p].groups.length; g++) {
            if (this.tablesAndreasSaal[p].groups[g].personenAnzahlValue) {
              let erwKi = this.tablesAndreasSaal[p].groups[g].personenAnzahlValue.match(/\d+/g);
              if (erwKi != null) {
                //console.log(erwKi);
                this.erwAndreasSaal[p] = this.erwAndreasSaal[p] + Number(erwKi[0]);
                //console.log(this.erw[p]);
              }
              if (erwKi != null) {
                //console.log(erwKi);
                this.kiAndreasSaal[p] = this.kiAndreasSaal[p] + Number(erwKi[1]);
                //console.log(this.ki[p]);
              }
            }
          }
        }
      }
    }
    this.kiRoterSalonExport.emit(this.kiRoterSalon);
    this.erwRoterSalonExport.emit(this.erwRoterSalon);
    this.erwBlauerSalonExport.emit(this.erwBlauerSalon);
    this.kiBlauerSalonExport.emit(this.kiBlauerSalon);
    this.erwPanoramaExport.emit(this.erwPanorama);
    this.kiPanoramaExport.emit(this.kiPanorama);
    this.erwTurmExport.emit(this.erwTurm);
    this.kiTurmExport.emit(this.kiTurm);
    this.erwAndreasSaalExport.emit(this.erwAndreasSaal);
    this.kiAndreasSaalExport.emit(this.kiAndreasSaal);
  }
}
