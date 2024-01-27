import { FC, useEffect, useState } from 'react';
import { PrimaryLayout } from '../layout/PrimaryLayout';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { axiosBase } from '../lib/axiosUtil';

export type ThreadItem = {
  created_at: string;
  img_url: null | string;
  owner_id: string;
  thread_content: string;
  thread_id: number;
  thread_title: string;
};

export type ReplyItem = {
  reply_id: number;
  thread_id: number;
  user_id: number | null;
  body: string;
  created_at: Date;
  updated_at: Date;
};

/**
 * Home Page
 */

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const [threads, setThreads] = useState<ThreadItem[]>([]);

  // スレッド作成
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [threadTitle, setThreadTitle] = useState<string>('');
  const [threadContent, setThreadContent] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axiosBase.get('/latest');
      setThreads(res.data.thread);
    })();
  }, []);

  const menuList2 = [
    {
      label: '板一覧',
      path: '/',
    },
    {
      label: 'ログイン',
      path: '/',
    },
    {
      label: '投稿',
      path: '/create',
      onClick: () => {
        setIsModalOpen(true);
      },
    },
  ];

  return (
    <>
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
                    if (item.onClick) {
                      item.onClick();
                      return;
                    }
                    navigate(item.path);
                  }}
                >
                  <Typography variant="h6">{item.label}</Typography>
                </Button>
              );
            })}
          </Stack>
          <Stack
            alignItems="center"
            style={{
              paddingTop: '10px',
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
              alt="logo"
            />
            <p
              style={{
                textAlign: 'center',
              }}
            >
              「9ちゃんねるへ」ようこそ
              <br />
              このサイトは、匿名掲示板サイトです。 あなたの書き込みをお待ちしています。
              {/* <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0}>
              <a href="    ">利用規約はこちら</a>
            </Stack> */}
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
            {threads.map((thread) => {
              return (
                <Stack
                  key={thread.thread_id}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={0}
                  style={{
                    width: '100%',
                  }}
                >
                  <Button
                    style={{
                      borderBottom: '1px solid #e6e6fa',
                    }}
                    onClick={() => {
                      navigate(`/detail?threadId=${thread.thread_id}`);
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
                      {thread.thread_title}
                    </div>
                  </Button>
                </Stack>
              );
            })}
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={3}>
              {/* <Button
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
            </Button> */}
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
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            borderRadius: '5px',
            boxShadow: 24,
            p: 4,
            pb: 6,
            outline: 'none',
            bgcolor: 'white',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              pb: 1.5,
              borderBottom: '1px solid #aaa',
            }}
          >
            新規スレッド作成
          </Typography>
          <Stack justifyContent="center" direction="row" sx={{ pt: 3 }}>
            <img
              style={{
                width: '20%',
                height: 'auto',
                objectFit: 'cover',
              }}
              src={Logo}
            />
          </Stack>
          <Stack sx={{ py: 3, px: 1.5 }}>
            <Stack spacing={2}>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ pl: 0.5 }}>
                  スレッドタイトル
                </Typography>
                <TextField
                  value={threadTitle}
                  onChange={(e) => setThreadTitle(e.target.value)}
                  placeholder="最近寒すぎる"
                />
              </Stack>
              <Stack spacing={0.5}>
                <Typography variant="body2" sx={{ pl: 0.5 }}>
                  スレッド内容
                </Typography>
                <TextField
                  value={threadContent}
                  onChange={(e) => setThreadContent(e.target.value)}
                  placeholder="最近寒すぎる。こたつが家に欲しい。"
                  multiline
                  rows={4}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="center" spacing={3}>
            <Button
              variant="outlined"
              onClick={() => {
                setIsModalOpen(false);
                setThreadTitle('');
                setThreadContent('');
              }}
              sx={{
                width: '120px',
              }}
            >
              キャンセル
            </Button>
            <Button
              variant="contained"
              onClick={async () => {
                await axiosBase.post('/thread', {
                  thread_title: threadTitle,
                  thread_content: threadContent,
                });
                setIsModalOpen(false);
                setThreadTitle('');
                setThreadContent('');
              }}
              sx={{
                width: '120px',
              }}
            >
              投稿
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
