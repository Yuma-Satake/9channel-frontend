import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { PrimaryLayout } from '../layout/PrimaryLayout';
const userID = [
  {
    usernaem: '',
    userID: '000001',
  },
  {
    usernaem: '投稿者1',
    userID: '000001',
  },
  {
    usernaem: '投稿者1',
    userID: '000001',
  },
  {
    usernaem: '投稿者1',
    userID: '000001',
  },
  {
    usernaem: '投稿者1',
    userID: '000001',
  },
];
/**
 * Detail Page
 */
export const DetailPage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const threadId = query.get('threadId');

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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={40}
          style={{
            fontSize: '20px',
            margin: '5px',
            padding: '5px',
          }}
        >
          <a href="/">ホーム</a>
          <a href="/list">板一覧へ</a>
          <a href="/list">ログイン</a>
        </Stack>
        <h1>ポケダの伝説 Breth of the ark coll of craft impact</h1>
        <br />
        <div
          style={{
            fontSize: '20px',
            border: '1px solid #e6e6fa',
            backgroundColor: '#0000;',
          }}
        >
          ▼0001 名前: 投稿者1
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={8}
            style={{
              fontSize: '12px',
            }}
          >
            投稿日: 2021/10/01 12:00:00　　　 ID: 1234567（userid）
            <div>threadId:{threadId}</div>
          </Stack>
          <div
            style={{
              display: 'block',
              borderTop: '1px solid #e6e6fa',
            }}
          >
            投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1投稿内容1
          </div>
        </div>
        <div
          style={{
            fontSize: '20px',
            display: 'block',
            border: '1px solid #e6e6fa',
            backgroundColor: '#0000;',
          }}
        >
          ▼0002 名前: 投稿者2
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={8}
            style={{
              fontSize: '12px',
            }}
          >
            投稿日: 2021/10/01 12:00:00　　　　ID: userID
          </Stack>
          <div
            style={{
              display: 'block',
            }}
          >
            なんこれ？？
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid #e6e6fa',
            textAlign: 'center',
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              alert('新着レスを表示します');
            }}
            style={{
              fontSize: '25px',
            }}
          >
            新着レスを表示
          </Button>
        </div>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#0000;',
            borderTop: '1px solid #e6e6fa',
          }}
        >
          <h2>レスを投稿する</h2>
          <div
            style={{
              fontSize: '20px',
              backgroundColor: '#0000;',
            }}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0}
              style={{
                fontSize: '20px',
              }}
            >
              名前: <input type="text" name="name" />
            </Stack>
            <textarea
              style={{
                width: '95%',
              }}
              rows={5}
              cols={60}
            >
              本文入力
            </textarea>
            <div
              style={{
                display: 'block',
                borderTop: '1px solid #e6e6fa',
              }}
            >
              <Button color="primary" variant="contained">
                投稿
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid #e6e6fa',
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              alert('ページ上部に戻ります');
            }}
            style={{
              fontSize: '25px',
            }}
          >
            ページ上部に戻る
          </Button>
        </div>
      </div>
    </PrimaryLayout>
  );
};
