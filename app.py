from flask import Flask, jsonify, render_template
import chess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-endgame', methods=['GET'])
def get_endgame():
    board = chess.Board()
    board.clear()
    board.set_piece_at(chess.E1, chess.Piece(chess.KING, chess.WHITE))
    board.set_piece_at(chess.E8, chess.Piece(chess.KING, chess.BLACK))
    board.set_piece_at(chess.H1, chess.Piece(chess.ROOK, chess.WHITE))
    return jsonify({'fen': board.fen()})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
