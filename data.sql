-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!'),
VALUES (2, 1, 3, ' :( '),
VALUES (5, 5, 5, 'Slammin'),
VALUES (5, 1, 5, 'Doing Great! No idea what is going on'),
VALUES (1, 5, 1, 'Smart but sad'),
VALUES (3, 3, 3, 'ok'),
VALUES (1, 1, 5, 'I am sick'),
VALUES (2, 4, 5, 'Doing Great!'),
VALUES (4, 3, 5, 'Doing Good!'),
VALUES (2, 4, 5, 'Doing Alright'),
VALUES (4, 4, 5, 'Doing Fine'),
VALUES (5, 5, 5, `I'm a real coder!`),

