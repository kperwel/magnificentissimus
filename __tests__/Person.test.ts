import { Person } from "@/model/Person";
import { Tag } from "@/model/Tag";

describe("Attribute scoring", () => {
  it("Except to be evil", () => {
    const evil = new Person(null, [new Person(Tag.Bad), new Person(Tag.Bad)]);
    expect(evil.all).toBe(Tag.Evil);
  });

  it("Except to be giant", () => {
    const giant = new Person(null, [
      new Person(Tag.Tall),
      new Person(Tag.Tall),
    ]);
    expect(giant.all).toBe(Tag.Giant);
  });

  it("Except to be as single parent", () => {
    const oneParent = new Person(null, [new Person(Tag.Bad)]);
    expect(oneParent.all).toBe(Tag.Bad);
  });
});
