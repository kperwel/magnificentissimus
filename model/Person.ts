export enum Attribute {
  Strength = "Strength",
  Tallness = "Tallness",
  Fattiness = "Fattiness",
  Beardess = "Beardess",
  Shortness = "Shortness",
  Quickness = "Quickness",
  Wisdom = "Wisdom",
  Jumpy = "Jumpy",
  Fighter = "Fighter",
  Good = "Good",
  Bad = "Bad",
  Evil = "Evil",
  Gigantic = "Gigantic",
}

const priority = [...Object.values(Attribute)].reverse();

const titles: Record<Attribute, string> = {
  [Attribute.Strength]: "Mightly",
  [Attribute.Tallness]: "High",
  [Attribute.Fattiness]: "Fat",
  [Attribute.Beardess]: "Beardy",
  [Attribute.Shortness]: "Small",
  [Attribute.Quickness]: "Fast",
  [Attribute.Wisdom]: "Smart",
  [Attribute.Jumpy]: "Flyer",
  [Attribute.Fighter]: "Fighting",
  [Attribute.Good]: "Good",
  [Attribute.Bad]: "Bad",
  [Attribute.Evil]: "Evil",
  [Attribute.Gigantic]: "Gigantic",
};

export interface Person {
  id: number;
  name: string;
  targetAttributes?: Array<Attribute>;
  attribute?: Attribute;
  parents?: [Person, Person];
}

export const attributes = Object.entries(Attribute);

export function getAllAttributes(person: Person): Array<Attribute> {
  let attributes: Array<Attribute> = [];

  if (person.attribute) {
    attributes.push(person.attribute);
  }

  if (!person.parents) {
    return attributes;
  }

  if (person.parents[0] !== null) {
    attributes.push(...getAllAttributes(person.parents[0]));
  }

  if (person.parents[1] !== null) {
    attributes.push(...getAllAttributes(person.parents[1]));
  }

  return attributes;
}

type Scoring = Record<Attribute, number>;

function scoreAttributes(attributes: Array<Attribute>): Scoring {
  let queue = [...attributes];

  const accumulator: Scoring = {
    [Attribute.Strength]: 0,
    [Attribute.Tallness]: 0,
    [Attribute.Fattiness]: 0,
    [Attribute.Beardess]: 0,
    [Attribute.Shortness]: 0,
    [Attribute.Quickness]: 0,
    [Attribute.Wisdom]: 0,
    [Attribute.Jumpy]: 0,
    [Attribute.Fighter]: 0,
    [Attribute.Good]: 0,
    [Attribute.Bad]: 0,
    [Attribute.Evil]: 0,
    [Attribute.Gigantic]: 0,
  };

  let attribute: Attribute | undefined;
  while ((attribute = queue.shift())) {
    accumulator[attribute]++;

    if (accumulator[Attribute.Tallness] > 1) {
      accumulator[Attribute.Tallness] = 0;
      queue.push(Attribute.Gigantic);
    }

    if (attribute === Attribute.Bad && accumulator[Attribute.Good] > 0) {
      accumulator[Attribute.Good]--;
      accumulator[Attribute.Good]--;
      continue;
    }
    if (attribute === Attribute.Good && accumulator[Attribute.Bad] > 0) {
      accumulator[Attribute.Bad]--;
      accumulator[Attribute.Good]--;
      continue;
    }
  }

  return accumulator;
}

export function createTitle(attributes: Array<Attribute>): string {
  const score = scoreAttributes(attributes);

  const scoredTitles = priority
    .filter((a) => score[a] !== 0)
    .map((scoredAttribute) => titles[scoredAttribute]);
  return scoredTitles.length > 0 ? `The ${scoredTitles.join(" ")}` : "";
}
