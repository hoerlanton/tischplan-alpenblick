import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})

export class NavigationComponent implements OnInit {

  filesToUpload: Array<File> = [];
  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('newInformationEmployees') newInformationEmployees: any[] = [];
  @Input('tablesOccupied') tablesOccupied: number;
  @Input('tablesTempAbreise') tablesTempAbreise: any[] = [];
  @Output()
  umsetzenExport: EventEmitter<any> = new EventEmitter();
  @Output()
  abreisenExportExport: EventEmitter<any> = new EventEmitter();
  term: string;
  @Output()
  termExport: EventEmitter<any> = new EventEmitter();
  @Output()
  getTablesExport: EventEmitter<any> = new EventEmitter();
  @Output()
  reloadLists: EventEmitter<any> = new EventEmitter();
  @Output()
  transformExport: EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];
  printToCart1Button: string;
  printToCart2Button: string;
  printToCart3Button: string;
  abreiseAbbrechenButton: string;
  abreiseAusfuehrenButton: string;
  abreiseAusfuehrenMorgenButton: string;


  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, public authService: AuthService, private router: Router ) {
    this.printToCart1Button = "ffffff";
    this.printToCart2Button = "ffffff";
    this.printToCart3Button = "ffffff";
    this.abreiseAbbrechenButton = "ffffff";
    this.abreiseAusfuehrenButton = "ff0000";
    this.abreiseAusfuehrenMorgenButton = "ff0000";
  }

  ngOnInit() {
  }

  delete(informationElement, j, event) {
    console.log(informationElement);
    console.log(j);

    event.stopPropagation();

    this.tischplanService.deleteInformationElement(informationElement)
      .subscribe(informationElement => {
        this.newInformationElements.splice(j, 1);
      });
  }

  printToCart1(printSectionId1: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId1).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
      '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
      '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart2(printSectionId2: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId2).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style> .table-item {position: absolute;} </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart3(data) {
    console.log('This method is called from the parent component via ViewChild');
    let popupWinindow;
    let innerContents = document.getElementById(data).innerHTML;
    console.log(innerContents);
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  none(event) {
    event.stopPropagation();
  }

  brandClick() {
    window.location.reload()
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res => {
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
    if (res[0].originalname) {
      this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
        cssClass: 'alert-success',
        timeout: 10000
      })} else {
      this._flashMessagesService.show(JSON.stringify(res), {
        cssClass: 'alert-danger',
        timeout: 10000
      })
    }})

  .subscribe(files => console.log("files", files));
    setTimeout(() => {
      this.reloadLists.emit();
    }, 3000);
  }


  dispenseIfAbreiseHeute() {
    this.dateTodayGenerated = new Date(); //Today
    this.dispenseIfAbreise();
  }

  dispenseIfAbreiseMorgen() {
    console.log("dispenseIfAbreiseMorgen");
    this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
    this.dispenseIfAbreise();
    console.log(this.dateTodayGenerated);
  }


  dispenseIfAbreise() {
    let tables = this.tablesTempAbreise;
    let abreisenExport = [];
    let b = 0;
    console.log('dispenseIfAbreise');
    //Tomorrow new Date().getTime() + 24 * 60 * 60 * 1000
    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {
        if (tables[a].tables[b].groups) {
          let abreisenExportObject = {
            table: tables[a].tables[b],
            group: [],
            date: String(this.dateTodayGenerated).substring(0, 15)
          };
          for (let c = 0; c < tables[a].tables[b].groups.length; c++) {
            if (tables[a].tables[b].groups[c].abreiseValue) {
              this.parts[0] = tables[a].tables[b].groups[c].abreiseValue.match(/(\d+)/g);
            } else {
              this.parts[0] = "undefined";
            }
            if (this.parts[0]) {
              this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
              this.parsedDate[0] = String(this.date[0]).substring(0, 15);
            }
            let dateToday = String(this.dateTodayGenerated).substring(0, 15);
            if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b].groups[c].newTraceText) {
              abreisenExportObject.group.push(c);
            }
            if(c === (tables[a].tables[b].groups.length -1) && (typeof abreisenExportObject.group !== 'undefined' && abreisenExportObject.group.length > 0)) {
              console.log("EEEEMMMMMMIIIIIIITTT");
              abreisenExport.push(abreisenExportObject);
            }
          }
        }
      }
    }
    console.log(abreisenExport);
    setTimeout(() => {
      this.abreisenExportExport.emit({abreisenExport, b});
    }, 100);
    this.getTablesExport.emit();
  }

  umsetzen() {

    event.preventDefault();
    console.log("UMSETZTEN CALLED");
    let quellTisch = this.quellTisch;
    let zielTisch = this.zielTisch;
    this.tableInformation = [];


    //let targetTable = this.quellTisch;
    //let quellTischNumber = this.quellTisch;
    //let targetTableNumber = Number(this.quellTisch.zielTisch);
    //let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
    console.log('targetTable' + zielTisch);
    console.log('quellTischNumber' + quellTisch);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let j = 0;

    if (Number(this.quellTisch) >= 1 && Number(this.quellTisch) <= 30) {
      tableToMove.department = "andreas-saal";
      j = 0;
    } else if (Number(this.quellTisch) >= 501 && Number(this.quellTisch) <= 520) {
      tableToMove.department = "panorama";
      j = 1;
    } else if (Number(this.quellTisch) >= 201 && Number(this.quellTisch) <= 208) {
      tableToMove.department = "roter-salon";
      j = 3;
    } else if ((Number(this.quellTisch) >= 301 && Number(this.quellTisch) <= 304) || (Number(this.quellTisch) >= 401 && Number(this.quellTisch) <= 408)) {
      tableToMove.department = "blauer-salon";
      j = 2;
    } else if (Number(this.quellTisch) >= 601 && Number(this.quellTisch) <= 607) {
      tableToMove.department = "turm";
      j = 2;
    }

    if (Number(this.zielTisch) >= 1 && Number(this.zielTisch) <= 30) {
      tableToMove.targetDepartment = "andreas-saal";
    } else if (Number(this.zielTisch) >= 501 && Number(this.zielTisch) <= 520) {
      tableToMove.targetDepartment = "panorama";
    } else if (Number(this.zielTisch) >= 201 && Number(this.zielTisch) <= 208) {
      tableToMove.targetDepartment = "roter-salon";
    } else if ((Number(this.zielTisch) >= 301 && Number(this.zielTisch) <= 304) || (Number(this.zielTisch) >= 401 && Number(this.zielTisch) <= 408)) {
      tableToMove.targetDepartment = "blauer-salon";
    } else if (Number(this.zielTisch) >= 601 && Number(this.zielTisch) <= 607) {
      tableToMove.targetDepartment = "turm";
    }

    let indexZiel = 0;
    let indexQuell = 0;

    tableToMove.number = this.quellTisch;
    tableToMove.targetTable = this.zielTisch;
    console.log(tableToMove);
    this.tischplanService.getTables()
      .subscribe(tables => {

        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              console.log("YEEEES BEFORE");
              if (tables[a].tables[b].number === tableToMove.number) {
                console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                console.log(tables[a].tables[b]);
                this.tableInformation.push(tables[a].tables[b]);
                console.log(this.tableInformation);
                this.tableInformation.push(tableToMove);
                console.log(this.tableInformation);
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.targetDepartment) {
              if (tables[a].tables[b].number === tableToMove.targetTable) {
                indexZiel = b;
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              if (tables[a].tables[b].number === tableToMove.number) {
                indexQuell = b;
              }
            }
          }
        }
        console.log("this.tableInformation IIIIIIIII");
        let tableInformationExport = this.tableInformation;
        this.umsetzenExport.emit({tableToMove, indexZiel, indexQuell, tableInformationExport});
      });
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);
    this.transformExport.emit(this.term);
  }

  onLogoutClick() {
    this.authService.logout();
    //this._flashMessagesService.show('You are logged out', {
    //  cssClass: 'alert-success',
    //  timeout: 3000
    //});
    this.router.navigate(['/login']);
    return false;
  }

  mouseEnterprintToCart1Button() {
    //console.log("mouse enter : ");
    if (this.printToCart1Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart1Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart1Button() {
    if (this.printToCart1Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart1Button = "ffffff";
    }
  }

  mouseEnterprintToCart2Button() {
    //console.log("mouse enter : ");
    if (this.printToCart2Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart2Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart2Button() {
    if (this.printToCart2Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart2Button = "ffffff";
    }
  }

  mouseEnterprintToCart3Button() {
    //console.log("mouse enter : ");
    if (this.printToCart3Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart3Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart3Button() {
    if (this.printToCart3Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart3Button = "ffffff";
    }
  }

  mouseEnterAbreiseAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenButton = "a00000";
    }
  }

  mouseLeaveAbreiseAusfuehrenButton() {
    if (this.abreiseAusfuehrenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenButton = "ff0000";
    }
  }

  mouseEnterAbreiseMorgenAusfuehrenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAusfuehrenMorgenButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.abreiseAusfuehrenMorgenButton = "a00000";
    }
  }

  mouseLeaveAbreiseMorgenAusfuehrenButton() {
    if (this.abreiseAusfuehrenMorgenButton === "a00000") {
      //console.log('mouse leave1 :');
      this.abreiseAusfuehrenMorgenButton = "ff0000";
    }
  }

  mouseEnterAbreiseAbbrechenButton() {
    //console.log("mouse enter : ");
    if (this.abreiseAbbrechenButton === "ffffff") {
      //console.log('mouse enter1 :');
      this.abreiseAbbrechenButton = "cfcfcf";
    }
  }

  mouseLeaveAbreiseAbbrechenButton() {
    if (this.abreiseAbbrechenButton === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.abreiseAbbrechenButton = "ffffff";
    }
  }
}
