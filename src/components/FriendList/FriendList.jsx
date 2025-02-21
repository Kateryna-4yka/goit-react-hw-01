import css from './FriendList.module.css'

import FriendListItem from "../FriendListItem/FriendListItem"


export default function FriendList ({friends}) {

return <div>
<ul className={css.li}>
{friends.map(el => (
          <li key={el.id} >
            <FriendListItem el={el} />
          </li>
        ))}

</ul>
</div>

}