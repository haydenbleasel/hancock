import { useId } from 'react';
import { Input as UIInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { InputProps as UIInputProps } from '@/components/ui/input';
import type { ChangeEventHandler, FC } from 'react';

type InputProps = UIInputProps & {
  readonly label: string;
  readonly onChangeText?: (text: string) => void;
};

export const Input: FC<InputProps> = ({
  label,
  onChangeText,
  onChange,
  ...props
}) => {
  const id = useId();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (onChangeText) {
      onChangeText(event.target.value);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <fieldset className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <UIInput id={id} onChange={handleOnChange} {...props} />
    </fieldset>
  );
};
