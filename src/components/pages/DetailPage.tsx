import { FC, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { PrimaryLayout } from '../layout/PrimaryLayout';
// const userID = [
//   {
//     usernaem: '',
//     userID: '000001',
//   },
//   {
//     usernaem: '投稿者1',
//     userID: '000001',
//   },
//   {
//     usernaem: '投稿者1',
//     userID: '000001',
//   },
//   {
//     usernaem: '投稿者1',
//     userID: '000001',
//   },
//   {
//     usernaem: '投稿者1',
//     userID: '000001',
//   },
// ];
/**
 * Detail Page
 */
export const DetailPage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const threadId = query.get('threadId');

  const ReplyForm = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    function handleNameChange(event: any) {
      setName(event.target.value);
    }
    function handleTextChange(event: any) {
      setText(event.target.value);
    }
  };

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
          <a href="/">ホーム</a>
          <a href="/list">板一覧へ</a>
          <a href="/list">ログイン</a>
        </Stack>
        <h1>
          松本人志　週刊文春提訴　賠償請求額は約５億５千万円　報道から２６日－芸人人生かけ動き出す一方、元タレントが顔出し告発
        </h1>
        <br />
        <div
          style={{
            fontSize: '20px',
            border: '1px solid #e6e6fa',
            backgroundColor: '#0000;',
          }}
        >
          <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={4}>
            <div>▼0001　</div>

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
            投稿日: 2021/10/01 12:00:00　　　 ID: 1234567（userid）
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
            お笑いコンビ・ダウンタウンの松本人志（６０）が２２日、女性を巡る自身に対する報道で名誉を毀損（きそん）されたとして、「週刊文春」の発行元である文芸春秋などを相手に損害賠償などを求める訴えを起こした。所属の吉本興業が発表した。松本個人による提訴となる。代理人によると損害賠償の請求額は約５億５千万円。文芸春秋側は「一連の記事には十分に自信を持っています」と声明を発表した。お笑い界のトップに君臨してきた松本を巡る騒動が動き出した。
            衝撃の文春砲から２６日目。松本が動いた。この日、所属の吉本興業が「当社所属タレント松本人志に関するお知らせ」と題した文書を公表し文芸春秋社などを提訴したと明らかにした。
            松本の代理人を務める田代政弘弁護士はコメントを発表。「本日、松本人志氏は、株式会社文芸春秋ほか１名に対して、令和５年１２月２７日発売の週刊文春に掲載された記事に関し、名誉毀損に基づく損害賠償請求及び訂正記事による名誉回復請求を求める訴訟を提起いたしました」とした。文芸春秋に求めている損害賠償の請求額は約５億５千万円という。
            松本をめぐっては、週刊文春および、文春オンラインが、２０１５年に都内のホテルで複数の女性に対して性的行為を強要したなどとする記事を掲載していた。
            松本の代理人弁護士は「今後、裁判において、記事に掲載されているような性的行為やそれらを強要した事実はなく、およそ『性加害』に該当するような事実はないということを明確に主張し立証してまいりたいと考えております」と表明。文春の記事の真実性を全面的に争う姿勢を見せた。
            文春の報道をめぐっては、発売当日に吉本興業が即座に反応。「当該事実は一切なく、タレントの社会的評価を著しく低下させ、名誉を毀損するもので、法的措置を検討していく」と否定し訴訟の提起を示唆していた。
            その後、松本は１月８日に活動休止を発表。「裁判との同時並行では、これまでのようにお笑いに全力を傾けることができなくなってしまうため、活動を休止したい」との意向を吉本に伝え、自身も「事実無根なので闘いまーす。」とＸに投稿。全面対決の姿勢を鮮明にしていたが、それを実行に移す形となった。
            お笑い界のトップに君臨してきた松本だったが、報道により７本のレギュラー番組から姿を消し、名誉も失った。少なくとも２年は要すると言われる裁判。芸人人生をかけた長く苦しい闘いの行方に注目が集まる。
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
              fontSize: '18px',
            }}
          >
            投稿日: 2021/10/01 12:00:00　　　　ID: userID
          </Stack>
          <div
            style={{
              fontSize: '23px',
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
          <form></form>
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
            <a href="#">一番上に移動</a>
          </Button>
        </div>
      </div>
    </PrimaryLayout>
  );
};
