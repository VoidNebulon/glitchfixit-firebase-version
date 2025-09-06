'use server';
/**
 * @fileOverview Estimates the reading time of a blog post given its content.
 *
 * - estimateBlogPostReadingTime - A function that estimates the reading time of a blog post.
 * - EstimateBlogPostReadingTimeInput - The input type for the estimateBlogPostReadingTime function.
 * - EstimateBlogPostReadingTimeOutput - The return type for the estimateBlogPostReadingTime function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateBlogPostReadingTimeInputSchema = z.object({
  content: z
    .string()
    .describe('The content of the blog post to estimate reading time for.'),
});
export type EstimateBlogPostReadingTimeInput = z.infer<
  typeof EstimateBlogPostReadingTimeInputSchema
>;

const EstimateBlogPostReadingTimeOutputSchema = z.object({
  readingTimeMinutes: z
    .number()
    .describe('The estimated reading time of the blog post in minutes.'),
});
export type EstimateBlogPostReadingTimeOutput = z.infer<
  typeof EstimateBlogPostReadingTimeOutputSchema
>;

export async function estimateBlogPostReadingTime(
  input: EstimateBlogPostReadingTimeInput
): Promise<EstimateBlogPostReadingTimeOutput> {
  return estimateBlogPostReadingTimeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateBlogPostReadingTimePrompt',
  input: {schema: EstimateBlogPostReadingTimeInputSchema},
  output: {schema: EstimateBlogPostReadingTimeOutputSchema},
  prompt: `You are an expert blog post reading time estimator.

  Given the content of a blog post, estimate how long it will take to read in minutes.
  Be as accurate as possible.

  Content: {{{content}}}
  `,
});

const estimateBlogPostReadingTimeFlow = ai.defineFlow(
  {
    name: 'estimateBlogPostReadingTimeFlow',
    inputSchema: EstimateBlogPostReadingTimeInputSchema,
    outputSchema: EstimateBlogPostReadingTimeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
