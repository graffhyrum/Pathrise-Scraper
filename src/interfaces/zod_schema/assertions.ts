import {
  type AppProcess,
  appProcessSchema,
  rootSchema,
  type RootType,
} from './index';

export function assertIsAppsSchema(x: unknown[]): asserts x is AppProcess[] {
  x.every(app => appProcessSchema.parse(app));
}

export function assertIsRootSchema(x: unknown): asserts x is RootType {
  rootSchema.parse(x);
}
