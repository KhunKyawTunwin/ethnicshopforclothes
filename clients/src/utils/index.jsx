export const shorternText = (text, n) => {
  if (text.length > n) {
    const shorternedTex = text.substring(0, n).concat("...");
    return shorternedTex;
  }
  return text;
};

// Validate Email
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA]{2,}))$/
  );
};
