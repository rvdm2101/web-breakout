import { GameState } from "../game-config";

export const isPaused = (gameState: GameState): gameState is GameState.PAUSE =>
  gameState === GameState.PAUSE;

export const isPlaying = (gameState: GameState): gameState is GameState.PLAY =>
  gameState === GameState.PLAY;

export const isEnded = (gameState: GameState): gameState is GameState.ENDED =>
  gameState === GameState.ENDED;
