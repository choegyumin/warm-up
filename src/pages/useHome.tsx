export default function useHome() {
  const onDescriptionClick = (event: React.MouseEvent<HTMLElement>) => {
    alert('Hello, World!');
  };

  return {
    onDescriptionClick,
  };
}
