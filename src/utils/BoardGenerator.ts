import { CellType } from 'src/constants/CellType';

export class BoardGenerator {
	private readonly offsetDirectionX: number[] = [-1, 0, 0, 1];
	private readonly offsetDirectionY: number[] = [0, -1, 1, 0];

	private getMineCount(board: number[][], posX: number, posY: number): number {
		let count: number = 0;

		for(let i = 0; i < this.offsetDirectionX.length; i++) {
			let offsetPosX: number = posX + this.offsetDirectionX[i];
			let offsetPosY: number = posY + this.offsetDirectionY[i];

			if(offsetPosX < 0 || offsetPosY < 0 || offsetPosX >= board.length || offsetPosY >= board.length) {
				continue;
			}

			if(board[offsetPosX][offsetPosY] == CellType.MINE) {
				count++;
			}
		}
		return count;
	}

	private fillCellsWithMineCount(board: number[][]): void {
		for(let i = 0; i < board.length; i++) {
			for(let j = 0; j < board.length; j++) {
				if(board[i][j] == CellType.NORMAL) {
					board[i][j] = this.getMineCount(board, i, j);
				}
			}
		}
	}

	public generateBoard(size: number,): number[][] {
		let board: number[][] = [];
		for(let i = 0; i < size; i++) {
			let row: number[] = [];
			for(let j = 0; j < size; j++) {
				if(Math.random() < 0.5) {
					row.push(CellType.NORMAL);
				} else {
					row.push(CellType.MINE);
				}
			}
			board.push(row);
		}
		this.fillCellsWithMineCount(board);
		return board;
	}
}