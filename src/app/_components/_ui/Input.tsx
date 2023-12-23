/* src/app/_components/_ui/Input.tsx */

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: Props) {
  return <input className="block w-full border-0 px-3.5 py-2 bg-transparent text-orange shadow-sm ring-1 ring-inset ring-white placeholder:text-white placeholder:uppercase focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" {...props} />;
}
