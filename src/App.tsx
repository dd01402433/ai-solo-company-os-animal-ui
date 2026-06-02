import { useState } from 'react'
import {
  Cursor, Button, Card, Modal, Footer, Typewriter, Divider, Icon
} from 'animal-island-ui'

const features = [
  {
    icon: 'icon-design' as const,
    title: '能直接填的表，不是理论书',
    desc: '每个模板都是空白表格等着你填——想法验证表、MVP 范围模板、定价策略表、估值模型。导入 Notion/Obsidian/Logseq 即用。'
  },
  {
    icon: 'icon-diy' as const,
    title: '56 个 AI Prompt，复制粘贴直接用',
    desc: '市场分析、竞品调研、文案写作、增长策略……每个 prompt 都经过实测，直接贴进 ChatGPT/Claude 就出结果，不用自己调。'
  },
  {
    icon: 'icon-helicopter' as const,
    title: '从 0 到卖公司的每一步 Checklist',
    desc: '想法验证 → 开发上线 → 获取用户 → 商业变现 → 退出谈判。7 个阶段，每步都有决策树和检查清单，跟着走就行。'
  }
]

const testimonials = [
  { text: '终于不是零散笔记了，而是一整套系统。完全改变了我 Solo 创业的方式。', name: '— Alex, 独立开发者' },
  { text: '光 AI prompt 模板就值 10 倍价格。直接嵌入我的工作流，当天就用上了。', name: '— Mira, SaaS 创始人' },
  { text: '从犹豫不决到 2 周内上线产品。这些框架是真的金矿。', name: '— Jin, 个人开发者' }
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
              一个人创业的全套系统
              <br />
              Solo Founder's Complete OS
            </h1>
          </Typewriter>

          <p style={{
            fontSize: 18, color: '#8a7b66', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto 32px', fontWeight: 500
          }}>
            不是一本书，是能直接填的表。56 个 AI prompt 复制粘贴用。从验证想法到卖公司，每一步都有 checklist。
            直接导入 Notion、Obsidian 或 Logseq。
          </p>

          <div style={{
            marginTop: 32, marginBottom: 32, padding: '20px 24px',
            background: '#f0efe6', borderRadius: 12, maxWidth: 500, margin: '0 auto 32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#794f27' }}>$10</span>
              <span style={{ fontSize: 18, color: '#9f927d', textDecoration: 'line-through' }}>$49</span>
              <span style={{ fontSize: 14, color: '#d97706', background: '#fef3c7', padding: '2px 8px', borderRadius: 6, fontWeight: 600 }}>79% OFF</span>
            </div>
            <p style={{ fontSize: 14, color: '#8a7b66', textAlign: 'center', marginBottom: 16, fontWeight: 500 }}>
              一次性购买，终身使用，含所有未来更新
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
                立即获取 — $10
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
            <span>Notion / Obsidian / Logseq 直接导入</span>
            <span>立即下载</span>
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
            打开就能用，不用再自己攒
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 15, color: '#9f927d',
            marginBottom: 40, fontWeight: 500
          }}>
            一个系统，三个核心。从零到退出，全套带走。
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
            v4.0 里面有什么
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
              { title: '验证想法', items: ['市场缺口分析表', '目标客户画像模板', '竞品扫描框架'] },
              { title: '开发 & 上线', items: ['MVP 范围界定模板', '上线 Checklist（7 步）', '定价策略手册'] },
              { title: '增长 & 退出', items: ['获客渠道矩阵', '估值计算模型', '退出准备评分卡'] }
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
            用过的人怎么说
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
              首发特惠 — $10
            </h2>
            <p style={{
              fontSize: 14, color: '#8a7b66', marginBottom: 8, fontWeight: 500,
              textDecoration: 'line-through'
            }}>
              原价 $49
            </p>
            <p style={{
              fontSize: 15, color: '#725d42', lineHeight: 1.7,
              marginBottom: 20, fontWeight: 500
            }}>
              一次性购买，终身使用。含所有未来更新。
            </p>
            <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
              获取 AI Solo Company OS v4.0
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
          <p><strong>价格：</strong>$10（首发特惠）</p>
          <p><strong>包含：</strong></p>
          <ul>
            <li>全套可填写的 Notion / Obsidian / Logseq 模板</li>
            <li>56 个 AI prompt 模板（复制即用）</li>
            <li>退出计划 + 估值模型</li>
            <li>终身更新</li>
          </ul>
          <p style={{ marginTop: 16, fontSize: 13, opacity: 0.7 }}>
            点击确认后将跳转到购买页面。
          </p>
        </Modal>
      </div>
    </Cursor>
  )
}
