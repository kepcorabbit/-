// 채용 랜딩에 들어가는 문구·이미지를 한곳에 모았습니다.
// 조건이 바뀌면 이 파일만 수정하면 됩니다.

// 실제 스칼프잇 사진 (public/images). 직원 얼굴은 블러 처리되어 있습니다.
export const images = {
  hero: 'images/store-lobby.jpg',
  trainingLive: 'images/training-live.jpg',
  trainingClass: 'images/training-class.jpg',
  director: 'images/director.jpg',
  directorFirstShop: 'images/director-first-shop.jpg',
}

export const gallery = [
  { src: 'images/store-care-room.jpg', caption: '프라이빗 관리룸' },
  { src: 'images/store-lounge.jpg', caption: '라운지' },
  { src: 'images/store-powder-room.jpg', caption: '파우더룸' },
  { src: 'images/scalp-diagnosis.jpg', caption: '두피 진단 · 전후 비교' },
  { src: 'images/team-care.jpg', caption: '실전 관리 교육' },
]


export const stats = [
  { value: '1위', label: '네이버 플레이스' },
  { value: '1,500건', label: '월평균 예약' },
  { value: '6,000명+', label: '누적 관리 고객' },
  { value: '1년 만에 4곳', label: '직영점 확장' },
]

export const branches = [
  { name: '동탄', status: '운영 중' },
  { name: '천안', status: '운영 중' },
  { name: '광교', status: '운영 중' },
  { name: '압구정로데오', status: '운영 중' },
]

export const reasons = [
  {
    no: '01',
    title: '손님 모으기는 본사가 합니다',
    body: '네이버 플레이스 1위, 월평균 예약 1,500건. 빈 시간에 전단지 돌리고 SNS 붙잡고 있을 필요 없어요. 출근하면 이미 예약이 차 있습니다. 테라피스트님은 관리에만 집중하세요.',
    tag: '예약 걱정 ZERO',
  },
  {
    no: '02',
    title: '대표원장이 직접 가르칩니다',
    body: '외부 원장들이 돈 내고 배우러 오는 스칼프잇 아카데미 커리큘럼 그대로. 두피 진단부터 헤드스파 테크닉, 상담 스크립트까지 대표원장이 직접 1:1로 붙어서 교육합니다.',
    tag: '아카데미급 교육',
  },
  {
    no: '03',
    title: '혼자 헤매지 않는 시스템',
    body: '진단 → 상담 → 관리 → 재방문까지 전 과정이 매뉴얼로 정리되어 있어요. "이 손님은 어떻게 하지?" 고민 대신, 검증된 프로토콜대로 하면 결과가 나옵니다.',
    tag: '검증된 프로토콜',
  },
  {
    no: '04',
    title: '지점이 늘수록 자리도 늘어요',
    body: '1년 만에 직영점 4곳. 테라피스트 → 매니저 → 실장 → 점장까지, 지점이 늘어날 때마다 올라갈 자리가 생깁니다. 오래 버티는 게 아니라, 잘하면 빨리 올라가는 구조예요.',
    tag: '점장까지 승급'
  },
  {
    no: '05',
    title: '한 만큼 가져가세요',
    body: '신입도 월 240만원 + α, 경력 6개월 이상이면 월 260만원 + α부터. 인센티브·보너스·명절 상여금까지, 예약이 꽉 찬 매장이라 +α가 "이론상"이 아니라 실제로 쌓입니다.',
    tag: '인센티브',
  },
  {
    no: '06',
    title: '밝은 사람들이 모인 팀',
    body: '대표원장부터 00년생 ESFP. 눈치 보는 문화 대신 칭찬하고 같이 웃는 팀이에요. 서로의 성장을 진심으로 응원하는 곳에서 일하는 즐거움을 느껴보세요.',
    tag: '긍정 에너지',
  },
]

