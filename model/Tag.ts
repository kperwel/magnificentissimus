import { createMapper } from "./utils/map";
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
  NotDefined = "NotDefined",
  Monster = "Monster",
  Lawful = "Lawful"
}

export const mapper = createMapper<Tag>(
  [[Tag.Bad, Tag.Bad], Tag.Evil],
  [[Tag.Good, Tag.Good], Tag.Lawful],
  [[Tag.Evil, Tag.Giant], Tag.Monster],
  [[Tag.Tall, Tag.Tall], Tag.Giant],
  [[Tag.Beardy, Tag.Wisdom], Tag.Sage],
  [[Tag.Sage, Tag.Wisdom], Tag.Magician]
);

mapper.prettyPrint();

export const combineTags = (attributes: Array<Tag>): Tag => {
  if (attributes.length === 1) {
    return attributes[0];
  }
  return mapper.get(attributes) ?? Tag.NotDefined;
};

export function getPair(tag: Tag) { return mapper.getRaw().find((t) => t[1] === tag); }