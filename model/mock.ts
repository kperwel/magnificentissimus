import { names } from "./names";
import { Attribute, createTitle, getAllAttributes, Person } from "./Person";
import { getRandom } from "./utils";

let id = 0;
const createRandom = () => ({
  id: id++,
  name: names.at(id) || "",
});

export const tree: Person = {
  ...createRandom(),
  targetAttributes: [Attribute.Good, Attribute.Beardess, Attribute.Jumpy],
  parents: [
    {
      ...createRandom(),
      parents: [
        {
          ...createRandom(),
        },
        {
          ...createRandom(),
          parents: [
            {
              ...createRandom(),
            },
            {
              ...createRandom(),
            },
          ],
        },
      ],
    },
    {
      ...createRandom(),
    },
  ],
};
