export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  if (password.length < 6) {
    return false;
  }
  for (let key of password) {
    if (isNaN(key)) {
      return false;
    }
    if(password!=="123456"){
      return false
    }
  }
  return true;
}
