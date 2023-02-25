import { getMaleName, getNameFor } from "@/model/names";
import { fillFamilyTreeFor, Person } from "@/model/Person";
import { Tag } from "@/model/Tag";
import { getAtLooped } from "@/model/utils/array";

describe("Attribute scoring", () => {
  it("Expect to not to have a slot", () => {
    const giantTree = fillFamilyTreeFor(Tag.Bad);
    expect(giantTree.target).toBe(Tag.Bad);
    expect(giantTree.parents[0]).not.toBeDefined();
  });

  it("Expect to have a slot for a parent", () => {
    const giantTree = fillFamilyTreeFor(Tag.Giant);
    expect(giantTree.target).toBe(Tag.Giant);
    expect(giantTree.parents[0]).toBeDefined();
    expect(giantTree.parents[0].parents[0]).not.toBeDefined();
  });
});

describe("Array util", () => {
it("Get looped value for a array", () => {
    expect(getAtLooped([0, 1, 2], 3)).toBe(0);
    expect(getAtLooped([0, 1, 2], -1)).toBe(2);
    expect(getAtLooped([0, 1, 2], 3 * 100)).toBe(0);
    expect(getAtLooped([0, 1, 2], -3 * 100)).toBe(0);
  });
});
