export const PROMISES: Record<string, Promise<string | number>> = {
  instant: new Promise<string>((resolve) => setTimeout(() => resolve('instant'), 500)),
  medium: new Promise<string>((resolve) => setTimeout(() => resolve('medium'), 2000)),
  slow: new Promise<string>((resolve) => setTimeout(() => resolve('slow'), 4000)),
  rejected: new Promise((_, reject) => reject('Rejected')),
  instantNumber: new Promise<number>((resolve) => resolve(42))
};
