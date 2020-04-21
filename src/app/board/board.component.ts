import { Component, Input, OnChanges } from '@angular/core';
import { BoardGenerator } from 'src/utils/BoardGenerator';
import { GAME_CONFIG } from 'src/environments/environment';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {
	@Input() boardSize: number = GAME_CONFIG.DEFAULT_BOARD_SIZE;
	boardSizeCollection: number[][] = [];
	private boardGenerator: BoardGenerator;

	constructor() { 
		this.boardGenerator = new BoardGenerator();
		this.createBoard();
	}

	ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
		this.createBoard();
	}

	private createBoard(): void {
		this.boardSizeCollection = this.boardGenerator.generateBoard(this.boardSize);
	}
}
