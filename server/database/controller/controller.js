const client = require('../db');

const getUserQuery = (userId) => ({
  text:
    `SELECT
      exercise,
      exercise_weight AS weight,
      user_weight AS bodyweight,
      date,
      url,
      reps,
      workout_id AS id
    FROM user_max_exercise
    WHERE user_id = $1`,
  values: [userId],
});

const getWorldwideQuery = () => (
  `SELECT
      exercise,
      exercise_weight AS weight,
      user_weight AS bodyweight,
      date,
      url,
      reps,
      workout_id AS id
    FROM user_max_exercise
    ORDER BY user_weight DESC
    LIMIT 10`
);

module.exports = {
  getUser: (req, res) => {
    const userId = Number(req.query.user_id);

    console.log('getUser => user_id', userId);

    client.query(getUserQuery(userId))
      .then(({ rows }) => res.status(200).send(rows))
      .catch(({ message }) => {
        console.log(message);
        res.status(500).send(message);
      });
  },

  getWorldwide: (req, res) => {
    const userId = req.query.search;

    console.log('getWorldwide => search', userId);

    client.query(getWorldwideQuery(userId))
      .then(({ rows }) => res.status(200).send(rows))
      .catch(({ message }) => {
        console.log(message);
        res.status(500).send(message);
      });
  },
};
