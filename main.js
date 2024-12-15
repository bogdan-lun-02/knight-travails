function knightMoves(start, end) {
	const queue = [start];
	const moves = [
		[1, 2],
		[2, 1],
		[-1, 2],
		[1, -2],
		[-2, 1],
		[-2, -1],
		[-1, -2],
		[2, -1],
	];
	const previousSquares = {};
	const visited = new Set();

	while (queue.length > 0) {
		const current = queue.shift();

		for (const move of moves) {
			const possibleLoc = [current[0] + move[0], current[1] + move[1]];
			if (!visited.has(possibleLoc.toString())) {
				if (Math.min(...possibleLoc) >= 0 && Math.max(...possibleLoc) <= 7) {
					if (!previousSquares[possibleLoc]) {
						previousSquares[possibleLoc] = [];
					}
					visited.add(possibleLoc.toString());
					previousSquares[possibleLoc].push(current);
					queue.push(possibleLoc);
				}
			}
		}

		if (current.toString() === end.toString()) {
			let pathLog = [end];
			let previous = previousSquares[end];
			while (previous !== previousSquares[start]) {
				pathLog = pathLog.concat(previous);
				previous = previousSquares[previous];
			}

			console.log(
				`You made it in ${pathLog.length - 1} moves!  Here's your path:`
			);
			return pathLog.reverse();
		}
	}
}
