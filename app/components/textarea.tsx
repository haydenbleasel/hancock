import { useId } from 'react';
import { Textarea as UITextarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { TextareaProps as UITextareaProps } from '@/components/ui/textarea';
import type { ChangeEventHandler, FC } from 'react';

type TextareaProps = UITextareaProps & {
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
      <UITextarea id={id} onChange={handleOnChange} {...props} />
    </fieldset>
  );
};
