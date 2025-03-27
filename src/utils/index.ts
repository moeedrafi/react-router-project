export function slugify(name: string): string {
  return name.toLowerCase().split(" ").join("-");
}
