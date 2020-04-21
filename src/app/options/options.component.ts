import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
	selector: 'app-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

	@Output() boardSizeChanged: EventEmitter<number>;

	constructor() { 
		this.boardSizeChanged = new EventEmitter<number>();
	}

	updateBoardSize(selectedSize: HTMLSelectElement) {
		let numberSize: number = Number(selectedSize.value);
		this.boardSizeChanged.emit(numberSize);
	}

	ngOnInit(): void {
	}
}
