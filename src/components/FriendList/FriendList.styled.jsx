import styled from '@emotion/styled';

export const FrList = styled.ul`
  margin-right: auto;
  margin-left: auto;
`;

export const ItemFriends = styled.li`
  display: flex;
  width: 300px;
  height: 60px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  justify-content: left;
  border: 2px solid gray;
  border-radius: 4px;
  box-shadow: 5px 5px 19px -1px #000000;
  background-color: rgb(187, 181, 181);
`;

export const FriendsBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: left;
`;

export const StatusFriends = styled.div`
  display: block;
  margin-right: 0;
  margin-right: 30px;
  margin-bottom: 35px;
  align-content: flex-start;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red'
  }
 };
  border-radius: 50%;
`;

export const AvatarFriends = styled.img`
  display: inline;
  margin-right: 20px;
  padding: 0;
`;

export const NameFriends = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
`;
