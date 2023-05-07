import slugify from 'slugify';
import type { FC, HTMLProps } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  onChangeText: (text: string) => void;
  label: string;
};

const Input: FC<InputProps> = ({ label, onChangeText, ...props }) => {
  const id = slugify(label, { strict: true, lower: true });

  return (
    <div className="relative">
      <label className="mb-[6px] block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        required
        className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2"
        onChange={({ target }) => onChangeText(target.value)}
        {...props}
        id={id}
      />
    </div>
  );
};

export default Input;
