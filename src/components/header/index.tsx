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

      <h1>Gamble's Den</h1>
    </div>
  );
}
