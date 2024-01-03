import {z} from 'zod';
import {pipelineConnectionSchema} from './zod_schema/index';

export const twcAppSchema = z.object({
  date: z.string(),
  workSearchActivity: z.string(),
  jobTitle: z.string(),
  company: z.string(),
  pathriseId: z.number(),
  url: z.string().url().nullish(),
  connections: z.array(pipelineConnectionSchema),
});
export type TwcApp = z.infer<typeof twcAppSchema>;

export function assertIsTwcApp(x: unknown): asserts x is TwcApp {
  twcAppSchema.parse(x);
}

export function assertIsTwcApps(x: unknown[]): asserts x is TwcApp[] {
  x.every(assertIsTwcApp);
}
