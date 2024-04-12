import "./styles.css";

export function Sidebar() {
  return (
    <aside>
      <ul className="items">
        <li>
          <a href="/">Logo</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </aside>
  );
}
