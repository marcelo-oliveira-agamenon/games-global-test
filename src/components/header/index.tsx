import { Link } from 'react-router-dom';
import './style.scss';

interface IHeader {
  onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: IHeader) {
  return (
    <div id="header">
      <div className="icon" onClick={onOpenSidebar}>
        icon menu
      </div>

      <Link to="/">Gamble's Den</Link>
    </div>
  );
}
