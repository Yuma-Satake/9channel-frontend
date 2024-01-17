import { FC } from 'react';
import { PrimaryLayout } from '../layout/PrimaryLayout';
import { Button, Stack } from '@mui/material';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const threds = [
  {
    thredId: 1,
    title: 'タイトル1',
  },
  {
    thredId: 2,
    title: 'タイトル2',
  },
  {
    thredId: 3,
    title: 'タイトル3',
  },
  {
    thredId: 4,
    title: 'タイトル4',
  },
  {
    thredId: 5,
    title: 'タイトル5',
  },
];

/**
 * Home Page
 */
export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <PrimaryLayout>
      <div>
        <img src={Logo} />
      </div>

      <div
        style={{
          color: 'blue',
          alignItems: 'center',
        }}
      >
        <h2>本日のおすすめ</h2>
      </div>

      <div
        style={{
          padding: 20,
          margin: 5,
          border: '2px solid #0000ff',
          alignItems: 'center',
          borderBottom: '1px solid #0000ff',
        }}
      >
        {threds.map((thred) => {
          return (
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
              <Button
                onClick={() => {
                  navigate(`/detail?threadId=${thred.thredId}`);
                }}
              >
                <img
                  style={{
                    aspectRatio: '1/1',
                    width: '120px',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  src={Logo}
                />
                <p>{thred.title}</p>
              </Button>
            </Stack>
          );
        })}
      </div>
    </PrimaryLayout>
  );
};
