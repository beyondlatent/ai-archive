# AI Archive

관심 있게 읽은 보고서와 기사, 블로그를 정리해 두고 있습니다.

원문을 다시 찾지 않아도 핵심을 되짚을 수 있도록, 요약뿐 아니라 **원문 링크 · 조사 방법 · 핵심 수치 · 시사점 · 읽을 때 유의할 점**까지 함께 적습니다. 숫자가 비슷해 보여도 측정 기준이 다르면 그 차이를 짚어 둡니다.

**사이트:** https://beyondlatent.github.io/ai-archive/

---

## 수록된 글

### [The GenAI Divide: State of AI in Business 2025](docs/posts/2025-07-mit-nanda-genai-divide.html)

**MIT Media Lab · Project NANDA** · 2025년 7월 · 보고서

기업이 생성형 AI에 300~400억 달러를 썼지만 95%는 손익에 잡히는 효과를 얻지 못했다. 원인을 모델 성능이 아니라 **학습 격차(learning gap)** 에서 찾는다. 배포된 시스템이 피드백을 보존하지 못하고 맥락에 적응하지 못해 도입 첫날의 성능이 6개월 뒤에도 그대로라는 진단이다. 공식 구독을 산 기업은 40%인데 직원이 개인 도구를 쓰는 기업은 90%가 넘는 '섀도 AI 경제'도 함께 다룬다.

### [The Widening AI Value Gap](docs/posts/2025-09-bcg-widening-ai-value-gap.html)

**Boston Consulting Group** · 2025년 9월 · 보고서

59개국 임원 1,250명 조사. 전 세계 기업의 5%만 AI로 실질 가치를 만들고 60%는 투자하고도 성과가 없다. 상위 5%는 매출 성장 1.7배, 3년 총주주수익률 3.6배를 기록했다. 차이를 만든 것은 투자액이 아니라 착수한 과제를 배포까지 끌고 가는 비율(62% 대 12%)이었다.

### [기업 AI 도입 현황 리서치 정리 (2025~2026)](docs/posts/2025-2026-enterprise-ai-adoption-research.html)

**McKinsey · PwC · BCG · Gartner** · 2025년 1월 ~ 2026년 9월 · 리서치 정리

네 기관이 발표한 조사 20여 건을 원문 링크와 함께 정리하고 수치를 나란히 비교했다. 도입률은 올라갔는데 손익 효과는 제자리라는 결론이 네 곳에서 공통으로 나온다. 성과를 내는 상위 그룹은 5~6% 선에서 1년째 고정돼 있고, 이들의 공통점은 도구를 더 산 것이 아니라 업무 절차를 다시 그렸다는 점이다.

---

## 한눈에 보기

| 글 | 발행 기관 | 발행일 | 유형 |
| --- | --- | --- | --- |
| [The GenAI Divide](docs/posts/2025-07-mit-nanda-genai-divide.html) | MIT Media Lab · Project NANDA | 2025-07 | 보고서 |
| [The Widening AI Value Gap](docs/posts/2025-09-bcg-widening-ai-value-gap.html) | Boston Consulting Group | 2025-09 | 보고서 |
| [기업 AI 도입 현황 리서치 정리](docs/posts/2025-2026-enterprise-ai-adoption-research.html) | McKinsey · PwC · BCG · Gartner | 2025-01 ~ 2026-09 | 리서치 정리 |

---

## 저장소 구조

```
docs/
  index.html          목록 페이지 (검색 · 태그 필터)
  assets/
    style.css         공통 스타일 (라이트 · 다크 테마)
    site.js           테마 전환, 목록 검색과 필터
  posts/
    _TEMPLATE.html    새 글 템플릿
    *.html            글 하나당 파일 하나
AGENT.md              작업 지시사항과 원칙
README.md             이 문서
```

빌드 도구나 의존성이 없는 정적 HTML입니다. 로컬에서 보려면 `docs/index.html`을 브라우저로 열면 됩니다.

### GitHub Pages 설정

저장소 **Settings → Pages** 에서 지정합니다.

| 항목 | 값 |
| --- | --- |
| Source | Deploy from a branch |
| Branch | `main` |
| Folder | `/docs` |

---

## 새 글 추가

새 글을 정리해 추가하는 절차와 지켜야 할 원칙은 **[AGENT.md](AGENT.md)** 에 있습니다. 파일 명명 규칙, 글 문서 구조, 태그 규칙, 검증 항목을 담고 있습니다.
