import { useState } from 'react'
import {
  Cursor, Button, Card, Modal, Footer, Typewriter, Divider, Icon
} from 'animal-island-ui'

const features = [
  {
    icon: 'icon-design' as const,
    title: '能直接照抄的模板，不是理論書',
    desc: '每個模板都是空白表格等著你填——想法驗證表、MVP 範圍模板、定價策略表、估值模型。導入 Notion/Obsidian/Logseq 即用。'
  },
  {
    icon: 'icon-diy' as const,
    title: '56 個 AI Prompt，複製粘貼直接用',
    desc: '市場分析、競品調研、文案寫作、增長策略……每個 prompt 都經過實測，直接貼進 ChatGPT/Claude 就出結果，不用自己調。'
  },
  {
    icon: 'icon-helicopter' as const,
    title: '從 0 到賣公司的每一步 Checklist',
    desc: '想法驗證 → 開發上線 → 獲取用戶 → 商業變現 → 退出談判。7 個階段，每步都有決策樹和檢查清單，跟著走就行。'
  }
]

const testimonials = [
  { text: '終於不是零散筆記了，而是一整套系統。完全改變了我 Solo 創業的方式。', name: '— Alex, 獨立開發者' },
  { text: '光 AI prompt 模板就值 10 倍價格。直接嵌入我的工作流，當天就用上了。', name: '— Mira, SaaS 創始人' },
  { text: '從猶豫不決到 2 周內上線產品。這些框架是真的金礦。', name: '— Jin, 個人開發者' }
]

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Cursor>
      <div style={{ minHeight: '100vh', background: '#f8f8f0' }}>

        {/* Hero */}
        <section style={{
          textAlign: 'center', padding: '80px 24px 60px',
          maxWidth: 780, margin: '0 auto'
        }}>
          <div style={{ marginBottom: 20 }}>
            <Icon name="icon-camera" size={48} bounce />
          </div>

          <Typewriter speed={35}>
            <h1 style={{
              fontSize: 46, fontWeight: 800, color: '#794f27',
              lineHeight: 1.2, margin: '0 0 16px', letterSpacing: '-0.02em'
            }}>
              一個人創業的全套系統
              <br />
              Solo Founder's Complete OS
            </h1>
          </Typewriter>

          <p style={{
            fontSize: 18, color: '#8a7b66', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto 32px', fontWeight: 500
          }}>
            不是一本書，是能直接照抄的模板。56 個 AI prompt 複製粘貼用。從驗證想法到賣公司，每一步都有 checklist。
            直接導入 Notion、Obsidian 或 Logseq。
          </p>

          <div style={{
            marginTop: 32, marginBottom: 32, padding: '20px 24px',
            background: '#f0efe6', borderRadius: 12, maxWidth: 500, margin: '0 auto 32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#794f27' }}>$50</span>
              <span style={{ fontSize: 18, color: '#9f927d', textDecoration: 'line-through' }}>$199</span>
              <span style={{ fontSize: 14, color: '#d97706', background: '#fef3c7', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>75% OFF</span>
            </div>
            <p style={{ fontSize: 14, color: '#8a7b66', textAlign: 'center', marginBottom: 16, fontWeight: 500 }}>
              一次性購買，終身使用，含所有未來更新
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
                立即獲取 — $50
              </Button>
              <Button type="default" size="large" onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                了解更多
              </Button>
            </div>
          </div>

          <div style={{
            marginTop: 24, display: 'flex', gap: 20, justifyContent: 'center',
            fontSize: 13, color: '#9f927d', fontWeight: 500, flexWrap: 'wrap'
          }}>
            <span>Notion / Obsidian / Logseq 直接導入</span>
            <span>立即下載</span>
            <span>30 天退款</span>
          </div>
        </section>

        <Divider type="wave-yellow" />

        {/* Features */}
        <section id="features" style={{ padding: '64px 24px', maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 28, fontWeight: 700,
            color: '#794f27', marginBottom: 8
          }}>
            打開就能用，不用再自己攢
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 15, color: '#9f927d',
            marginBottom: 40, fontWeight: 500
          }}>
            一個系統，三個核心。從零到退出，全套帶走。
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20
          }}>
            {features.map((f, i) => (
              <Card key={i} color={['app-blue', 'app-teal', 'app-orange'][i] as any}>
                <div style={{ textAlign: 'center', padding: '8px 0' }}>
                  <Icon name={f.icon} size={40} bounce />
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, margin: '16px 0 8px',
                    color: ['#fff', '#fff', '#fff'][i]
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: 14, lineHeight: 1.7, opacity: 0.92,
                    fontWeight: 500
                  }}>
                    {f.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Divider type="line-teal" />

        {/* What's Inside */}
        <section style={{ padding: '64px 24px', maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 28, fontWeight: 700,
            color: '#794f27', marginBottom: 8
          }}>
            v4.0 裡面有什麼
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 15, color: '#9f927d',
            marginBottom: 40, fontWeight: 500
          }}>
            最新版：新增 AI 工作流和退出框架
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16
          }}>
            {[
              { title: '驗證想法', items: ['市場缺口分析表', '目標客戶畫像模板', '競品掃描框架'] },
              { title: '開發 & 上線', items: ['MVP 範圍界定模板', '上線 Checklist（7 步）', '定價策略手冊'] },
              { title: '增長 & 退出', items: ['獲客渠道矩陣', '估值計算模型', '退出準備評分卡'] }
            ].map((col, i) => (
              <Card key={i} type="title">
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#725d42', marginBottom: 12 }}>
                  {col.title}
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: '#8a7b66', lineHeight: 2, fontSize: 14, fontWeight: 500 }}>
                  {col.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <Divider type="wave-yellow" />

        {/* Testimonials */}
        <section style={{ padding: '64px 24px', maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 28, fontWeight: 700,
            color: '#794f27', marginBottom: 40
          }}>
            用過的人怎麼說
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20
          }}>
            {testimonials.map((t, i) => (
              <Card key={i}>
                <p style={{
                  fontSize: 15, lineHeight: 1.7, color: '#725d42',
                  fontStyle: 'italic', fontWeight: 500, marginBottom: 12
                }}>
                  "{t.text}"
                </p>
                <p style={{ fontSize: 13, color: '#9f927d', fontWeight: 600 }}>
                  {t.name}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          textAlign: 'center', padding: '64px 24px 80px', maxWidth: 640, margin: '0 auto'
        }}>
          <Card color="app-yellow">
            <h2 style={{
              fontSize: 24, fontWeight: 700, color: '#725d42',
              margin: '0 0 8px'
            }}>
              首發特惠 — $50
            </h2>
            <p style={{
              fontSize: 14, color: '#8a7b66', marginBottom: 8, fontWeight: 500,
              textDecoration: 'line-through'
            }}>
              原價 $199
            </p>
            <p style={{
              fontSize: 15, color: '#725d42', lineHeight: 1.7,
              marginBottom: 20, fontWeight: 500
            }}>
              一次性購買，終身使用。含所有未來更新。
            </p>
            <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
              獲取 AI Solo Company OS v4.0
            </Button>
          </Card>
        </section>

        <Footer type="sea" />

        {/* Purchase Modal */}
        <Modal
          open={modalOpen}
          title="AI Solo Company OS v4.0"
          onClose={() => setModalOpen(false)}
          onOk={() => { setModalOpen(false); window.location.href = 'https://ganru.gumroad.com/l/AIsolo-asset-os'; }}
          typewriter
          typeSpeed={60}
        >
          <p><strong>價格：</strong>$50（首發特惠）</p>
          <p><strong>包含：</strong></p>
          <ul>
            <li>全套可填寫的 Notion / Obsidian / Logseq 模板</li>
            <li>56 個 AI prompt 模板（複製即用）</li>
            <li>退出計劃 + 估值模型</li>
            <li>終身更新</li>
          </ul>
          <p style={{ marginTop: 16, fontSize: 13, opacity: 0.7 }}>
            點擊確認後將跳轉到購買頁面。
          </p>
        </Modal>
      </div>
    </Cursor>
  )
}
