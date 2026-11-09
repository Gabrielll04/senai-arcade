import { useScrollIntoViewWhenSelected } from '../../hooks/useScrollIntoViewWhenSelected';
import { Icon, type IconName } from '../Icon/Icon';
import './ActionButton.css';

interface ActionButtonProps {
  label: string;
  icon?: IconName;
  selected: boolean;
  onActivate: () => void;
  testId?: string;
}

export function ActionButton({ label, icon, selected, onActivate, testId }: ActionButtonProps) {
  const ref = useScrollIntoViewWhenSelected<HTMLButtonElement>(selected);
  return (
    <button
      ref={ref}
      type="button"
      className="action-button"
      data-selected={selected}
      aria-current={selected ? 'true' : undefined}
      data-testid={testId}
      tabIndex={-1}
      onClick={onActivate}
    >
      {icon ? <Icon name={icon} /> : null}
      {label}
    </button>
  );
}
