import { Attribute, Person } from "./Person";
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
  attributes: Array<Attribute>;
}

export const tasks: Array<Task> = [
  {
    id: 0,
    person: person0,
    attributes: [Attribute.Bad, Attribute.Good],
  },
  {
    id: 1,
    person: person1,
    attributes: [
      Attribute.Bad,
      Attribute.Fighter,
      Attribute.Corpulent,
      Attribute.Tall,
    ],
  },
  {
    id: 2,
    person: person2,
    attributes: [
      Attribute.Bad,
      Attribute.Fighter,
      Attribute.Corpulent,
      Attribute.Tall,
    ],
  },
  {
    id: 3,
    person: person3,
    attributes: [
      Attribute.Bad,
      Attribute.Fighter,
      Attribute.Corpulent,
      Attribute.Tall,
    ],
  },
  {
    id: 4,
    person: person4,
    attributes: [
      Attribute.Bad,
      Attribute.Fighter,
      Attribute.Corpulent,
      Attribute.Tall,
    ],
  },
  {
    id: 5,
    person: conwueror,
    attributes: [Attribute.Good, Attribute.Bad, Attribute.Tall, Attribute.Strong, Attribute.Beardy, Attribute.Fighter],
  },
  {
    id: 6,
    person: wizard,
    attributes: [
      Attribute.Good,
      Attribute.Wisdom,
      Attribute.Strong,
      Attribute.Beardy,
      Attribute.Tall,
    ],
  },
];
