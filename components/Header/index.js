import headerStyles from '../../styles/Header.module.css';

export default function index() {
  return (
    <div>
      <h1 className={headerStyles.title}>BlaBla News</h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest news
      </p>
    </div>
  );
}
