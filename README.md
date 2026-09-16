# AI Archive

관심 있게 읽은 AI 관련 **보고서 · 기사 · 블로그 글**을 원문 링크와 함께 한국어로 요약해 모아두는 저장소입니다.

원문을 다시 열지 않아도 핵심을 되짚을 수 있도록, 요약뿐 아니라 **조사 방법 · 핵심 수치 · 시사점 · 읽을 때 유의할 점**까지 함께 정리합니다.

## 사이트

정적 HTML로 만들어져 있고 GitHub Pages로 바로 배포됩니다. 빌드 도구나 의존성이 없습니다.

- 목록 페이지: `docs/index.html`
- 글: `docs/posts/*.html`
- 공통 스타일·스크립트: `docs/assets/`

로컬에서 보려면 `docs/index.html`을 브라우저로 열면 됩니다.

### GitHub Pages 설정

저장소 **Settings → Pages** 에서 다음과 같이 지정하면 공개됩니다.

| 항목 | 값 |
| --- | --- |
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/docs` |

배포 주소는 `https://beyondlatent.github.io/ai-archive/` 입니다.

## 수록된 글

| 글 | 발행 기관 | 발행일 | 유형 |
| --- | --- | --- | --- |
| [The GenAI Divide: State of AI in Business 2025](docs/posts/2025-07-mit-nanda-genai-divide.html) | MIT Media Lab · Project NANDA | 2025-07 | 보고서 |
| [The Widening AI Value Gap](docs/posts/2025-09-bcg-widening-ai-value-gap.html) | Boston Consulting Group | 2025-09 | 보고서 |
| [기업 AI 도입 현황 리서치 정리 (2025~2026)](docs/posts/2025-2026-enterprise-ai-adoption-research.html) | McKinsey · PwC · BCG · Gartner | 2025-01 ~ 2026-09 | 리서치 정리 |

## 새 글 추가하기

1. `docs/posts/_TEMPLATE.html`을 복사해 새 파일을 만듭니다.
   - 파일명 규칙: `YYYY-MM-기관-제목-슬러그.html` (예: `2026-03-openai-enterprise-report.html`)
2. `{{ }}` 자리표시자를 채웁니다. 각 글은 아래 구성을 따릅니다.
   - 제목과 한 문단 요약(`dek`)
   - 메타 카드 — 발행 기관, 발행일, 저자, 유형, 추가일
   - **원문 링크 박스** — 공식 링크를 맨 위에, 미러나 보도 링크를 아래에
   - 목차
   - 한눈에 보기 → 조사 방법 → 핵심 수치 → 주요 발견 → 시사점 → 읽을 때 유의할 점
3. `docs/index.html`의 `#post-list`에 카드 하나를 추가합니다.
   - `data-tags`에 필터용 태그를 **소문자로, `|` 구분**해 넣습니다.
   - `data-search`에는 검색에 걸렸으면 하는 단어를 한국어와 영어 모두 넣습니다.
4. 히어로 영역의 글 수(`#doc-count`)와 `#result-count` 기본값을 갱신합니다.

### 태그 규칙

- **유형 태그** (하나만): `보고서`, `기사`, `블로그`, `리서치 정리`
- **주제 태그** (여러 개): `AI 도입`, `ROI`, `에이전트`, `생산성`, `인력`, `조직 변화`, `파일럿 실패` 등

새 필터를 목록 상단에 노출하려면 `docs/index.html`의 `.filters`에 칩 버튼을 추가하면 됩니다.

## 요약 원칙

- **원문 링크를 반드시 남긴다.** 공식 경로가 막혀 있으면 미러와 그 사정을 함께 적는다.
- **수치는 표로.** 본문 문장 안에 숫자를 흩뿌리지 않는다.
- **한계를 같이 적는다.** 표본 크기, 자기보고 편향, 발행 주체의 이해관계 등을 마지막 섹션에 정리한다.
- **핵심 용어는 영문을 병기한다.**
