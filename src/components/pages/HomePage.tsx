import { FC } from 'react';
import { PrimaryLayout } from '../layout/PrimaryLayout';
import { Button, Stack } from '@mui/material';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const threds = [
  {
    thredId: 1,
    title:
      '見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し',
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

  const menuList2 = [
    {
      label: '板一覧',
      path: '/list',
    },
    {
      label: '.Login',
      path: '/Login',
    },
  ];

  return (
    <PrimaryLayout>
      <div
        style={{
          display: 'block',
          margin: 10,
          border: '2px solid #e6e6fa',
          backgroundColor: '#0000;',
        }}
      >
        <Stack direction="row" justifyContent="space-around" alignItems="baseline">
          {menuList2.map((item) => {
            return (
              <Button
                key={item.path}
                variant="text"
                onClick={() => {
                  navigate(item.path);
                }}
                style={{
                  fontSize: '25px',
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>
        <Stack
          alignItems="center"
          style={{
            fontSize: '23px',
          }}
        >
          <img
            style={{
              width: '20%',
              height: 'auto',
              objectFit: 'cover',
            }}
            src={Logo}
          />
          <p
            style={{
              textAlign: 'center',
            }}
          >
            「9ちゃんねるへ」ようこそ
            <br />
            このサイトは、匿名掲示板サイトです。 あなたの書き込みをお待ちしています。
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0}>
              <a href="    ">利用規約はこちら</a>
            </Stack>
          </p>
        </Stack>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f9fff9',
            color: 'blue',
          }}
        >
          <h2>新着のスレッド</h2>
        </div>

        <div
          style={{
            borderTop: '2px solid #e6e6fa',
            borderBottom: '2px solid #e6e6fa',
          }}
        >
          {threds.map((thred) => {
            return (
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
                style={{
                  width: '100%',
                }}
              >
                <Button
                  key={thred.thredId}
                  style={{
                    borderBottom: '1px solid #e6e6fa',
                  }}
                  onClick={() => {
                    navigate(`/detail?threadId=${thred.thredId}`);
                  }}
                >
                  <img
                    style={{
                      width: '120px',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                    src={Logo}
                  />
                  <div
                    style={{
                      textAlign: 'left',
                      display: 'inline-block',
                      fontSize: '18px',
                    }}
                  >
                    {thred.title}
                  </div>
                </Button>
              </Stack>
            );
          })}
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={3}>
            <Button
              variant="text"
              style={{
                width: '100%',
                textAlign: 'left',
                borderBottom: '1px solid #e6e6fa',
                backgroundColor: '#0000',
              }}
              onClick={() => {
                navigate('/list');
              }}
            >
              <h2>もっと見る</h2>
            </Button>
          </Stack>
        </div>
        <Stack
          direction="column"
          alignItems="center"
          spacing={0.5}
          style={{
            backgroundColor: '#f5f5f5',
          }}
        >
          <img
            style={{
              width: '20%',
              height: 'auto',
              objectFit: 'cover',
            }}
            src={Logo}
          />
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={5}>
            https://channel-9-web.web.app
          </Stack>
        </Stack>
      </div>
    </PrimaryLayout>
  );
};
