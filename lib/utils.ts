import { customAlphabet } from "nanoid";

/**
 * This function generates a random 9 character string and combines it with "24EVG" to
 * create an ID.
 * @returns a string that consists of the characters "24EVG" followed by a randomly generated 9
 * character string made up of numbers and uppercase letters.
 */
export function generateId() {
  // generate random 9 character string eg: "EQLWXI1W6"
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nanoid = customAlphabet(alphabet, 9);

  // combine initials and random number to generate id
  const generatedId = "24EVG" + nanoid();

  return generatedId;
}
