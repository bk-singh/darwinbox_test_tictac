import { Component, OnInit } from '@angular/core';
import {appService} from './app.service';

@Component({
  selector: 'my-app',
  template: `
<!--<div *ngIf="!playerName">-->
  <!--<span>Enter your name: </span>-->
  <!--<input type="text" id="playerName" [(ngModel)]="playerName">-->

  <!--<button id="submitName" >Proceed</button> -->
<!--</div>-->

    <div *ngIf="playerName" style="width:600px;">
      <!--<h1>Hello {{PlayerName}}</h1>-->
      
        <div *ngFor="let value1 of values" style="width:300px; color: blue" >
          <div *ngFor="let value2 of values" style="width:100px; float:left;">
            
            <button class="squareBox" *ngIf="!block[(3*(value1-1)) + (value2)-1].lable" (click)="selectABlock((3*(value1-1)) + (value2)-1)" [disabled]="!block[(3*(value1-1)) + (value2)-1].enable">{{(3*(value1-1)) + (value2)-1}}</button>
            <button class="squareBox"*ngIf="block[(3*(value1-1)) + (value2)-1].lable" (click)="selectABlock((3*(value1-1)) + (value2)-1)" [disabled]="!block[(3*(value1-1)) + (value2)-1].enable">{{block[(3*(value1-1)) + (value2)-1].lable}}</button>

          </div>
        </div>        
    </div>
    
    <div *ngIf="gameResult" style=" background-color: pink; color:green; width:900px; height:100px">
      Game Result : Player with ID {{player}} won the game..
    </div>

`,
  providers:[appService]
})
export class AppComponent  implements OnInit {
  constructor(private _appService: appService) { }
  player:any = 0;
  playerData = {};
  playerName ='player';
  playerCount= 0;
  values = [1,2,3];
  isGameEnabled:any=false;
  block:any=[];
  gameResult= false;
   horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
   vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
   diagonal = [[0,4,8],[2,4,6]];
   allwins = [].concat(this.horizontal).concat(this.vertical).concat(this.diagonal);

  ngOnInit() {
      for(let i=0; i<9;i++){
        this.block[i] = {value:i, lable:'', enable:true};
      }
    // console.log(JSON.stringify(this.block));
    this.playerData = this._appService.getPlayer();
    console.log();

  }


  selectABlock(selectedBlock:any){
    this.block[selectedBlock].enable = false;
    if(this.player==0){
      this.block[selectedBlock].id = 0;
      this.block[selectedBlock].lable = 'x';
    }else{

      this.block[selectedBlock].id = 1;
      this.block[selectedBlock].lable = 'o';
    }

    // console.log(JSON.stringify(this.block));

    this.gameResult= this.checkResult();
  }


  checkResult(){
  for(let i=0; i< this.allwins.length; i++){
    let count = 0;

    // console.log("count1",count);
    for(let j=0; j< this.allwins[i].length; j++){

      // console.log("count2",count);
      for(let k=0; k< this.block.length; k++){

        // console.log("count3",count);
        if(this.block[k].lable && this.allwins[i][j] === this.block[k].value){
            count++;
        }
        if(count==3){
          // console.log("count4",count);
          return true
        }
      }
    }
    // console.log(this.allwins[i]);
  }
  return false;
  }


}
