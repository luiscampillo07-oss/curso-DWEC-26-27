//E1
export function createTurnDispenser(letter: string): () => string {
  let next = 1;

}

//E2
export type Light = 'rojo' | 'verde' | 'ambar';
export interface TrafficLight {
  current: () => Light;
  next: () => Light;
}
export function createTrafficLight(): TrafficLight {
  let light: Light[] = ['rojo', 'verde', 'ambar'];
  let index = 0;
  return {
    current() {
      return light[index]
    },
    next() {
      index = (index + 1) % light.length;
      return light[index];
    }
  }
}


//E3
export type LoginAnswe = 'correcta' | 'incorrecta' | 'bloqueada';

export function createPasswordCheck(password: LoginAnswe): (attempt: string) => LoginAnswe {
  let failures = 0;
  let blocked = false;

  return (attempt: string): LoginAnswe => {

    if (blocked) {
      return blocked;
    }

    if (attempt === password) {
      return 'correcta';
    } else {
      failures++;
    }

    if (failures >= 3) {
      return 'bloqueada';
    } else {
      return 'incorrecta';
    }
  }
}

