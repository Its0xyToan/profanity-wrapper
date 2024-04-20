export function checkOne(string: string): Promise<Result>;
export function checkMultiple(strings: string[]): Promise<Result>;

/**
 * The result of a request
 */
export type Result = {
    /**
     * - Indicates if the string(s) have profanity in it/them.
     */
    isProfanity: boolean;
    /**
     * - The score of profanity.
     */
    score: number;
    /**
     * - If flagged true, shows the world that was flagged.
     */
    flaggedFor: (string | undefined);
};
