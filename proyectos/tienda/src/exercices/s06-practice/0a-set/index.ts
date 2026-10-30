// Enunciado: Set
// Autor: Luis CC
// Investigación: Fuentes consultadas


export function uniqueTags(post: string[][]): string[] {
  const uniques = new Set(post.flat());
  const result = [];
  for (const tag of uniques) {
    result.push(tag);
  }
  return result;
}

export function firstRepeated(votes: string[]): string | undefined {
  const unique = new Set<string>();
  for (const vote of votes) {
    if (unique.has(vote)) {
      return vote;
    }
    unique.add(vote);
  }
  return undefined;
}

export function inBoth(a: string[], b: string[]): string[] {
  const setB = new Set(b);
  const result = [];

  for (const song of a) {
    if (setB.has(song)) {
      result.push(song);
    }
  }
  return result;
}
