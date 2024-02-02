import { CodeLine } from "@/types/props";

export function isStringArray(o: unknown): o is string[] {
  return !!o && Array.isArray(o) && o.every((e) => typeof e === "string");
}

export function isCodeLineArray(o: unknown): o is CodeLine[] {
  return !!o && Array.isArray(o) && o.every((e) => typeof e === "object" && "code" in e);
}
