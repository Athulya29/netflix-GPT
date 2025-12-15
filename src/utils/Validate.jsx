export const checkValidateData = (name,email, password) => {
  const isNameValid=/^[0-9A-Za-z]{6,16}$/.test(name)
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isNameValid) return "Username is not valid";
  if (!isEmailValid) return "Enter valid Email address";
  if (!isPasswordValid) return "Enter valid password";

  return null;
};
