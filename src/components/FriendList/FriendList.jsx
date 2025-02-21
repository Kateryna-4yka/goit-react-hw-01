import css from './FriendList.module.css'

import FriendListItem from "../FriendListItem/FriendListItem"


export default function FriendList ({friends}) {

return <div>
<ul>
	{/* Кількість li залежить від кількості об'єктів в масиві */}
	<li className={css.li}>
		<FriendListItem friends = {friends}/>
	</li>
</ul>
</div>

}