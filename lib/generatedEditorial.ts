import mapping from "@/public/editorial/generated/manifest.json";

const images = new Map(mapping.map(item => [item.slug, {
  src: `/editorial/generated/${item.slug}.webp`,
  width: item.width,
  height: item.height,
  note: item.note,
  batch: "batch" in item ? String(item.batch) : undefined,
}]));

export function generatedEditorialImage(slug: string) {
  return images.get(slug);
}

export function isProtectedEditorialArticle(slug: string) {
  return images.has(slug) && images.get(slug)?.batch === undefined;
}
