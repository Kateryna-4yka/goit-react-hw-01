import css from './FriendListItem.module.css'

export default function FriendListItem ({friends}) {
  return (
    <>
      {friends.map((el) => (
        <div className={css.div} key={el.id}> 
          <img className={css.img}  src={el.avatar} alt={`${el.name} Avatar`} width="48" />
          <p className={css.p}>{el.name}</p> 
          <p className={el.isOnline ? css.isOnline: css.isOffline}>{el.isOnline ? "Online" : "Offline"}</p> 
        </div>
      ))}
    </>
  );
}