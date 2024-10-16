export const TrimNumber = (number: number) => {
  const givenNumber = number;
  const trimmedNumber = parseInt(givenNumber.toString(), 10);

  return trimmedNumber;
}