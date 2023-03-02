type TGenerateGame = (elementSelector: string) => void;
type THitAndBounce = TBounce | false;
// @TODO (WB-54): turn direction into enum
type TBounce = { amount: number; direction: "x" | "y" };
