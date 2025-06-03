import { AppShell } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title: string;
};

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <AppShell aside={{ width: 550, breakpoint: 'sm' }}>
      <AppShell.Main>{title}</AppShell.Main>
      <AppShell.Aside>{children}</AppShell.Aside>
    </AppShell>
  );
};
