import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { branches } from '@/content'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const positionOptions = ['테라피스트', '매니저', '실장', '점장급']
const experienceOptions = ['신입', '6개월 미만', '6개월 – 1년', '1 – 3년', '3년 이상']
const licenseOptions = ['미용사(일반)', '미용사(피부)', '두피 관련 민간자격', '없음']

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring'

interface ApplyFormProps {
  initialPhone?: string
}

export function ApplyForm({ initialPhone = '' }: ApplyFormProps) {
  const [phone, setPhone] = useState(initialPhone)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      position: form.get('position'),
      branch: form.get('branch'),
      experience: form.get('experience'),
      licenses: form.getAll('licenses'),
      message: form.get('message'),
      submittedAt: new Date().toISOString(),
    }

    setStatus('sending')
    try {
      const endpoint = import.meta.env.VITE_APPLY_ENDPOINT as string | undefined
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        })
      } else {
        console.log('지원서 (VITE_APPLY_ENDPOINT 미설정):', payload)
      }
      window.fbq?.('track', 'Lead', { content_name: '스칼프잇 채용' })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-card p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden />
        <h3 className="text-2xl font-extrabold">지원이 완료됐어요!</h3>
        <p className="text-muted-foreground">
          남겨주신 연락처로 곧 연락드릴게요.
          <br />
          스칼프잇에 관심 가져주셔서 진심으로 고마워요.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl bg-card p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold">이름 *</span>
          <input name="name" required autoComplete="name" placeholder="홍길동" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold">연락처 *</span>
          <input
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="010-0000-0000"
            pattern="[0-9\-\s]{9,14}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold">희망 근무 지점 *</span>
          <select name="branch" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              지점을 선택해주세요
            </option>
            {branches.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
                {b.status !== '운영 중' ? ` (${b.status})` : ''}
              </option>
            ))}
            <option value="무관">어디든 좋아요</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold">지원 직급 *</span>
          <select name="position" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              직급을 선택해주세요
            </option>
            {positionOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold">관련 경력 *</span>
          <select name="experience" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              경력을 선택해주세요
            </option>
            {experienceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-2 text-sm font-bold">보유 자격 (선택)</legend>
        <div className="flex flex-wrap gap-2">
          {licenseOptions.map((o) => (
            <label
              key={o}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent-soft"
            >
              <input type="checkbox" name="licenses" value={o} className="accent-[var(--accent)]" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-bold">스칼프잇에 하고 싶은 한마디 (선택)</span>
        <textarea name="message" rows={3} placeholder="지원 동기나 궁금한 점을 편하게 적어주세요" className={fieldClass} />
      </label>

      <label className="flex items-start gap-3 text-sm font-semibold">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--accent)]" />
        <span>[필수] 주말 필수 근무 조건을 확인했습니다.</span>
      </label>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--accent)]" />
        <span>
          [필수] 채용 진행을 위한 개인정보(이름, 연락처, 경력) 수집·이용에 동의합니다. 수집된 정보는 채용 종료 후
          [○개월] 뒤 파기됩니다.
        </span>
      </label>

      {status === 'error' && <p className="text-sm font-semibold text-accent">전송에 실패했어요. 잠시 후 다시 시도해주세요.</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-6 text-lg font-extrabold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <Send className="h-5 w-5" aria-hidden />}
        1분 만에 지원하기
      </button>
    </form>
  )
}
