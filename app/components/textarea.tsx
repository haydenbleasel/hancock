import { Label } from '@/components/ui/label';
import { Textarea as uiTextarea } from '@/components/ui/textarea';
import type { TextareaProps as uiTextareaProps } from '@/components/ui/textarea';
import { useId } from 'react';
import type { ChangeEventHandler, FC } from 'react';

type TextareaProps = uiTextareaProps & {
  readonly label: string;
  readonly onChangeText?: (text: string) => void;
};

export const Textarea: FC<TextareaProps> = ({
  label,
  onChangeText,
  onChange,
  ...props
}) => {
  const id = useId();

  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
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
      <uiTextarea id={id} onChange={handleOnChange} {...props} />
    </fieldset>
  );
};
