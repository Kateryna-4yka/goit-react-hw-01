import css from "./TransactionHistory.module.css";
export default function TransactionHistory ({items}) {

return<>
<table className={css.table}>
  <thead className={css.thead}>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody  className={css.tbody}>
  {items.map((el) => { return <tr key = {el.id}>
      <td className={css.type}>{el.type}</td>
      <td className={css.item}>{el.amount}</td>
      <td className={css.item}>{el.currency}</td>
    </tr>
  })}
  </tbody>
</table>
</>
}