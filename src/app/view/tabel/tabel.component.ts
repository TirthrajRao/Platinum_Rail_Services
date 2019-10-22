import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {
  @Input() coursList;
  receviedData;
  constructor() { }

  ngOnInit() {
    this.receviedData = this.coursList;
    console.log("course Detaoils", this.receviedData);
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
