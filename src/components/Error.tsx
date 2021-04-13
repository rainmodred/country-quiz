interface ErrorProps {
  message: string | undefined;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div>
      <h3>Error</h3>
      <p>{message}</p>
    </div>
  );
}
