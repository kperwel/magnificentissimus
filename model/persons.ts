import { boyNames } from "./names";
import { girlNames } from "./names";
import { Attribute, Person } from "./Person";

let id = 0;
const createRandomBoy = () => ({
  id: id++,
  girl: false,
  name: boyNames.at(id) || "",
});

const createRandomGirl = () => ({
  id: id++,
  girl: true,
  name: girlNames.at(id) || "",
});



// Evil
export const person0: Person = {
  ...createRandomBoy(),
  targetAttributes: [Attribute.Evil, Attribute.Evil],
  parents: [
    {
      ...createRandomBoy(),
    },
    {
      ...createRandomGirl(),
    },
  ],
};

// Fat
export const person1: Person = {
  ...createRandomBoy(),
  targetAttributes: [Attribute.Corpulent, Attribute.Corpulent],
  parents: [
    {
      ...createRandomBoy(),
    },
    {
      ...createRandomGirl(),
    },
  ],
};


// Giant
export const person2: Person = {
  ...createRandomBoy(),
  targetAttributes: [Attribute.Tall, Attribute.Tall],
  parents: [
    {
      ...createRandomBoy(),
      parents: [
        {
          ...createRandomBoy(),
        },
        {
          ...createRandomGirl(),
        },
      ],
    },
    {
      ...createRandomGirl(),
    },
  ],
};



// Evil Giant
export const person3: Person = {
  ...createRandomBoy(),
  targetAttributes: [Attribute.Tall, Attribute.Tall, Attribute.Bad, Attribute.Bad],
  parents: [
    {
      ...createRandomBoy(),
      parents: [
        {
          ...createRandomBoy(),
        },
        {
          ...createRandomGirl(),
        },
      ],
    },
    {
      ...createRandomGirl(),
      parents: [
        {
          ...createRandomBoy(),
        },
        {
          ...createRandomGirl(),
        },
      ],
    },
  ],
};


// Tyrant
export const person4: Person = {
  ...createRandomBoy(),
  targetAttributes: [Attribute.Evil, Attribute.Fighter],
  parents: [
    {
      ...createRandomBoy(),
      parents: [
        {
          ...createRandomBoy(),
        },
        {
          ...createRandomGirl(),
        },
      ],
    },
    {
      ...createRandomGirl(),
    },
  ],
};