/**
 * Resolves asset paths for public folder assets.
 * Automatically prepends the base URL for correct paths in production (GitHub Pages).
 *
 * @param path - The path to the asset relative to public folder (e.g., '/avatar.jpg')
 * @returns The full path including base URL
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if base already ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
