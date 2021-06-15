let chess = 'BISHOP';
let res = chess.toLowerCase();

switch(chess, res) {
    case 'pawn':
        console.log('2 houses forward in the first move, else just one. diagonally forward when capturing an opponents chess piece');
        break;
    
    case 'bishop':
        console.log('The bishop can move in any direction diagonally, so long as it is not obstructed by another piece.');
        break;    
    default:
        console.log('Error');
        break;
}