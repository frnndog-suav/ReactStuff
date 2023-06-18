import { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  //User input - allows us to set the focus on
  const userRef = useRef<HTMLInputElement>();

  //Set the focus on the erros message
  const errRef = useRef();

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
  const [passwordFocus, setPassordFocus] = useState<boolean>(false);

  //password match input
  const [matchPassword, setMatchPassword] = useState("");
  //check whether the password is valid or not
  const [validMatchPassword, setValidMatchPassword] = useState<boolean>(false);
  //set focus on the input field or not
  const [matchPasswordFocus, setMatchPassordFocus] = useState<boolean>(false);

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
  }, []);

  return <div>Register</div>;
};

export default Register;
