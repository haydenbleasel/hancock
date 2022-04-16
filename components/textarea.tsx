import type { FC, HTMLProps } from 'react';
import slugify from 'slugify';

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
  onChangeText: (text: string) => void;
  label: string;
};

const Textarea: FC<TextareaProps> = ({ label, onChangeText, ...props }) => {
  const id = slugify(label, { strict: true, lower: true });

  return (
    <div className="relative">
      <label className="mb-[6px] block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <textarea
        required
        className="block max-h-[300px] min-h-[100px] w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-2"
        onChange={({ target }) => onChangeText(target.value)}
        {...props}
        id={id}
      />
    </div>
  );
};

export default Textarea;
