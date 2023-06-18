import { useEffect, useRef, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  //User input - allows us to set the focus on
  const userRef = useRef<HTMLInputElement>(null);

  //Set the focus on the erros message
  const errRef = useRef<HTMLParagraphElement>(
    null
  ) as React.LegacyRef<HTMLParagraphElement>;

  //user input
  const [user, setUser] = useState("");
  //check whether the name is valid or not
  const [validName, setValidName] = useState<boolean>(false);
  //set focus on the input field or not
  const [userFocus, setUserFocus] = useState<boolean>(false);

  //password input
  const [password, setPassword] = useState("");
  //check whether the password is valid or not
  const [validPassword, setValidPassword] = useState<boolean>(false);
  //set focus on the input field or not
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  //password match input
  const [matchPassword, setMatchPassword] = useState("");
  //check whether the password is valid or not
  const [validMatchPassword, setValidMatchPassword] = useState<boolean>(false);
  //set focus on the input field or not
  const [matchPasswordFocus, setMatchPasswordFocus] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  //as soon as the app starts, the focus goes to the name input
  useEffect(() => {
    !!userRef.current && userRef.current?.focus();
  }, []);

  //validating if the name input matches the regex pattern
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  //validating if the password matches the regex pattern
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    //checking if the password is equal to match password
    setValidMatchPassword(matchPassword === password);
  }, [matchPassword, password]);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password, matchPassword]);

  return (
    <section>
      <p
        ref={errRef}
        className={errorMessage ? "errmsg" : "offscreen"}
        //tell that this text is showing (for assistive technologies)
        aria-live="assertive">
        {errorMessage}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          //should match "htmlFor" property from "label"
          id="username"
          ref={userRef}
          autoComplete="off"
          required
          //tells screen reader whether the value needs adjustment before the form is submitted
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }>
          <InfoIcon />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letter, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          //should match "htmlFor" property from "label"
          id="password"
          ref={userRef}
          required
          //tells screen reader whether the value needs adjustment before the form is submitted
          aria-invalid={validPassword ? "false" : "true"}
          aria-describedby="pwdnote"
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p
          id="pwdnote"
          className={
            passwordFocus && !validPassword ? "instructions" : "offscreen"
          }>
          <InfoIcon />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters: @#$%
        </p>

        <label htmlFor="confirm_password">Confirm password: </label>
        <input
          type="password"
          //should match "htmlFor" property from "label"
          id="confirm_password"
          ref={userRef}
          required
          //tells screen reader whether the value needs adjustment before the form is submitted
          aria-invalid={validMatchPassword ? "false" : "true"}
          aria-describedby="confirmnote"
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setMatchPasswordFocus(true)}
          onBlur={() => setMatchPasswordFocus(false)}
        />
        <p
          id="confirmnote"
          className={
            matchPasswordFocus && !validMatchPassword
              ? "instructions"
              : "offscreen"
          }>
          <InfoIcon />
          Must match the first password input field.
        </p>
        <button
          disabled={
            !validName || !validPassword || !validMatchPassword ? true : false
          }>
          Sign up
        </button>
        <p>Already registered?</p>
        <br />
        <span className="line">
          <a href="#">Sign in</a>
        </span>
      </form>
    </section>
  );
};

export default Register;
