import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payLoad: { guessedWord, letterMatchCount }
  });

  if (guessedWord === secretWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS
    });
  }
};
