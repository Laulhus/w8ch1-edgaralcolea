const { default: Link } = require("next/link");

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pokemon">Pokemon</Link>
      </li>
      <li>
        <Link href="/pokemonSSR">Mis Pokemon SSR</Link>
      </li>
      <li>
        <Link href="/pokemonSSG">Mis Pokemon SSG</Link>
      </li>
      <li>
        <Link href="/pokemonISR">Mis Pokemon ISR</Link>
      </li>
    </ul>
  );
};

export default Navigation;
