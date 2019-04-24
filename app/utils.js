export function required() {
  throw new Error('Atributte is required but not passed!', arguments);
}