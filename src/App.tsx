import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, MapPin, Phone, Plus } from 'lucide-react'
import { NavbarHero } from '@/components/ui/hero-with-video'
import { ApplyForm } from '@/components/recruit/apply-form'
import {
  branches,
  careerPath,
  conditions,
  faqs,
  heroVideoUrl,
  images,
  preferred,
  process,
  reasons,
  salary,
  stats,
  wanted,
} from '@/content'

const navItems = [
  { label: '왜 스칼프잇?', href: '#why' },
  { label: '성장 루트', href: '#growth' },
  { label: '근무 조건', href: '#conditions' },
  { label: 'FAQ', href: '#faq' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-semibold tracking-[0.3em] text-accent">{children}</div>
}

function App() {
  const [quickPhone, setQuickPhone] = useState('')

  function handleQuickApply(phone: string) {
    setQuickPhone(phone)
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      {/* 1. HERO */}
      <NavbarHero
        className="relative inset-auto overflow-visible"
        brandName={
          <span className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-semibold">Scálpit</span>
            <span className="text-xs font-semibold tracking-[0.22em] text-muted-foreground">CAREERS</span>
          </span>
        }
        navItems={navItems}
        loginLabel=""
        ctaLabel="지원하기"
        ctaHref="#apply"
        heroSubtitle="신입 월 240만원 + α · 4개 지점 채용 중"
        heroTitle={
          <>
            손님 걱정은 저희가 할게요.
            <br />
            <span className="font-brush text-[1.6em] font-normal leading-none text-accent">당신은 기술만 키우세요</span>
          </>
        }
        heroDescription="네이버 플레이스 1위 두피·헤드스파 스칼프잇. 예약이 꽉 찬 매장에서, 대표원장에게 직접 배우고, 지점이 늘어날수록 함께 올라가요."
        inputType="tel"
        inputLabel="연락처"
        inputIcon={Phone}
        emailPlaceholder="010-0000-0000"
        submitLabel="간편 지원"
        onSubmit={handleQuickApply}
        backgroundImage={images.hero}
        backgroundAlt="스칼프잇 매장 관리 공간"
        videoUrl={heroVideoUrl}
      />

      {/* 2. STATS */}
      <section aria-label="스칼프잇 숫자" className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-card p-5 text-center sm:p-7">
              <div className="text-2xl font-black tabular-nums sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground sm:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EMPATHY */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
          <Eyebrow>REAL TALK</Eyebrow>
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">
            혹시 지금,
            <br />
            이런 고민 하고 계신가요?
          </h2>
          <ul className="flex flex-col gap-3 text-left">
            {[
              '예약이 없어서 하루 종일 대기만 하다 퇴근한 날',
              '"알아서 배워"라는 말만 듣고 혼자 유튜브 보며 연습한 날',
              '열심히 해도 몇 년째 같은 자리, 미래가 안 그려지는 날',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl bg-card px-5 py-4 text-base sm:text-lg">
                <span className="mt-0.5 font-black text-accent">✕</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-extrabold sm:text-2xl">
            스칼프잇에서는 <span className="text-accent">이 세 가지가 없습니다.</span>
          </p>
        </div>
      </section>

      {/* 4. WHY SCALPIT */}
      <section id="why" className="scroll-mt-8 bg-card/40 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>WHY SCÁLPIT</Eyebrow>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              다른 샵이 아니라,
              <br />
              <span className="text-accent">스칼프잇이어야 하는 6가지 이유</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <article key={r.no} className="flex flex-col gap-4 rounded-3xl bg-card p-7">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-semibold text-accent">{r.no}</span>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-foreground">{r.tag}</span>
                </div>
                <h3 className="text-xl font-extrabold sm:text-2xl">{r.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRAINING SPOTLIGHT */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <img src={images.training} alt="두피 관리 교육 장면" className="aspect-[3/4] w-full rounded-3xl object-cover" loading="lazy" />
            <img src={images.care} alt="헤드스파 관리 장면" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col gap-6">
            <Eyebrow>TRAINING</Eyebrow>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              외부 원장님들이 돈 내고 배우는 교육,
              <br />
              <span className="text-accent">스칼프잇 직원은 입사하면 받습니다.</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              스칼프잇 아카데미는 다른 샵 원장님들이 찾아와 배우는 교육 과정이에요. 그 커리큘럼을 입사 후 대표원장이 직접,
              한 명 한 명에게 가르칩니다.
            </p>
            <ul className="flex flex-col gap-3">
              {['두피 타입별 진단법 & 상담 스크립트', '스칼프잇 시그니처 헤드스파 테크닉', '재방문을 만드는 고객 관리 노하우'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-base font-semibold sm:text-lg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. GROWTH PATH */}
      <section id="growth" className="scroll-mt-8 bg-card/40 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>GROWTH</Eyebrow>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              1년에 지점 4곳.
              <br />
              <span className="text-accent">당신의 자리도 같이 늘어납니다.</span>
            </h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {careerPath.map((c, i) => (
              <li
                key={c.step}
                className={`relative flex flex-col gap-2 rounded-3xl p-6 ${i === careerPath.length - 1 ? 'bg-primary text-primary-foreground' : 'bg-card'}`}
              >
                <span className="text-xs font-bold tracking-[0.2em] opacity-70">{c.step}</span>
                <span className="text-2xl font-black">{c.title}</span>
                <span className={i === careerPath.length - 1 ? 'opacity-90' : 'text-muted-foreground'}>{c.desc}</span>
                {i < careerPath.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-accent lg:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3">
            <div className="text-sm font-bold text-muted-foreground">스칼프잇 직영점</div>
            <div className="flex flex-wrap gap-2">
              {branches.map((b) => (
                <span
                  key={b.name}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                    b.status === '운영 중' ? 'bg-card' : 'border border-dashed border-accent text-accent'
                  }`}
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  {b.name}
                  <span className="font-normal opacity-70">{b.status}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIRECTOR MESSAGE */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl bg-accent-soft p-8 sm:p-12">
          <Eyebrow>FROM 채리언니</Eyebrow>
          <h2 className="text-2xl font-black leading-snug sm:text-4xl">
            "저도 작은 1인샵에서 시작했어요.
            <br />
            그래서 누구보다 잘 알아요."
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              손님 없는 시간이 얼마나 불안한지, 제대로 가르쳐주는 사람이 없을 때 얼마나 막막한지. 그래서 스칼프잇은 처음부터
              <strong> "직원이 기술에만 집중할 수 있는 샵"</strong>을 만들고 싶었어요.
            </p>
            <p>
              예약은 본사가 채우고, 교육은 제가 직접 하고, 지점이 늘어나면 함께 일한 사람이 그 자리를 맡는 것. 그게 제가
              생각하는 같이 크는 방법이에요.
            </p>
            <p>밝게, 즐겁게, 진심으로 같이 성장할 분을 기다릴게요!</p>
          </div>
          <div className="text-base font-bold">
            스칼프잇 대표원장 <span className="font-brush text-3xl font-normal text-accent">이채연</span>
          </div>
        </div>
      </section>

      {/* 8. CONDITIONS */}
      <section id="conditions" className="scroll-mt-8 bg-card/40 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>POSITION</Eyebrow>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">모집 요강</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {salary.map((s, i) => (
              <div key={s.label} className={`flex flex-col gap-1 rounded-3xl p-7 ${i === 1 ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
                <span className="text-sm font-bold opacity-80">{s.label}</span>
                <span className="flex items-baseline gap-1">
                  <span className="text-sm font-bold">월</span>
                  <span className="text-5xl font-black tabular-nums sm:text-6xl">{s.value}</span>
                  <span className="text-xl font-extrabold">만원 + α</span>
                </span>
              </div>
            ))}
          </div>
          <dl className="divide-y divide-border overflow-hidden rounded-3xl bg-card">
            {conditions.map((c) => (
              <div key={c.label} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:gap-8">
                <dt className="w-32 shrink-0 font-bold text-accent">{c.label}</dt>
                <dd className="text-base sm:text-lg">{c.value}</dd>
              </div>
            ))}
          </dl>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: '이런 분을 찾아요', items: wanted },
              { title: '이런 분이면 더 좋아요', items: preferred },
            ].map((group) => (
              <div key={group.title} className="flex flex-col gap-4 rounded-3xl bg-card p-7">
                <h3 className="text-xl font-extrabold">{group.title}</h3>
                <ul className="flex flex-col gap-3">
                  {group.items.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-1 rounded-2xl border border-border p-5">
                <span className="font-serif text-2xl font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg font-extrabold">{p.title}</span>
                <span className="text-sm text-muted-foreground">{p.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="scroll-mt-8 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-black sm:text-4xl">자주 묻는 질문</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                  {f.q}
                  <Plus className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden />
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. APPLY */}
      <section id="apply" className="scroll-mt-4 bg-primary/10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <Eyebrow>APPLY</Eyebrow>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              이력서 없이,
              <br />
              <span className="text-accent">1분이면 지원 끝.</span>
            </h2>
            <p className="text-muted-foreground">연락처만 남겨주시면 담당자가 직접 전화드려요.</p>
          </div>
          <ApplyForm key={quickPhone} initialPhone={quickPhone} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2">
          <span className="font-serif text-2xl font-semibold text-foreground">Scálpit</span>
          <span>스칼프잇 두피·헤드스파 · 압구정로데오 | 광교 | 천안 | 동탄</span>
          <span>채용 문의 [연락처 / 카카오톡 채널]</span>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <a
          href="#apply"
          className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary text-lg font-extrabold text-primary-foreground"
        >
          스칼프잇 지원하기 <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden />
        </a>
      </div>
    </div>
  )
}

export default App
