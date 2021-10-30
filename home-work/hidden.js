function foundationMessage(string) {
  const sentences = string
    .toLowerCase()
    .split(/[\?|\!|\.]+\s+/)
    .filter(Boolean);
  const allDecodedWords = sentences.reduce(
    (decoded, sentence, sentenceIdx, sentencesArray) => {
      if (
        sentenceIdx == 0 ||
        (sentenceIdx > decoded.length &&
          sentenceIdx < sentencesArray.length - 1)
      ) {
        const encodedWords = sentence.split(/\s*[,|'|"|-]*\s"*/);
        const decodedWords = encodedWords.map((encodedWord, encodedWordIdx) => {
          return sentencesArray[sentenceIdx + encodedWordIdx + 1].split(
            /\s*[,|'|"|-]*\s"*/
          )[encodedWord.length - 1];
        });
        decodedWords[0] =
          decodedWords[0][0].toUpperCase() + decodedWords[0].slice(1);
        decodedWords[decodedWords.length - 1] =
          decodedWords[decodedWords.length - 1] + ".";
        return [...decoded, ...decodedWords];
      } else {
        return decoded;
      }
    },
    []
  );
  return allDecodedWords.join(" ");
}
console.log(
  foundationMessage(
    `Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.`
  )
);
