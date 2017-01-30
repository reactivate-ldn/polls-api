import * as Joi from 'joi';

export interface Answer {
  id: string;
  answer: string;
  votes: number;
}

export const answerSchema = Joi.object().keys({
  answer: Joi.string()
}).requiredKeys('answer');

export const answersSchema = Joi.array().items(answerSchema);

export interface Poll {
  id: string;
  title: string;
  answer: Answer[];
}

export const pollSchema = Joi.object().keys({
  title: Joi.string(),
  answer: Joi.array().items(answerSchema)
}).requiredKeys('title');

export interface Idb {
  [uuid: string]: Poll
}

const db: Idb = {};

export default db;