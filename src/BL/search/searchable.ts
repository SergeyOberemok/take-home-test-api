export interface Searchable<T> {
  isSatisfied(criteria: T): boolean;
}
