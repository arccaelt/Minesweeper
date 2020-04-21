import { Component } from '@angular/core';
import { GAME_CONFIG } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string = 'minesweeper';
	boardSize: number = GAME_CONFIG.DEFAULT_BOARD_SIZE; // default value. todo: extract it from here

	updateBoardSize(event: number) {
		this.boardSize = event;
	}

	gameOverTimeout(): void {
		alert("Game over");
		this.updateBoardSize(GAME_CONFIG.DEFAULT_BOARD_SIZE);
	}
}
