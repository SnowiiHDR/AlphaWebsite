import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "date", title: "Date & Time", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "rsvpUrl", title: "RSVP URL", type: "url" }),
  ],
});
