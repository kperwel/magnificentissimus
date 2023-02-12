import { male } from "./names";
import { combineTags, Tag } from "./Tag";

export class Person {
  private static id = 0;
  private static getId() {
    return Person.id++;
  }
  private static getName() {
    return male.at(Person.id) ?? "End of Names";
  }

  public readonly id: number = Person.getId();
  public readonly name: string = Person.getName();
  public readonly parents: Array<Person> = [];
  private assigned: Tag | null = null;

  public get inherited(): Tag | null {
    if (this.parents.length === 0) {
      return null;
    }

    const parentAttributes = this.parents.flatMap((p) => p.all);
    return combineTags(parentAttributes);
  }

  public get assignable() {
    return this.parents.length === 0;
  }

  public get all() {
    const all = [];

    if (this.assigned) {
      all.push(this.assigned);
    }

    if (this.inherited) {
      all.push(this.inherited);
    }

    return combineTags(all);
  }

  public set tag(tag: Tag) {
    if (this.assignable) {
      this.assigned = tag;
    } else {
      console.warn("Cannot assign tag to not last in the tree");
    }
  }

  constructor(tag: Tag | null = null, parents: Array<Person> = []) {
    this.parents = parents;
    this.assigned = tag;
  }
}

export const createTitle = (tag: Tag) => tag;
