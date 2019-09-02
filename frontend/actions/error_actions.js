export const RECEIVE_ERRORS = "RECEIVE ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});