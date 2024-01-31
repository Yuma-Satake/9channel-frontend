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

const initObj = [
  {
    thread_id: 3,
    thread_title:
      '三菱がどうしても「巨大ピックアップトラック」を日本投入したいワケ 価格も高めの「トライトン」',
    thread_content:
      '三菱自動車が12年振りに国内復活を決断した1トンピックアップトラック「トライトン」が、2024年2月15日より正式に発売されます。1980年代にはRVブームを受けて、トヨタや日産、三菱に加え、マツダといすゞも参入していたピックアップトラックですが、2000年代には全社が国内から撤退。それ以来、国産ピックアップトラック不在の時代が長らく続きました。https://trafficnews.jp/post/130655',
    owner_id: '3',
    created_at: '2024-01-17T00:00:00.000000Z',
    // ランダムな画像
    img_url: 'https://picsum.photos/200/300',
  },
  {
    thread_id: 7,
    thread_title: '【🌸】スタバ、新作チルドカップ「さくら抹茶 with さくらジェリー」発売',
    thread_content:
      'さくらの香りがふわりと広がるドリンク。クリーミーなミルクにまろやかな抹茶を合わせ、楽しい食感のさくらジェリーもプラス。春を感じる華やかな味わいを楽しめる。2月6日から期間限定で発売。',
    owner_id: '7',
    created_at: '2024-01-17T00:00:00.000000Z',
    img_url: null,
  },
  {
    thread_id: 6,
    thread_title:
      '中国警察、偽造AirPodsの大規模シンジケートを摘発！ ニセモノ6万9000台以上、総額は約34億円',
    thread_content:
      '中国・四川省の警察当局が、大規模な偽造AirPodsシンジケートを摘発したと報じられています。',
    owner_id: '6',
    created_at: '2024-01-17T00:00:00.000000Z',
    img_url: null,
  },
  {
    thread_id: 8,
    thread_title:
      '｢〇〇家式場｣街角で宣伝する意味なくね？仕事帰りとか｢おっ！やってるやってる｣て寄ってったりするの？',
    thread_content:
      '｢〇〇家式場｣街角で宣伝する意味なくね？仕事帰りとか｢おっ！やってるやってる｣て寄ってったりするの？',
    owner_id: '8',
    created_at: '2024-01-17T00:00:00.000000Z',
    img_url: null,
  },
];

/**
 * Home Page
 */

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const [threads, setThreads] = useState<ThreadItem[]>(initObj);

  // スレッド作成
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [threadTitle, setThreadTitle] = useState<string>('');
  const [threadContent, setThreadContent] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axiosBase.get('/latest');
      console.log(res.data.threads);
      setThreads(res.data.threads);
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
            backgroundColor: '#0000',
          }}
        >
          <Stack direction="row" justifyContent="space-around" alignItems="baseline" sx={{ p: 4 }}>
            {menuList2.map((item, index) => {
              return (
                <Button
                  key={item.path + item.label}
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
              padding: 20,
            }}
          >
            {threads.length > 0 &&
              threads.map((thread) => {
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
                        gap: '20px',
                      }}
                      onClick={() => {
                        // navigate(`/detail?threadId=${thread.thread_id}`);

                        // 以下のデータをqueryで渡す
                        // thread_id: 3,
                        // thread_title:
                        //   '高校生4人逮捕、住宅を襲撃 女性の口ふさぎ「金があるのは分かっている」 5千円奪う [蚤の市★]',
                        // thread_content:
                        //   '高校生4人を逮捕、住宅を襲撃…女性の口ふさぎ「金があるのは分かっている」、包丁を見せて暴行し5千円奪う',
                        // owner_id: '3',
                        navigate(
                          `/detail?threadId=${thread.thread_id}&threadTitle=${thread.thread_title}&threadContent=${thread.thread_content}&ownerId=${thread.owner_id}&createdAt=${thread.created_at}&imgUrl=${thread.img_url}`
                        );
                      }}
                    >
                      <img
                        style={{
                          width: '120px',
                          height: 'auto',
                          objectFit: 'cover',
                          aspectRatio: '1/1',
                          borderRadius: '10px',
                        }}
                        src="https://source.unsplash.com/random"
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
            spacing={1}
            style={{
              backgroundColor: '#f5f5f5',
              padding: 20,
            }}
          >
            CMです
            <img
              style={{
                // width: '20%',
                width: '100%',
                height: '100px',
                objectFit: 'cover',
              }}
              src="/10.39.26.png"
            />
            <img
              style={{
                // width: '20%',
                width: '100%',
                height: '100px',
                objectFit: 'cover',
              }}
              src="/10.41.56.png"
            />
            <img
              style={{
                // width: '20%',
                width: '50%',
                height: 'auto',
                textAlign: 'center',
                display: 'flex',
                objectFit: 'cover',
              }}
              src="5f872c64f449a776.gif"
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
            {/* キャンセルとsubmitのボタン */}
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
                // threadに追加
                setThreads([
                  ...threads,
                  {
                    thread_id: Math.floor(Math.random() * 100),
                    thread_title: threadTitle,
                    thread_content: threadContent,
                    owner_id: '999',
                    created_at: '2024-01-17T00:00:00.000000Z',
                    img_url: null,
                  },
                ]);
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
