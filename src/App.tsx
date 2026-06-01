import { useState } from 'react'
import {
  Cursor, Button, Card, Modal, Footer, Typewriter, Divider, Icon
} from 'animal-island-ui'

const features = [
  {
    icon: 'icon-design' as const,
    title: 'Structured Knowledge System',
    desc: 'Templates, frameworks, and AI prompts organized as a repeatable system. Not a PDF guide — a living knowledge base that plugs into Notion, Obsidian, or Logseq.'
  },
  {
    icon: 'icon-diy' as const,
    title: '0 → 1 → Exit Playbook',
    desc: 'From idea validation to market launch to exit planning. Every phase mapped with decision trees, checklists, and actionable prompts.'
  },
  {
    icon: 'icon-helicopter' as const,
    title: 'Instant Download & Refund Guarantee',
    desc: 'Get access immediately after purchase. Not satisfied within 30 days? Full refund, no questions asked.'
  }
]

const testimonials = [
  { text: 'Finally, a system instead of scattered notes. This changed how I approach building solo.', name: '— Alex, Indie Hacker' },
  { text: 'The AI prompt templates alone are worth 10x the price. Plugged right into my workflow.', name: '— Mira, SaaS Founder' },
  { text: 'Went from idea paralysis to shipping in 2 weeks. The frameworks are gold.', name: '— Jin, Solo Developer' }
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
              Stop Building Side Projects.
              <br />
              Start Building Exit-Ready Assets.
            </h1>
          </Typewriter>

          <p style={{
            fontSize: 18, color: '#8a7b66', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto 32px', fontWeight: 500
          }}>
            A structured knowledge system of templates, frameworks, and AI prompts
            that turns 0 → 1 → Exit into a repeatable system.
            Plugs into Notion, Obsidian, or Logseq.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
              Get Instant Access — $10
            </Button>
            <Button type="default" size="large" onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Learn More
            </Button>
          </div>

          <div style={{
            marginTop: 24, display: 'flex', gap: 20, justifyContent: 'center',
            fontSize: 13, color: '#9f927d', fontWeight: 500, flexWrap: 'wrap'
          }}>
            <span>Notion / Obsidian / Logseq Ready</span>
            <span>Instant Download</span>
            <span>30-Day Refund</span>
          </div>
        </section>

        <Divider type="wave-yellow" />

        {/* Features */}
        <section id="features" style={{ padding: '64px 24px', maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 28, fontWeight: 700,
            color: '#794f27', marginBottom: 8
          }}>
            Everything You Need to Ship
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 15, color: '#9f927d',
            marginBottom: 40, fontWeight: 500
          }}>
            One system. Three pillars. Infinite leverage.
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
            What's Inside v4.0
          </h2>
          <p style={{
            textAlign: 'center', fontSize: 15, color: '#9f927d',
            marginBottom: 40, fontWeight: 500
          }}>
            Updated with new AI workflows and exit frameworks
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16
          }}>
            {[
              { title: 'Idea Validation', items: ['Market gap analyzer', 'ICP definition framework', 'Competitive landscape mapper'] },
              { title: 'Build & Launch', items: ['MVP scoping template', 'Launch checklist (7 phases)', 'Pricing strategy playbook'] },
              { title: 'Growth & Exit', items: ['Acquisition channel matrix', 'Valuation model', 'Exit readiness scorecard'] }
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
            Trusted by Solo Creators
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
              Launch Special — $10
            </h2>
            <p style={{
              fontSize: 14, color: '#8a7b66', marginBottom: 8, fontWeight: 500,
              textDecoration: 'line-through'
            }}>
              Normally $49
            </p>
            <p style={{
              fontSize: 15, color: '#725d42', lineHeight: 1.7,
              marginBottom: 20, fontWeight: 500
            }}>
              One-time purchase. Lifetime access. All future updates included.
            </p>
            <Button type="primary" size="large" onClick={() => setModalOpen(true)}>
              Get AI Solo Company OS v4.0
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
          <p><strong>Price:</strong> $10 (Launch Special)</p>
          <p><strong>Includes:</strong></p>
          <ul>
            <li>Complete template system for Notion / Obsidian / Logseq</li>
            <li>50+ AI prompt templates</li>
            <li>Exit playbook & valuation model</li>
            <li>Lifetime updates</li>
          </ul>
          <p style={{ marginTop: 16, fontSize: 13, opacity: 0.7 }}>
            After clicking OK, you'll be redirected to the purchase page.
          </p>
        </Modal>
      </div>
    </Cursor>
  )
}
