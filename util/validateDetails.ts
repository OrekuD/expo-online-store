export const validateDetails = (data: {
  email: string;
  password: string;
  confirmPassword?: string;
  fullname?: string;
}): { isValid: boolean; message: string } => {
  const { password, confirmPassword, email, fullname } = data;

  if (!password || !email) {
    return {
      isValid: false,
      message: "Password and email fields cannot be empty",
    };
  }

  if (
    confirmPassword &&
    (confirmPassword.length <= 6 || confirmPassword !== password)
  ) {
    return {
      isValid: false,
      message: "Passwords do not match",
    };
  }

  if (password.length <= 6) {
    return {
      isValid: false,
      message: "Passwords must be above 6 characters",
    };
  }

  return { isValid: true, message: "Valid details" };
};
