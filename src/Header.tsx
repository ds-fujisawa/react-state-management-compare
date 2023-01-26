import { useNavigate } from '@tanstack/react-location';

const pageLink = [
  { name: 'home', to: '/' },
  { name: 'Redux', to: '/redux' },
  { name: 'Context', to: '/context' },
  { name: 'Recoil', to: '/recoil' },
  { name: 'Jotai', to: '/jotai' },
  { name: 'Zustand', to: '/zustand' },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <ul style={{ display: 'flex', gap: 16 }}>
        {pageLink.map(({ name, to }) => (
          <li key={name} style={{ listStyle: 'none' }}>
            <a
              href=""
              onClick={() => {
                navigate({ to });
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
