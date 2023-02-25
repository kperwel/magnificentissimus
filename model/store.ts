import { atom } from "jotai";
import { Tag } from "./Tag";

export const selections = atom<Record<number, Tag>>({});