import { FC, useState } from 'react';
import { PrimaryLayout } from '../layout/PrimaryLayout';
import { Button, Stack } from '@mui/material';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

// const threds = [
//   {
//     thredId: 1,
//     title: 'タイトル1',
//   },
//   {
//     thredId: 2,
//     title: 'タイトル2',
//   },
//   {
//     thredId: 3,
//     title: 'タイトル3',
//   },
//   {
//     thredId: 4,
//     title: 'タイトル4',
//   },
//   {
//     thredId: 5,
//     title: 'タイトル5',
//   },
// ];

/**
 * Home Page
 */
type threds = {
  thredTitle: string; //スレッドのタイトル
  threadContent: string; //スレッドの内容
  thredId: string; //スレッドのID
  thredImage: string; //スレッドの画像
  ownerId: string; //スレッドの投稿者名
  createdAt: Date; //スレッドの作成日時
};
export const HomePage: FC = () => {
  const [threds] = useState<threds[]>([]); //スレッドの情報を格納する配列
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
          alignItems: 'center',
          backgroundColor: '#0000;',
        }}
      >
        <Stack direction="row" justifyContent="space-around" alignItems="baseline" spacing={81}>
          {menuList2.map((item) => {
            return (
              <Button
                key={item.path}
                variant="text"
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>
        <Stack alignItems="center">
          <img style={{}} src={Logo} />
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

          <div
            style={{
              color: 'blue',
            }}
          >
            <h2>本日のおすすめ</h2>
          </div>
        </Stack>
        <div
          style={{
            borderTop: '2px solid #e6e6fa',
            borderBottom: '2px solid #e6e6fa',
            alignItems: 'center',
          }}
        >
          {threds.map((threds) => {
            return (
              <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0}>
                <Button
                  key={threds.thredId}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    borderBottom: '1px solid #e6e6fa',
                  }}
                  onClick={() => {
                    navigate(`/detail?threadId=${threds.thredId}`);
                  }}
                >
                  <img
                    style={{
                      aspectRatio: '1/1',
                      width: '120px',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                    src={threds.thredImage}
                  />
                  {threds.thredTitle}
                  {threds.threadContent}
                  {threds.ownerId}
                </Button>
              </Stack>
            );
          })}
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0}>
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
      </div>
    </PrimaryLayout>
  );
};
