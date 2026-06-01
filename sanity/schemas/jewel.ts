import { defineField, defineType } from "sanity";

export const jewel = defineType({
  name: "jewel",
  title: "Jewel (Founder)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Order (1-7)", type: "number" }),
    defineField({ name: "title", title: "Honorific / Role", type: "string", description: "e.g. Philosopher of the Founders" }),
    defineField({ name: "image", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biography", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "birth", title: "Born", type: "string" }),
    defineField({ name: "death", title: "Died", type: "string" }),
  ],
});
