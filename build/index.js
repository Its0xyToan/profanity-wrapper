'use strict';

const BASE_URL = "https://vector.profanity.dev";

const request = async (message) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    return await res.json()
};

/**
 * The result of a request
 * @typedef {Object} Result
 * @property {boolean} isProfanity - Indicates if the string(s) have profanity in it/them.
 * @property {number} score - The score of profanity.
 * @property {(string|undefined)} flaggedFor - If flagged true, shows the world that was flagged.
 */

/**
 * Checks if one string has profanity in it !
 * @param {string} string - A string to check.
 * @returns {Promise<Result>}
 */
const checkOne = async (string) => {
    let data = await request(string);
    return data
};

/**
 * Returns profanity true if one of strings has profanity, you can know which word but not which sentence.
 * @param {string[]} strings - An array of strings to check.
 * @returns {Promise<Result>} 
 */
const checkMultiple = async (strings) => {
    let message = "";
    strings.forEach((el) => {
        message = message + el + ",";
    });
    let data = await request(message);
    return data
};

exports.checkMultiple = checkMultiple;
exports.checkOne = checkOne;
