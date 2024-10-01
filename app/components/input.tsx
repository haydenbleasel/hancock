import { Input as RawInput } from '@/components/ui/input';
import type { InputProps as RawInputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useId } from 'react';
import type { ChangeEventHandler, FC } from 'react';

type InputProps = RawInputProps & {
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
      <RawInput id={id} onChange={handleOnChange} {...props} />
    </fieldset>
  );
};
