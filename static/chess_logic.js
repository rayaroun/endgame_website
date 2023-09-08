var boardElement = 'board';
var boardConfig = {
    position: 'start',
    draggable: true
};

var board,
    game = new Chess();

function onDragStart (source, piece, position, orientation) {
    if (game.game_over()) return false;
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}

function onDrop (source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });
    if (move === null) return 'snapback';
    updateBoard();
}

function updateBoard() {
    board.position(game.fen());
}

function initializeBoard() {
    fetch('/get-endgame')
        .then(response => response.json())
        .then(data => {
            game.load(data.fen);
            var config = {
                draggable: true,
                position: data.fen,
                onDragStart: onDragStart,
                onDrop: onDrop,
                pieceTheme: '/static/img/chesspieces/wikipedia/{piece}.png'
            };
            board = ChessBoard('board', config);
        });
}
