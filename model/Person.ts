export enum Attribute {
  Strong = "Strong",
  Tall = "Tall",
  Fat = "Fat",
  Corpulent = "Corpulent",
  Weak = "Weak",
  Beardess = "Beardess",
  Short = "Shortness",
  Quick = "Quick",
  Wisdom = "Wisdom",
  Jumpy = "Jumpy",
  Fighter = "Fighter",
  Good = "Good",
  Bad = "Bad",
  Evil = "Evil",
  Giant = "Gigantic",
  Conqueror = "Conqueror",
  Tyrant = "Tyrant",
  Debug = "Debug",
}

const priority = [...Object.values(Attribute)].reverse();

const titles: Record<Attribute, string> = {
  [Attribute.Strong]: "Strong",
  [Attribute.Weak]: "Weak",
  [Attribute.Tall]: "High",
  [Attribute.Fat]: "Fat",
  [Attribute.Corpulent]: "Corpulent",
  [Attribute.Beardess]: "Beardy",
  [Attribute.Short]: "Small",
  [Attribute.Quick]: "Quick",
  [Attribute.Wisdom]: "Smart",
  [Attribute.Jumpy]: "Flyer",
  [Attribute.Fighter]: "Fighting",
  [Attribute.Good]: "Good",
  [Attribute.Bad]: "Bad",
  [Attribute.Evil]: "Evil",
  [Attribute.Conqueror]: "Conqueror",
  [Attribute.Giant]: "Gigantic",
  [Attribute.Tyrant]: "Tyrant",
  [Attribute.Debug]: "###",
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

const count = (attribute: Attribute, price: Array<Attribute>) => price.filter(p => p === attribute).length;
const enough = (scoring: Scoring, price: Array<Attribute>): boolean => {
  return price.every((atribute, _index, inPrice) => {
    const occurences = count(atribute, inPrice);
    return scoring[atribute] >= occurences;
  });
}

const createAttributesShop = (queue: Array<Attribute>) => {
  const scoring: Scoring = {
    [Attribute.Strong]: 0,
    [Attribute.Tall]: 0,
    [Attribute.Fat]: 0,
    [Attribute.Beardess]: 0,
    [Attribute.Short]: 0,
    [Attribute.Quick]: 0,
    [Attribute.Wisdom]: 0,
    [Attribute.Jumpy]: 0,
    [Attribute.Fighter]: 0,
    [Attribute.Good]: 0,
    [Attribute.Bad]: 0,
    [Attribute.Evil]: 0,
    [Attribute.Giant]: 0,
    [Attribute.Corpulent]: 0,
    [Attribute.Weak]: 0,
    [Attribute.Debug]: 0,
    [Attribute.Conqueror]: 0,
    [Attribute.Tyrant]: 0
  };
  return [
    scoring,
    (attribute: Attribute) => {
      scoring[attribute]++;

      const having = (...what: Array<Attribute>) => {
        if (!enough(scoring, what)) {
          return {
            gives: (_give: Attribute) => ({ having }),
            cancels: (_cancel: Attribute) => ({ having }),
          };
        }

        return {
          gives: (give: Attribute) => {
            for (let attr of what) {
              scoring[attr] -= 1;
            }
            queue.push(give);
            return { having };
          },
          cancels: (cancel: Attribute) => {
            if (scoring[cancel] > 0) {
              for (let attr of what) {
                scoring[attr] -= 1;
              }
              scoring[cancel] -= 1;
            }
            return { having };
          },
        };
      };

      return { having };
    },
  ] as const;
};

function scoreAttributes(attributes: Array<Attribute>): Scoring {
  console.log(attributes);
  let queue = [...attributes];
  const [scoring, consider] = createAttributesShop(queue);

  let attribute: Attribute | undefined;
  while ((attribute = queue.shift())) {
    // prettier-ignore
    consider(attribute)
      .having(Attribute.Bad).cancels(Attribute.Good)
      .having(Attribute.Good).cancels(Attribute.Bad)
      .having(Attribute.Tall).cancels(Attribute.Short)
      .having(Attribute.Strong).cancels(Attribute.Weak)
      .having(Attribute.Weak).cancels(Attribute.Strong)
      .having(Attribute.Short).cancels(Attribute.Tall)
      .having(Attribute.Bad, Attribute.Bad).gives(Attribute.Evil)
      .having(Attribute.Tall, Attribute.Tall).gives(Attribute.Giant)
      .having(Attribute.Corpulent, Attribute.Corpulent).gives(Attribute.Fat)
      .having(Attribute.Strong, Attribute.Fighter).gives(Attribute.Conqueror)
      .having(Attribute.Evil, Attribute.Fighter).gives(Attribute.Tyrant)
      .having(Attribute.Bad, Attribute.Fighter).gives(Attribute.Debug);
  }

  return scoring;
}

export function createTitle(attributes: Array<Attribute>): string {
  const score = scoreAttributes(attributes);
  const scoredTitles = priority
    .filter((a) => score[a] !== 0)
    .map((scoredAttribute) => titles[scoredAttribute]);
  console.log("START");
  console.log(attributes, score);
  console.log(scoredTitles);
  console.log("END");
  return scoredTitles.length > 0 ? `The ${scoredTitles.join(" ")}` : "";
}
