import { Attribute, createTitle, getAllAttributes, Person } from "./Person";

export const tree: Person = {
  name: "John",
  targetAttributes: [Attribute.Good, Attribute.Beardess, Attribute.Jumpy],
  id: 0,
  parents: [
    {
      name: "Jennefer",
      id: 1,
      parents: [
        {
          name: "Albert",
          // attribute: Attribute.Good,
          id: 2,
        },
        {
          name: "Eve",
          // attribute: Attribute.Good,
          id: 3,
        },
      ],
    },
    {
      name: "John",
      id: 4,
      //   attribute: Attribute.Quickness,
    },
  ],
};
