import { Component, OnInit } from '@angular/core';
import { WeavesService } from 'src/app/weaves.service';
import { Weave } from 'src/app/weave.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weaves: Weave[];

  constructor(private weaveService: WeavesService) { }

  ngOnInit() {
    this.weaveService.getWeaves().subscribe(data => {
      this.weaves = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Weave;
      })
      console.log(this.weaves);
    });
  }

  addWeave(weave: Weave) {
    this.weaveService.createWeave(weave);
  }

  deleteWeave(weaveId: string) {
    this.weaveService.deleteWeave(weaveId);
  }

}
