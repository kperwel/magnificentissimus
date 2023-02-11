import { Person, Tag } from "@/model/Person";

describe("Attribute scoring", () => {
    const evil = new Person(null, [
        new Person(Tag.Bad, []),
        new Person(Tag.Bad, [])
    ]);

    const giant = new Person(null, [
        new Person(Tag.Tall, []),
        new Person(Tag.Tall, [])
    ]);

    it("Except to be evil", () => {
        expect(evil.all).toBe(Tag.Evil);
    });

    it("Except to be evil", () => {
        expect(giant.all).toBe(Tag.Giant);
    });

})

