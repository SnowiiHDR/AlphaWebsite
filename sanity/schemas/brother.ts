import { defineField, defineType } from "sanity";

export const brother = defineType({
  name: "brother",
  title: "Brother",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "lineName", title: "Line Name", type: "string" }),
    defineField({ name: "lineNumber", title: "Line Number", type: "number" }),
    defineField({ name: "crossingDate", title: "Crossing Date", type: "date" }),
    defineField({ name: "school", title: "School", type: "string", description: "Cornell, Drexel, etc." }),
    defineField({ name: "role", title: "Chapter Role", type: "string", description: "President, VP, etc. (optional)" }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
  ],
});
