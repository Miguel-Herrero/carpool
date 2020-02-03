// TODO: Return Result type, instead of Promise
export interface UseCase<T> {
  exec(_: T): Promise<void>;
}
