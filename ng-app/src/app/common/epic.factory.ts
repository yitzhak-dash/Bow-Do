import { EpicMiddleware } from 'redux-observable';

export interface EpicFactory {
  createEpic<T, S>(): EpicMiddleware<T, S>;
}
