import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const LoginScreen = (props) => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://res.cloudinary.com/amrit180/image/upload/v1626973535/icon_slack_hash_colored_riic3c.png"
          alt=""
        />
        <h1>Sign in MyWebSlack</h1>

        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};
export default LoginScreen;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
  }
`;
