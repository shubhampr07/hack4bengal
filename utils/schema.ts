import { int, smallint } from "drizzle-orm/mysql-core";
import {
  bigint,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
  mockId: varchar("mockId").notNull(),
});

export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),
  mockIdref: varchar("mockId").notNull(),
  question: varchar("question").notNull(),
  correctAns: text("correctAns"),
  userAns: varchar("userAns"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});

const difficulty = pgEnum("difficulty", ["easy", "medium", "hard"]);

export const Quiz = pgTable("quiz", {
  id: serial("id").primaryKey(),
  description: varchar("description").notNull(),
  question: varchar("question").notNull(),
  answers: varchar("answers").notNull(),
  difficulty: difficulty("difficulty"),
  totalQuestion: integer("totalQuestion").default(10),
});

export const QuizAnswer = pgTable("quizAnswer", {
  id: serial("id").primaryKey(),
  userEmail: varchar("userEmail"),
  userName: varchar("userName"),
  correctAnswers: varchar("correctAnswer"),
  quizId: integer("quiz_id").references(() => Quiz.id),
});

export interface MockInterviewType {
  id?: number;
  jsonMockResp: string;
  jobPosition: string;
  jobDesc: string;
  jobExperience: string;
  createdBy: string;
  createdAt: string;
  mockId: string;
}

export interface UserAnswerType {
  id?: number;
  mockIdref: string;
  question: string;
  correctAns: string;
  userAns: string;
  feedback: string;
  rating: string;
  userEmail: string;
  createdAt: string;
}
