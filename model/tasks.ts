import { Tag, Person } from "./Person";
import {
  person0,
  person1,
  person2,
  person3,
  person4,
  conwueror,
  wizard,
} from "./persons";

interface Task {
  id: number;
  person: Person;
  attributes: Array<Tag>;
}

export const tasks: Array<Task> = [
  {
    id: 0,
    person: person0,
    attributes: [Tag.Bad, Tag.Good],
  },
  {
    id: 1,
    person: person1,
    attributes: [
      Tag.Bad,
      Tag.Fighter,
      Tag.Plump,
      Tag.Tall,
    ],
  },
  {
    id: 2,
    person: person2,
    attributes: [
      Tag.Bad,
      Tag.Fighter,
      Tag.Plump,
      Tag.Tall,
    ],
  },
  {
    id: 3,
    person: person3,
    attributes: [
      Tag.Bad,
      Tag.Fighter,
      Tag.Plump,
      Tag.Tall,
    ],
  },
  {
    id: 4,
    person: person4,
    attributes: [
      Tag.Bad,
      Tag.Fighter,
      Tag.Plump,
      Tag.Tall,
    ],
  },
  {
    id: 5,
    person: conwueror,
    attributes: [Tag.Good, Tag.Bad, Tag.Tall, Tag.Strong, Tag.Beardy, Tag.Fighter],
  },
  {
    id: 6,
    person: wizard,
    attributes: [
      Tag.Good,
      Tag.Wisdom,
      Tag.Strong,
      Tag.Beardy,
      Tag.Tall,
    ],
  },
];
