export function createVisitLog() {
  const visitsMap = new Map<number, number>();

  return {
    visit(id: number): void {
      visitsMap.set(id, (visitsMap.get(id) || 0) + 1);
    },
    visits(id: number): number {
      return visitsMap.get(id) || 0;
    },
    mostVisited(): number | undefined {
      let maxNum: number | undefined = undefined;
      let max = 0;

      for (const [id, visits] of visitsMap) {
        if (visits > max) {
          max = visits;
          maxNum = id;
        }
      }
      return maxNum;
    }
  }
}

