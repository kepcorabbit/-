# 스칼프잇 채용 랜딩

Meta 광고용 채용 랜딩 페이지 (Vite + React + TypeScript + Tailwind CSS 4 + shadcn 구조).

```bash
npm install
npm run dev      # 로컬 미리보기
npm run build    # dist/ 생성 → Vercel·Netlify 등에 배포
```

## 수정할 곳
- 문구·조건·이미지: `src/content.ts` (`[대괄호]` 부분은 실제 조건으로 교체)
- 매장 사진: `public/images/`에 넣고 `content.ts`의 `images` 경로 변경
- 매장 영상: `public/videos/scalpit.mp4` → `heroVideoUrl`에 경로 입력
- 지원서 수신: `.env.example`를 `.env`로 복사 후 `VITE_APPLY_ENDPOINT`에 웹훅 주소(Google Apps Script 등)
- Meta 픽셀: `index.html` `<head>`에 픽셀 코드 삽입 → 지원 완료 시 `Lead` 이벤트 자동 전송

## 구조
- `src/components/ui/hero-with-video.tsx` — shadcn 규칙에 따라 `components/ui`에 둔 히어로 컴포넌트
- `src/components/recruit/apply-form.tsx` — 지원서 폼
- `src/App.tsx` — 랜딩 섹션 구성
