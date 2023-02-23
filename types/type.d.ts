type TGenerateGame = (elementSelector: string) => void;
type THitAndBounce = TBounce | false;
type TBounce = { amount: number; direction: "x" | "y" };
