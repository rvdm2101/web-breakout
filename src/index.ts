/**
 * Create canvas inside the provided container
 *
 * @param elementSelector string - the selector for the container element
 */
const generateGame: TGenerateGame = (elementSelector) => {
    const container = document.querySelector(elementSelector);
    if (!container) {
        alert("Container element not found");
        return;
    }

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
}
export default generateGame;