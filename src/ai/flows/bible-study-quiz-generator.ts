'use server';

/**
 * @fileOverview Generates a Bible study quiz from input text.
 *
 * - generateQuiz - A function that generates a quiz based on the provided Bible study text.
 * - BibleStudyQuizInput - The input type for the generateQuiz function.
 * - BibleStudyQuizOutput - The return type for the generateQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BibleStudyQuizInputSchema = z.string().describe('The text of the Bible study.');
export type BibleStudyQuizInput = z.infer<typeof BibleStudyQuizInputSchema>;

const BibleStudyQuizOutputSchema = z.object({
  quiz: z.string().describe('The generated quiz questions and answers.'),
});
export type BibleStudyQuizOutput = z.infer<typeof BibleStudyQuizOutputSchema>;

export async function generateQuiz(inputText: BibleStudyQuizInput): Promise<BibleStudyQuizOutput> {
  return bibleStudyQuizFlow(inputText);
}

const bibleStudyQuizPrompt = ai.definePrompt({
  name: 'bibleStudyQuizPrompt',
  input: {schema: BibleStudyQuizInputSchema},
  output: {schema: BibleStudyQuizOutputSchema},
  prompt: `You are a helpful assistant designed to generate a comprehension quiz from bible study text.

  Generate a quiz with questions and answers based on the following text:

  {{inputText}}
  `,
});

const bibleStudyQuizFlow = ai.defineFlow(
  {
    name: 'bibleStudyQuizFlow',
    inputSchema: BibleStudyQuizInputSchema,
    outputSchema: BibleStudyQuizOutputSchema,
  },
  async inputText => {
    const {output} = await bibleStudyQuizPrompt(inputText);
    return output!;
  }
);
