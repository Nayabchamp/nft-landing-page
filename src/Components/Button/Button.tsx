import react from "react";
import { Button as Bootstrapbtn, ButtonProps } from "react-bootstrap";
import "./Button.css";
interface IButton extends ButtonProps {
  text?: string;
  orangeBorder?: boolean;
  primaryBtn?: boolean;
  secondryBtn?: boolean;
  href?: any;
  onClick?: any;
}
export default function Button({
  text,
  orangeBorder,
  primaryBtn,
  href,
  onClick,
  ...restofprops
}: IButton) {
  return (
    <>
      <Bootstrapbtn
        onClick={onClick}
        href={href}
        style={{
          fontFamily: "AvertaStd-Bold",
          backgroundColor: "#E5EEF1",
          border: "0px",
          fontSize: "18px",
          padding: "10px 50px 10px 50px",
          borderRadius: "50px",
          color: "black",
        }}
        {...restofprops}>
        {text}
      </Bootstrapbtn>
    </>
  );
}
