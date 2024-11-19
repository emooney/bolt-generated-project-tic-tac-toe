const board = document.getElementById('game-board');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    function createBoard() {
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
      }
    }

    function handleCellClick(event) {
      const index = event.target.dataset.index;
      if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWin();
        switchPlayer();
      }
    }

    function switchPlayer() {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          alert(`${currentPlayer} wins!`);
          resetGame();
          return;
        }
      }

      if (!gameBoard.includes('')) {
        alert("It's a draw!");
        resetGame();
      }
    }

    function resetGame() {
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => cell.textContent = '');
    }

    createBoard();
