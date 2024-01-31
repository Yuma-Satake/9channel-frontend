import { FC, useEffect, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { PrimaryLayout } from '../layout/PrimaryLayout';
import Logo from '../../assets/logo.png';
import { ReplyItem, ThreadItem } from './HomePage';
import { axiosBase } from '../lib/axiosUtil';

// ReplyItem = {
//   reply_id: number;
//   thread_id: number;
//   user_id: number | null;
//   body: string;
//   created_at: Date;
//   updated_at: Date;
// };

/**
 * Detail Page
 */
export const DetailPage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const threadId = query.get('threadId');

  const [thread, setThread] = useState<ThreadItem | null>(null);
  const [reply, setReply] = useState<ReplyItem[]>([]);

  // const [name, setName] = useState('');
  const [text, setText] = useState('');

  const updateReply = async () => {
    const res = await axiosBase.get('/reply', {
      params: {
        thread_id: threadId,
      },
    });
    setReply(res.data.reply);
  };

  const onReplySubmit = async () => {
    setReply((prev) => [
      ...prev,
      {
        reply_id: 3,
        thread_id: 3,
        user_id: 1,
        body: text,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // await axiosBase.post('/createReply', {
    //   params: {
    //     thread_id: threadId,
    //     body: text,
    //   },
    // });

    setText('');

    // スレッドを再読み
    // await updateReply();
  };

  useEffect(() => {
    // 以下のデータをqueryから取得して、threadにセットする
    // thread_id: 3,
    // thread_title:
    //   '高校生4人逮捕、住宅を襲撃 女性の口ふさぎ「金があるのは分かっている」 5千円奪う [蚤の市★]',
    // thread_content:
    //   '高校生4人を逮捕、住宅を襲撃…女性の口ふさぎ「金があるのは分かっている」、包丁を見せて暴行し5千円奪う',
    // owner_id: '3',

    const query = new URLSearchParams(window.location.search);
    const threadId = query.get('threadId');
    const thread_title = query.get('threadTitle');
    const thread_content = query.get('threadContent');
    const owner_id = query.get('ownerId');

    setThread({
      thread_id: Number(threadId),
      thread_title: thread_title || '',
      thread_content: thread_content || '',
      owner_id: owner_id || '',
      created_at: String(new Date()),
      img_url: '',
    });

    // if (threadId !== null) {
    //   (async () => {
    //     const threadPromise = axiosBase.get('/thread', {
    //       params: {
    //         thread_id: threadId,
    //       },
    //     });
    //     const replyPromise = axiosBase.get('/reply', {
    //       params: {
    //         thread_id: threadId,
    //       },
    //     });
    //     const [threadRes, replyRes] = await Promise.all([threadPromise, replyPromise]);
    //     setThread(threadRes.data.thread);
    //     setReply(replyRes.data.reply);
    //   })();
    // }
  }, []);

  if (threadId === null || thread === null) return <h1>読み込み中です</h1>;
  return (
    <PrimaryLayout>
      <div
        style={{
          display: 'block',
          margin: 10,
          border: '2px solid #e6e6fa',
          alignItems: 'center',
          backgroundColor: '#0000',
        }}
      >
        <Stack
          className="menu"
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
          <a href="/" style={{ textDecoration: 'none' }}>
            ホーム
          </a>
          <a href="/" style={{ textDecoration: 'none' }}>
            板一覧へ
          </a>
          <a href="/" style={{ textDecoration: 'none' }}>
            ログイン
          </a>
        </Stack>
        <h1>{thread.thread_title}</h1>
        <br />
        <div
          style={{
            fontSize: '20px',
            border: '1px solid #e6e6fa',
            backgroundColor: '#0000',
          }}
        >
          <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={4}>
            <div>▼0001</div>
            <div
              style={{
                color: '#9400d3',
              }}
            >
              名前: 名無しさん
            </div>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={8}
            style={{
              fontSize: '18px',
            }}
          >
            投稿日: 2021/10/01 12:00:00 ID: 1234567（userid）
            <div
              style={{
                margin: '5px',
              }}
            >
              threadId:{threadId}
            </div>
          </Stack>
          <div
            style={{
              fontSize: '23px',
              margin: '15px',
              display: 'block',
              borderTop: '1px solid #e6e6fa',
            }}
          >
            {thread.thread_content}
          </div>
        </div>
        {reply.map((reply, index) => {
          const replyNum = index + 2;

          return (
            <div
              key={reply.reply_id}
              style={{
                fontSize: '20px',
                display: 'block',
                border: '1px solid #e6e6fa',
                backgroundColor: '#0000',
              }}
            >
              {/* ▼0002 名前: 名無しさん */}
              {`${replyNum} 名前: 名無しさん`}
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={8}
                style={{
                  fontSize: '18px',
                }}
              >
                {`投稿日: ${reply.created_at} ID: ${reply.reply_id}`}
              </Stack>
              <div
                style={{
                  fontSize: '23px',
                  display: 'block',
                }}
              >
                {reply.body}
              </div>
            </div>
          );
        })}

        <div
          style={{
            borderTop: '1px solid #e6e6fa',
            textAlign: 'center',
          }}
        >
          <Button
            variant="text"
            onClick={updateReply}
            style={{
              fontSize: '25px',
            }}
          >
            レスを更新
          </Button>
        </div>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#0000',
            borderTop: '1px solid #e6e6fa',
          }}
        >
          <h2>リプライする</h2>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={4}>
            {/* <TextField value={name} label="name" onChange={(e) => setName(e.target.value)} /> */}
            <TextField
              value={text}
              fullWidth
              id="filled-multiline-static"
              multiline
              rows={4}
              label="本文入力"
              onChange={(e) => setText(e.target.value)}
            />
          </Stack>
          <br />
          <Button
            variant="contained"
            onClick={onReplySubmit}
            style={{
              alignItems: 'center',
              fontSize: '25px',
            }}
          >
            投稿する
          </Button>
        </div>
        <div
          style={{
            textAlign: 'center',
            borderTop: '1px solid #e6e6fa',
          }}
        >
          <Button
            variant="text"
            onClick={() => {}}
            style={{
              fontSize: '25px',
            }}
          >
            <a href="#" style={{ textDecoration: 'none' }}>
              一番上に移動
            </a>
          </Button>
        </div>
        <Stack
          direction="column"
          alignItems="center"
          spacing={0.5}
          style={{
            backgroundColor: '#f5f5f5',
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
              width: '100%',
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
  );
};
