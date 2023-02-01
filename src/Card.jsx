import { useState } from "react";

const Card = ({ children, userName, name }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassname = isFollowing
    ? "card-button is-following"
    : "card-button";


  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="card">
      <div className="avatarContainer">
        <img
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
          className="avatar"
        />
      </div>
      <aside>
        <strong>{children}</strong>
        <span>@{userName}</span>
      </aside>
      <button className={buttonClassname} onClick={handleClick}>
        <span className="following-text">{text}</span>
        <span className="stopFollowing">Dejar de seguir</span>
      </button>
    </div>
  );
};

export default Card;
