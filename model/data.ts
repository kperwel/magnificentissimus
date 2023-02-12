import { Person } from "./Person";
import { Tag } from "./Tag";

export const example = new Person(null, [
  new Person(Tag.Bad),
  new Person(null, [
    new Person(Tag.Bad),
    new Person(Tag.Bad),
  ]),
]);
