<h1>Cash Register</h1>
<p>In this project, I had to build a function that accepts purchase price as the first argument (<code>price</code>), payment as the second argument (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the third argument.</p>
<p><code>cid</code> is a 2D array listing available currency.</p>
<p>The function should always return an object with a status key and a change key.</p>
<p>Return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code> if cash-in-drawer is less than the change due, or if you cannot return the exact change.</p>
<p>Return <code>{status: "CLOSED", change: [...]}</code> with cash-in-drawer as the value for the key change if it is equal to the change due.</p>
<p>Otherwise, return <code>{status: "OPEN", change: [...]}</code>, with the change due in coins and bills, sorted in highest to lowest order, as the value of the <code>change</code> key.</p>
<table>
  <tr>
    <th>Currency Unit</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>Penny</td>
    <td>$0.01 (PENNY)</td>
  <tr>
  <tr>
    <td>Nickel</td>
    <td>$0.05(NICKEL)</td>
  <tr>
  <tr>
    <td>Dime</td>
    <td>$0.1 (DIME)</td>
  <tr>
  <tr>
    <td>Quarter</td>
    <td>$0.25 (QUARTER)</td>
  <tr>
  <tr>
    <td>Dollar</td>
    <td>$1 (ONE)</td>
  <tr>
  <tr>
    <td>Five Dollars</td>
    <td>$5 (FIVE)</td>
  <tr>
  <tr>
    <td>Ten Dollars</td>
    <td>$10 (TEN)</td>
  <tr>
  <tr>
    <td>Twenty Dollars</td>
    <td>$20 (TWENTY)</td>
  <tr>
  <tr>
    <td>One-hundred Dollars</td>
    <td>$100 (ONE HUNDRED)</td>
  <tr>
</table>
