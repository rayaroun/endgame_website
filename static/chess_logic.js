var boardElement = 'board';
var boardConfig = {
    position: 'start',
    draggable: true
};
var board = ChessBoard('board', {
    position: 'start',
    pieceTheme: '/static/img/chesspieces/wikipedia/{piece}.png'
});

fetch('/get-endgame')
    .then(response => response.json())
    .then(data => {
        board.position(data.fen);
    });
