import './styles.css';

function Button({ label, disabled, primary = true }: { label: string, disabled?: boolean, primary: boolean }) {


  return <button className={`button button--${primary && 'primary'}`} type="button" disabled={disabled}>{label}</button>
}

export default Button;
