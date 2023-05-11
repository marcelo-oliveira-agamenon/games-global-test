import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/icons/menu.png';
import './style.scss';

interface IHeader {
  onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: IHeader) {
  return (
    <div id="header">
      <div className="icon" onClick={onOpenSidebar}>
        <img src={MenuIcon} alt="menuIcon" />
      </div>

      <Link to="/">Gamble&apos;s Den</Link>
    </div>
  );
}
