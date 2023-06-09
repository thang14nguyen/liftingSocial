\c postgres;

DROP DATABASE IF EXISTS flexing;

CREATE DATABASE flexing;

\c flexing;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS user_max_exercise;

CREATE TABLE IF NOT EXISTS users (
  user_id serial PRIMARY KEY,
  username VARCHAR(2000) UNIQUE,
  age INT DEFAULT NULL,
  weight INT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS workouts (
  workout_id serial PRIMARY KEY,
  user_id serial,
  exercise VARCHAR(200),
  exercise_weight INT,
  reps INT,
  user_weight INT,
  date TIMESTAMP,
  url VARCHAR(200),
  FOREIGN KEY (user_id)
    REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS user_max_exercise (
  user_id INT,
  workout_id INT,
  exercise VARCHAR(200),
  exercise_weight INT,
  user_weight INT,
  date TIMESTAMP,
  url VARCHAR(200),
  reps INT,
  FOREIGN KEY (user_id)
    REFERENCES users (user_id),
  FOREIGN KEY (workout_id)
    REFERENCES workouts (workout_id)
);