export const careerPath = [
  { step: 'STEP 1', title: '테라피스트', desc: '대표원장 직접 교육 수료 후 실전 투입' },
  { step: 'STEP 2', title: '매니저', desc: '고객 상담·재방문 관리까지 담당' },
  { step: 'STEP 3', title: '실장', desc: '지점 운영·후배 교육 리드' },
  { step: 'STEP 4', title: '점장', desc: '지점 운영 총괄 · 신규 지점 리드' },
]

export const salary = [
  { label: '신입', value: '240', note: '월 240만원 + α' },
  { label: '경력 6개월 이상', value: '260', note: '월 260만원 + α' },
]

export const conditions = [
  { label: '모집 직급', value: '테라피스트 · 매니저 · 실장 · 점장급 (신입 / 경력)' },
  { label: '근무지', value: '압구정로데오 · 광교 · 천안 · 동탄점 중 선택' },
  { label: '고용 형태', value: '정규직 · 프리랜서 / 아르바이트 가능 (수습 기간 1 – 3개월)' },
  { label: '급여', value: '신입 월 240만원 + α  /  경력 6개월 이상 월 260만원 + α' },
  { label: '근무 시간', value: '보통 10:00 – 20:00 (지점별로 약간씩 상이) · 주말 필수 근무' },
  { label: '휴무', value: '주 2일 휴무 (평일 중)' },
  { label: '복리후생', value: '직원가 제품 구매 · 명절 상여금 · 보너스 · 인센티브 · 연차 등' },
]

export const wanted = [
  '사람 만나는 게 즐겁고, 고객 변화에 보람을 느끼는 분',
  '배운 대로 꼼꼼하게 해내는 성실함이 있는 분',
  '두피·피부·헤드스파 분야에서 오래 커리어를 쌓고 싶은 분',
  '주말 근무가 가능한 분 (주말 필수 근무)',
]

export const preferred = [
  '미용사(일반·피부) 국가자격증 보유자',
  '두피·피부·마사지 관련 경력자',
  '매니저·실장·점장으로 성장하고 싶은 분',
]

export const process = [
  { title: '간편 지원', desc: '이 페이지에서 1분 지원' },
  { title: '전화 인터뷰', desc: '2일 내 연락드려요' },
  { title: '매장 면접', desc: '희망 지점에서 대면 면접' },
  { title: '입사 & 교육', desc: '대표원장 직접 교육 시작' },
]

export const faqs = [
  {
    q: '경력이 없어도 지원할 수 있나요?',
    a: '네. 스칼프잇은 교육 시스템이 갖춰져 있어서 신입도 대표원장 직접 교육을 거쳐 실전에 투입됩니다. 배우려는 마음이 가장 중요해요.',
  },
  {
    q: '주말에도 근무하나요?',
    a: '네, 주말은 필수 근무예요. 고객이 가장 많이 찾는 시간이라 그만큼 +α를 쌓기에도 좋은 시간이에요. 대신 휴무는 평일에 주 2일 보장돼요.',
  },
  {
    q: '근무 지점은 제가 고를 수 있나요?',
    a: '지원서에 희망 지점을 적어주시면 최대한 반영합니다. 신규 지점 오픈 시 이동·승급 기회도 열려 있어요.',
  },
  {
    q: '교육 기간은 얼마나 되나요?',
    a: '수습 기간은 1 – 3개월이에요. 교육·수습 기간에도 급여는 전액 지급되니 걱정 말고 배우는 데만 집중하세요.',
  },
  {
    q: '정규직만 뽑나요?',
    a: '아니요! 정규직은 물론 프리랜서·아르바이트로도 함께할 수 있어요. 지원서에 희망 근무 형태를 선택해주세요.',
  },
  {
    q: '면접 때 준비할 게 있나요?',
    a: '편한 복장으로 오시면 됩니다. 왜 이 일을 하고 싶은지, 앞으로 어떤 모습으로 성장하고 싶은지 솔직하게 이야기 나눠요.',
  },
]
