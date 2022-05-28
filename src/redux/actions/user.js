export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setName = (name) => ({
  type: "SET_USERNAME",
  payload: name,
});

export const setSurname = (surname) => ({
  type: "SET_USERSUNAME",
  payload: surname,
});

export const setAuth = (auth) => ({
  type: "SET_AUTH",
  payload: auth,
});

export const setBirthday = (date) => ({
  type: "SET_BIRTHDAY",
  payload: date,
});

export const setCoach = (isCoach) => ({
  type: "SET_COACH",
  payload: isCoach,
});
