import { Injectable } from '@angular/core';
import { CellType } from 'src/constants/CellType';

@Injectable()
export class BoardTraverser {
	isMine(board: number[][], selectedRowIndex: number, selectedCellIndex: number): boolean {
		return board[selectedRowIndex][selectedCellIndex] == CellType.MINE;
	}
	
	revealAllMines(board: number[][], visited: boolean[][]): void {
		const size: number = board.length;
		for(let i = 0; i < size; i++) {
			for(let j = 0; j < size; j++) {
				if(board[i][j] == CellType.MINE) {
					visited[i][j] = true;
				}
			}
		}
	}

	countHiddenMinesLeft(board: number[][], visited: boolean[][]): number { 
		let count: number = 0;
		const size: number = board.length;
		for(let i = 0; i < size; i++) {
			for(let j = 0; j < size; j++) {
				if(board[i][j] == CellType.MINE && !visited[i][j]) {
					count++;
				}
			}
		}
		return count;
	}

	// BFS algorithm
	revealCells(board: number[][], visited: boolean[][], selectedRowIndex: number, selectedCellIndex: number): void {
		const size: number = board.length;
		let queue: number[][] = [];
		queue.unshift([selectedRowIndex, selectedCellIndex]);
		visited[selectedRowIndex][selectedCellIndex] = true;

		while(queue.length > 0) {
			let pair: number[] = queue.shift();
			let x: number = pair[0];
			let y: number = pair[1];

			if(x - 1 >= 0 && !visited[x - 1][y] && !this.isMine(board, x - 1, y)) {
				queue.push([x - 1, y]);
				visited[x - 1][y] = true;
			}
			if(y - 1 >= 0 && !visited[x][y - 1] && !this.isMine(board, x, y - 1)) {
				queue.push([x, y - 1]);
				visited[x][y - 1] = true;
			}
			if(x + 1 < size && !visited[x + 1][y] && !this.isMine(board, x + 1, y)) {
				queue.push([x + 1, y]);
				visited[x + 1][y] = true;
			}
			if(y + 1 < size && !visited[x][y + 1] && !this.isMine(board, x, y + 1)) {
				queue.push([x, y + 1]);
				visited[x][y + 1] = true;
			}
		}
	}
}