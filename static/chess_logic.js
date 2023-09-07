var boardElement = 'board';
var boardConfig = {
    position: 'start',
    draggable: true
};
var board = ChessBoard(boardElement, boardConfig);

fetch('/get-endgame')
    .then(response => response.json())
    .then(data => {
        board.position(data.fen);
    });
