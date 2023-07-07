import { Button, Header } from 'design-system';
import { trpc } from '../utils/trpc';

const Page = () => {
  const userList = trpc.user.list.useQuery();

  console.log(userList);

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
};
Page.displayName = 'Page';

export default Page;
