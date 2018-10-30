import {Component} from '@angular/core';
import{NgModule} from '@angular/core';

@Component(
    {
        selector:"demo1-root",
        templateUrl:"./demo1.html",
        styles:['h2{color:brown};','span{color:blue;font-weight:bold};','h3{color:black;font-style:italic}']

    }
)

export class  demo1 
{
    name:string="ankur sharma";
    id:number=101;
    arr=[{id:101,name:"ankur"},
        {id:102,name:"sharma"},
        {id:103,name:"abc"},
        {id:104,name:"xyz"},
        {id:105,name:"hello"},
        ]


}