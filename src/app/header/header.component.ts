import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GAME_CONFIG } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	private intervalId: any;
	timeLeft: number = GAME_CONFIG.DEFAULT_INITIAL_TIME;

	@Output() gameOver: EventEmitter<boolean>;

	constructor() {
		this.gameOver = new EventEmitter<boolean>();
		this.intervalId = setInterval(() => this.timeLeft > 0 ? this.timeLeft-- : this.sendGameOver(), 1000);
	}

	sendGameOver(): void {
		clearInterval(this.intervalId);
		this.gameOver.emit(true);
	}
}
