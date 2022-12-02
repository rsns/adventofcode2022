import { readFile } from "../shared/read-file";

export function dayTwoSolution() {
    const tournamentResults = readFile('./src/day-2/input.txt').split(/\r?\n/);

    // define possible combinations and scores
    let combinations = [
        {
            value: 'A X',
            score: 4
        },
        {
            value: 'B Y',
            score: 5
        },
        {
            value: 'C Z',
            score: 6
        },
        {
            value: 'A Z',
            score: 3
        },
        {
            value: 'B X',
            score: 1
        },
        {
            value: 'C Y',
            score: 2
        },
        {
            value: 'C X',
            score: 7
        },
        {
            value: 'A Y',
            score: 8
        },
        {
            value: 'B Z',
            score: 9
        }
    ];
    let score = 0;

    tournamentResults.map(tournament => {
        combinations.map(rule => {
            if (rule.value === tournament) {
                score += rule.score; // assign score
            }
        })
    })

    console.log("dayTwoSolution", score)
}