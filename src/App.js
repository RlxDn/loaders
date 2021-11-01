import logo from './logo.svg';
// import './App.scss';
import styles from './App.module.css';
import Button from './components/Button';
import StyledButton from './components/StyledButton';
import styled from "styled-components";
import StyledButton2 from './components/StyledButton2';

const PrimaryStyledButton = styled(StyledButton)`
  background: blue;
  color: white;
`;

const UppercaseButton = (props) => <button {...props}
children={props.children.toUpperCase()} />

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
        <StyledButton>StyledButton</StyledButton>
        <StyledButton primary={true}>StyledButton2</StyledButton>
        <PrimaryStyledButton>PrimaryStyledButton</PrimaryStyledButton>
        <StyledButton as="a" href="http://www.naver.com" target="_blank">StyledButton_a</StyledButton>
        <StyledButton as={UppercaseButton}>StyledButton_Upper</StyledButton>
        <StyledButton2>h1</StyledButton2>
      </header>
    </div>
  );
}

export default App;
