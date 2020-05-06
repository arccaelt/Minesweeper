import { Component, Input, OnChanges } from '@angular/core';
import { BoardGenerator } from 'src/utils/BoardGenerator';
import { GAME_CONFIG } from 'src/environments/environment';
import { BoardTraverser } from 'src/utils/BoardTraverser';
import { CellType } from 'src/constants/CellType';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {
	@Input() boardSize: number = GAME_CONFIG.DEFAULT_BOARD_SIZE;
	board: number[][] = [];
	boardVisited: boolean[][];
	private boardGenerator: BoardGenerator;
	private selectedRowIndex: number;
	private selectedCellIndex: number;
	private boardTraverser: BoardTraverser;

	constructor(private generator: BoardGenerator, private checker: BoardTraverser) {
		this.boardGenerator = generator; 
		this.boardTraverser = checker;
		this.createBoards();
	}

	ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
		this.createBoards();
	}

	private createBoards(): void {
		this.board = this.boardGenerator.generateBoard(this.boardSize);
		this.boardVisited = this.boardGenerator.generateVisited(this.boardSize);
	}

	rowClick(cell: HTMLTableRowElement): void {
		this.selectedRowIndex = cell.rowIndex;
		this.revealColumns();
	}

	

	private revealColumns(): void {
		if(this.boardTraverser.isMine(this.board, this.selectedRowIndex, this.selectedCellIndex)) {
			alert("Game over");
			this.boardTraverser.revealAllMines(this.board, this.boardVisited);
		} else {
			this.boardTraverser.revealCells(this.board, this.boardVisited, this.selectedCellIndex, this.selectedCellIndex);
			if(this.boardTraverser.countHiddenMinesLeft(this.board, this.boardVisited) == 0) {
				alert("You win");
			}
		}
	}

	cellClick(cell: HTMLTableCellElement): void {
		this.selectedCellIndex = cell.cellIndex;
	}
}
