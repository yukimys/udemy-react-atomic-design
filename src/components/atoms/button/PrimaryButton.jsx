import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styled() ()内にコンポーネント
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
