import {
  ProfileDiv,
  Description,
  Image,
  Name,
  Tag,
  Location,
Stats,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {

    return <ProfileDiv>
  <Description>
    <Image src={avatar} alt="User" />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </Stats>
</ProfileDiv>
}