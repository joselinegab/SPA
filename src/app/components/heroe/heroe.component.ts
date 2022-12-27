import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  //Arreglo
  heroe:any={};
  index:number =0;


  //Recibir parámetos por rutas
  constructor(private activateRoute:ActivatedRoute,
    private _heroeServicio:HeroesService,  private location: Location,
    private router:Router
    ) {
      
    this.activateRoute.params.subscribe(params=>{
      this.heroe=_heroeServicio.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }
   goBack(): void {
    this.location.back();
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate(['/heroe', this.index])
  }
  ngOnInit(): void {
  }

}
