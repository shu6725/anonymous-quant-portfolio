const rawBase = import.meta.env.BASE_URL;

export const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function internalPath(path = '') {
  return `${basePath}${path.replace(/^\//, '')}`;
}
