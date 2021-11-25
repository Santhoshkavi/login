import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn,ValidationErrors } from '@angular/forms';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  user:Data[] = [];

  constructor() { }
}
/** A hero's name can't match the hero's alter ego */
// 
