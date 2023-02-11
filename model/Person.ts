import { male } from "./names";

export enum Tag {
  Strong = "Strong",
  Tall = "Tall",
  Fat = "Fat",
  Plump = "Plump",
  Weak = "Weak",
  Beardy = "Beardy",
  Short = "Shortness",
  Sage = "Sage",
  Quick = "Quick",
  Wisdom = "Wisdom",
  Jumpy = "Jumpy",
  Fighter = "Fighter",
  Good = "Good",
  Bad = "Bad",
  Evil = "Evil",
  Giant = "Giant",
  Conqueror = "Conqueror",
  Tyrant = "Tyrant",
  Slim = "Slim",
  Magician = "Magician",
}

const createKey = <T extends string>(keys: Array<T>) => keys.sort().join("+");
const createMapper = <T extends string>(
  ...mappings: Array<[Array<T>, T]>
) => {
  const map: Record<string, T> = {};

  const set = (...mapping: [Array<T>, T]) => {
    map[createKey(mapping[0])] = mapping[1];
  };

  const get = (keys: Array<T>) => map[createKey(keys)];

  mappings.forEach((mapping) => set(...mapping));

  return {
    get,
    set,
  };
};

const mapper = createMapper<Tag>(
  [[Tag.Bad, Tag.Bad], Tag.Evil],
  [[Tag.Tall, Tag.Tall], Tag.Giant],
  [[Tag.Beardy, Tag.Wisdom], Tag.Sage],
  [[Tag.Sage, Tag.Wisdom], Tag.Magician]
);

const combineAttributes = (attributes: Array<Tag>): Tag => {
  if (attributes.length === 1) {
    return attributes[0];
  }
  return mapper.get(attributes);
};

export class Person {
  private static id = 0;
  private static getId() {
    return Person.id++;
  }
  private static getName() {
    return male[Person.id];
  }

  public readonly id: number = Person.getId();
  public readonly name: string = Person.getName();

  public readonly parents: Array<Person> = [];

  public assigned: Tag | null = null;
  public get inherited(): Tag {
    const parentAttributes = this.parents.flatMap((p) => p.all);
    return combineAttributes(parentAttributes);
  }
  public get all() {
    const all = [];
    console.log(this.assigned, this.inherited);

    if (this.assigned) {
      all.push(this.assigned);
    }

    if (this.inherited) {
      all.push(this.inherited);
    }

    return combineAttributes(all);
  }

  constructor(tag: Tag | null = null, parents: Array<Person> = []) {
    this.parents = parents;
    this.assigned = tag;
  }
}

export const createTitle = (tags: Array<Tag>) => tags.join(" ");