import { FriendListItem, FriendItem, StatusColor } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
      
        <section className="FriendList">
      <FriendListItem>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id} >
            <StatusColor $isOnline={isOnline} aria-live="polite" />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendItem>
        ))}
      </FriendListItem>
    </section>
    )}