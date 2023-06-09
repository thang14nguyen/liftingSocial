-- video= XsCbaUtQutI, -VIHIkNIhrU, 8akKW-gRcik, vfKwjT5-86k, CgU3iJi-t_c, 4o4GZUs0ZQc, W_zZrH5mOZU, bTAyOLfZON0, wYpKxk3XtXo, J4eqBPoZ6XA, ke7VhlHr7zU, dBjzp6VVpFE, oxHQlia7iuk, foNzSMzxans, V60IuQic3oQ, dFLRNVojugs, cxrrGi3SShM

INSERT INTO workouts (user_id, exercise, exercise_weight, reps, date, url)
SELECT
  floor(random() * (4999)) + 1 AS user_id,
  (ARRAY['Bench', 'Deadlifts', 'Squat'])[ceil(random() * 3)] AS exercise,
  floor(random() * (800 - 20 + 1)) + 20 AS exercise_weight,
  floor(random() * (12 - 1 + 1)) + 1 AS reps,
  (CURRENT_TIMESTAMP - interval '2 years' + (random() * interval '2 years'))::timestamp AS date,
  (ARRAY['XsCbaUtQutI', '-VIHIkNIhrU', '8akKW-gRcik', 'vfKwjT5-86k', 'CgU3iJi-t_c',
         '4o4GZUs0ZQc', 'W_zZrH5mOZU', 'bTAyOLfZON0', 'wYpKxk3XtXo', 'J4eqBPoZ6XA',
         'ke7VhlHr7zU', 'dBjzp6VVpFE', 'oxHQlia7iuk', 'foNzSMzxans', 'V60IuQic3oQ',
         'dFLRNVojugs', 'cxrrGi3SShM'])[ceil(random() * 17)] AS url
FROM generate_series(1, 10000);

UPDATE workouts
SET user_weight = (
  SELECT weight FROM users WHERE users.user_id = workouts.user_id
);

WITH max_weights AS (
  SELECT
    user_id,
    workout_id,
    exercise,
    exercise_weight,
    user_weight,
    date,
    url,
    reps,
    ROW_NUMBER() OVER (PARTITION BY user_id, exercise ORDER BY exercise_weight DESC) AS row_num
  FROM workouts
)
INSERT INTO user_max_exercise (user_id, workout_id, exercise, exercise_weight, user_weight, date, url, reps)
SELECT user_id, workout_id, exercise, exercise_weight, user_weight, date, url, reps
FROM max_weights
WHERE row_num = 1;