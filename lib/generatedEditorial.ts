import mapping from "@/public/editorial/generated/manifest.json";

const images = new Map(mapping.map(item => [item.slug, {
  src: `/editorial/generated/${item.slug}.webp`,
  width: item.width,
  height: item.height,
  note: item.note,
}]));

export function generatedEditorialImage(slug: string) {
  return images.get(slug);
}
