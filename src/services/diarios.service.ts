import { Injectable } from '@angular/core';

@Injectable()
export class DiariosService{
    diarios = [
        {id:1, titulo: 'Nodal', url:'https://www.nodal.am/'},
        {id:2, titulo: 'EOM', url:'https://elordenmundial.com/'}
    ];

    public getDiarios(){
        return this.diarios;
    }

    public getDiario(id){
        //utilizando filter
        return this.diarios.filter(function(e, i){ return e.id == id})[0] || {};
    }
}