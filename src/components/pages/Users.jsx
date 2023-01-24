import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../moleucules/SearchInput";
import { UserCard } from "../organisms/User/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `${val}-ay`,
    image:
      "https://images.unsplash.com/photo-1674086631216-8aa6f3c6eaa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    email: "eww@@gmail.com",
    phone: "909-0009-2090",
    company: {
      name: "test株式会社",
      website: "https://google.com",
    },
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  const { state } = useLocation();
  console.log(state);

  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
