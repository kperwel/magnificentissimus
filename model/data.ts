import { Person } from "./Person";
import { Tag } from "./Tag";

export const example = new Person(null, [
  new Person(null, [
    new Person(),
    new Person(),
  ]),
  new Person(null, [
    new Person(),
    new Person(),
  ]),
]);
