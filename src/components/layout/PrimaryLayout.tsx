import { Container } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Primary Layout
 */
export const PrimaryLayout: FC<Props> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};
