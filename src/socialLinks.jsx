const LINKS = [
  {
    href: "https://github.com/tannerwuster",
    label: "Tanner Wuster on GitHub (opens in new tab)",
    iconClass: "fab fa-github",
  },
  {
    href: "https://www.linkedin.com/in/tanner-anthony-wuster/",
    label: "Tanner Wuster on LinkedIn (opens in new tab)",
    iconClass: "fab fa-linkedin",
  },
  {
    href: "https://www.strava.com/athletes/101049621",
    label: "Tanner Wuster on Strava (opens in new tab)",
    iconClass: "fab fa-strava",
  },
  {
    href: "https://open.spotify.com/user/1285493563",
    label: "Tanner Wuster on Spotify (opens in new tab)",
    iconClass: "fab fa-spotify",
  },
];

export function SocialList() {
  return (
    <ul className="socials">
      {LINKS.map(({ href, label, iconClass }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <span className={iconClass} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
