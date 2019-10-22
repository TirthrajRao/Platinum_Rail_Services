import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {
  @Input() coursList;
  @Input() courseHeader; 
  receviedData;
  headerList = [];

  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }

  constructor() { }

  ngOnInit() {
    this.receviedData = this.coursList;
    this.headerList = this.courseHeader;
    console.log("course Detaoils", this.headerList);
    // Basic example
    // $(document).ready(function () {
    //   $('#dtBasicExample').DataTable({
    //     "paging": false // false to disable pagination (or any other option)
    //   });
    //   $('.dataTables_length').addClass('bs-select');
    // });

    $('li').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

}
