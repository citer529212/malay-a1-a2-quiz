const quizData = [
  { id: 1, section: 1, type: "mcq", q: "Как сказать «Меня зовут Анна»?", options: ["Saya suka Anna", "Nama saya Anna", "Saya dari Anna", "Anna saya nama"], correct: 1, points: 1 },
  { id: 2, section: 1, type: "mcq", q: "Какое слово означает «дом»?", options: ["sekolah", "rumah", "jalan", "bandar"], correct: 1, points: 1 },
  { id: 3, section: 1, type: "mcq", q: "Что означает слово «nasi»?", options: ["рыба", "курица", "рис", "вода"], correct: 2, points: 1 },
  { id: 4, section: 1, type: "mcq", q: "Как спросить «Который час?»?", options: ["Apa khabar?", "Di mana rumah?", "Pukul berapa?", "Siapa nama?"], correct: 2, points: 1 },
  { id: 5, section: 1, type: "mcq", q: "Как сказать «моя мама»?", options: ["ayah saya", "ibu saya", "adik saya", "kawan saya"], correct: 1, points: 1 },
  { id: 6, section: 1, type: "mcq", q: "Как сказать «Я из России»?", options: ["Saya suka Rusia", "Saya dari Rusia", "Saya ke Rusia", "Saya di Rusia"], correct: 1, points: 1 },
  { id: 7, section: 1, type: "mcq", q: "Какое слово означает «вода»?", options: ["nasi", "susu", "air", "kopi"], correct: 2, points: 1 },
  { id: 8, section: 1, type: "mcq", q: "Как сказать «У меня есть сестра»?", options: ["Saya suka adik", "Saya ada seorang adik", "Saya lihat adik", "Saya dan adik"], correct: 1, points: 1 },
  { id: 9, section: 1, type: "mcq", q: "Что означает «pagi»?", options: ["вечер", "ночь", "утро", "день"], correct: 2, points: 1 },
  { id: 10, section: 1, type: "mcq", q: "Как сказать «Я люблю есть рис»?", options: ["Saya suka makan nasi", "Saya makan suka nasi", "Nasi suka saya makan", "Saya nasi suka makan"], correct: 0, points: 1 },
  { id: 11, section: 2, type: "text", q: "Я живу в Куала-Лумпур. → Saya _____ di Kuala Lumpur.", correct: "tinggal", points: 2 },
  { id: 12, section: 2, type: "text", q: "Я люблю курицу. → Saya _____ ayam.", correct: "suka", points: 2 },
  { id: 13, section: 2, type: "text", q: "Сейчас 3 часа. → Sekarang pukul _____.", correct: "tiga", points: 2 },
  { id: 14, section: 2, type: "text", q: "У меня есть брат. → Saya _____ seorang abang.", correct: "ada", points: 2 },
  { id: 15, section: 2, type: "text", q: "Это моя семья. → Ini _____ saya.", correct: "keluarga", points: 2 },
  { id: 16, section: 2, type: "text", q: "Мой папа работает. → _____ saya bekerja.", correct: "ayah", points: 2 },
  { id: 17, section: 2, type: "text", q: "Я ем рыбу. → Saya _____ ikan.", correct: "makan", points: 2 },
  { id: 18, section: 2, type: "text", q: "Где кухня? → Di mana _____?", correct: "dapur", points: 2 },
  { id: 19, section: 2, type: "text", q: "Сейчас утро. → Sekarang _____.", correct: "pagi", points: 2 },
  { id: 20, section: 2, type: "text", q: "Сколько тебе лет? → _____ umur anda?", correct: "berapa", points: 2 },
  { id: 21, section: 3, type: "mcq", q: "adik = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 1, points: 1 },
  { id: 22, section: 3, type: "mcq", q: "pintu = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 0, points: 1 },
  { id: 23, section: 3, type: "mcq", q: "dapur = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 2, points: 1 },
  { id: 24, section: 3, type: "mcq", q: "ikan = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 3, points: 1 },
  { id: 25, section: 3, type: "mcq", q: "malam = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 4, points: 1 },
  { id: 26, section: 4, type: "text", q: "Переведите: «Меня зовут [имя]».", correct: "nama saya", points: 2 },
  { id: 27, section: 4, type: "text", q: "Переведите: «Я люблю свою семью».", correct: "saya suka keluarga saya", points: 2 },
  { id: 28, section: 4, type: "text", q: "Дополните: «Сейчас 5 часов» → Sekarang pukul _____.", correct: "lima", points: 2 },
  { id: 29, section: 4, type: "text", q: "Переведите: «Где твой дом?»", correct: "di mana rumah anda", points: 2 },
  { id: 30, section: 4, type: "text", q: "Составьте: «Я / есть / рис»", correct: "saya makan nasi", points: 2 }
];

const CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbxO-ZmiuMRzaxXn2dPAkQ4lbgRneHSWiMMTffoUTTqRbUYYjI50qyq-fYs71FUkIoJV/exec",
  secondsTotal: 10 * 60,
  questionsPerPage: 5,
  draftKey: "malay-a1-a2-quiz-draft-v2"
};

const state = {
  student: null,
  selectedLevel: "A1",
  currentPage: 0,
  answers: {},
  startedAt: null,
  finishedAt: null,
  remainingSeconds: CONFIG.secondsTotal,
  timerId: null,
  submitted: false
};

const els = {
  startScreen: document.querySelector("#startScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  studentForm: document.querySelector("#studentForm"),
  firstNameInput: document.querySelector("#firstNameInput"),
  lastNameInput: document.querySelector("#lastNameInput"),
  levelSelect: document.querySelector("#levelSelect"),
  startError: document.querySelector("#startError"),
  studentNameLabel: document.querySelector("#studentNameLabel"),
  levelLabel: document.querySelector("#levelLabel"),
  timer: document.querySelector("#timer"),
  progressBar: document.querySelector("#progressBar"),
  progressText: document.querySelector("#progressText"),
  questionNav: document.querySelector("#questionNav"),
  pageLabel: document.querySelector("#pageLabel"),
  quizForm: document.querySelector("#quizForm"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  clearDraftBtn: document.querySelector("#clearDraftBtn"),
  resultModal: document.querySelector("#resultModal"),
  closeModalBtn: document.querySelector("#closeModalBtn"),
  saveStatus: document.querySelector("#saveStatus"),
  resultSummary: document.querySelector("#resultSummary"),
  sectionBreakdown: document.querySelector("#sectionBreakdown"),
  answerReview: document.querySelector("#answerReview"),
  restartBtn: document.querySelector("#restartBtn")
};

const totalPages = Math.ceil(quizData.length / CONFIG.questionsPerPage);
const maxScore = quizData.reduce((sum, item) => sum + item.points, 0);

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:()[\]{}"'«»]/g, "")
    .replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function getAnswer(questionId) {
  return state.answers[String(questionId)];
}

function isAnswered(question) {
  const value = getAnswer(question.id);
  return value !== undefined && String(value).trim() !== "";
}

function getVisibleQuestions() {
  const start = state.currentPage * CONFIG.questionsPerPage;
  return quizData.slice(start, start + CONFIG.questionsPerPage);
}

function saveDraft() {
  if (!state.student || state.submitted) return;

  localStorage.setItem(CONFIG.draftKey, JSON.stringify({
    student: state.student,
    currentPage: state.currentPage,
    answers: state.answers,
    startedAt: state.startedAt,
    remainingSeconds: state.remainingSeconds
  }));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(CONFIG.draftKey);
    if (!raw) return null;
    const draft = JSON.parse(raw);
    if (!draft?.student?.firstName || !draft?.student?.lastName) return null;
    return draft;
  } catch {
    return null;
  }
}

function clearDraft() {
  localStorage.removeItem(CONFIG.draftKey);
}

function renderTimer() {
  const minutes = Math.floor(state.remainingSeconds / 60);
  const seconds = state.remainingSeconds % 60;
  els.timer.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
  els.timer.classList.toggle("is-low", state.remainingSeconds <= 60);
}

function startTimer() {
  clearInterval(state.timerId);
  renderTimer();

  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    renderTimer();
    saveDraft();

    if (state.remainingSeconds <= 0) {
      finishQuiz("time");
    }
  }, 1000);
}

function renderQuestionNav() {
  els.questionNav.innerHTML = quizData.map((question, index) => {
    const page = Math.floor(index / CONFIG.questionsPerPage);
    const classes = [
      "nav-dot",
      page === state.currentPage ? "is-current" : "",
      isAnswered(question) ? "is-answered" : ""
    ].filter(Boolean).join(" ");

    return `<button class="${classes}" type="button" data-page="${page}" aria-label="Перейти к вопросу ${question.id}">${question.id}</button>`;
  }).join("");
}

function renderProgress() {
  const answeredCount = quizData.filter(isAnswered).length;
  const percent = Math.round((answeredCount / quizData.length) * 100);
  els.progressBar.style.width = `${percent}%`;
  els.progressText.textContent = `${answeredCount} из ${quizData.length} отвечено`;
}

function renderQuestions() {
  const visibleQuestions = getVisibleQuestions();
  const first = state.currentPage * CONFIG.questionsPerPage + 1;
  const last = Math.min(first + CONFIG.questionsPerPage - 1, quizData.length);

  els.pageLabel.textContent = `Страница ${state.currentPage + 1} из ${totalPages}`;
  els.quizForm.innerHTML = visibleQuestions.map((question) => renderQuestion(question)).join("");

  els.prevBtn.disabled = state.currentPage === 0;
  els.nextBtn.hidden = state.currentPage === totalPages - 1;
  els.submitBtn.hidden = state.currentPage !== totalPages - 1;
  els.quizForm.setAttribute("aria-label", `Вопросы ${first}-${last}`);

  renderQuestionNav();
  renderProgress();
}

function renderQuestion(question) {
  const storedValue = getAnswer(question.id);

  if (question.type === "mcq") {
    const optionsHtml = question.options.map((option, index) => `
      <label class="option">
        <input
          type="radio"
          name="q${question.id}"
          value="${index}"
          ${Number(storedValue) === index ? "checked" : ""}
          data-question-id="${question.id}"
        />
        <span>${escapeHtml(option)}</span>
      </label>
    `).join("");

    return `
      <article class="question-card" id="question-${question.id}">
        <div class="question-header">
          <p class="question-title">${question.id}. ${escapeHtml(question.q)}</p>
          <span class="points">${question.points} балл.</span>
        </div>
        <div class="options">${optionsHtml}</div>
      </article>
    `;
  }

  return `
    <article class="question-card" id="question-${question.id}">
      <div class="question-header">
        <label class="question-title" for="q${question.id}">${question.id}. ${escapeHtml(question.q)}</label>
        <span class="points">${question.points} балл.</span>
      </div>
      <input
        id="q${question.id}"
        type="text"
        value="${escapeHtml(storedValue || "")}"
        data-question-id="${question.id}"
        autocomplete="off"
        spellcheck="false"
        inputmode="text"
      />
    </article>
  `;
}

function bindEvents() {
  els.studentForm.addEventListener("submit", handleStart);
  els.quizForm.addEventListener("input", handleAnswerInput);
  els.quizForm.addEventListener("change", handleAnswerInput);
  els.questionNav.addEventListener("click", handleQuestionNav);
  els.prevBtn.addEventListener("click", () => goToPage(state.currentPage - 1));
  els.nextBtn.addEventListener("click", () => goToPage(state.currentPage + 1));
  els.submitBtn.addEventListener("click", () => finishQuiz("manual"));
  els.clearDraftBtn.addEventListener("click", handleClearDraft);
  els.closeModalBtn.addEventListener("click", () => els.resultModal.hidden = true);
  els.restartBtn.addEventListener("click", restartQuiz);

  window.addEventListener("beforeunload", (event) => {
    if (!state.submitted && state.student) {
      saveDraft();
      event.preventDefault();
      event.returnValue = "";
    }
  });
}

function handleStart(event) {
  event.preventDefault();

  const firstName = els.firstNameInput.value.trim();
  const lastName = els.lastNameInput.value.trim();
  const selectedLevel = String(els.levelSelect.value || "A1").trim().toUpperCase();

  if (firstName.length < 2 || lastName.length < 2) {
    els.startError.textContent = "Введите имя и фамилию минимум из 2 символов.";
    els.startError.hidden = false;
    return;
  }

  const draft = loadDraft();
  const sameStudent = draft &&
    normalizeText(draft.student.firstName) === normalizeText(firstName) &&
    normalizeText(draft.student.lastName) === normalizeText(lastName);

  state.student = {
    firstName,
    lastName,
    fullName: ` `
  };
  state.selectedLevel = selectedLevel;

  if (sameStudent && confirm("Найден незавершённый тест для этого ученика. Продолжить с сохранённого места?")) {
    state.currentPage = Number(draft.currentPage || 0);
    state.answers = draft.answers || {};
    state.startedAt = draft.startedAt || new Date().toISOString();
    state.remainingSeconds = Math.max(1, Number(draft.remainingSeconds || CONFIG.secondsTotal));
  } else {
    state.currentPage = 0;
    state.answers = {};
    state.startedAt = new Date().toISOString();
    state.remainingSeconds = CONFIG.secondsTotal;
    clearDraft();
  }

  els.startScreen.hidden = true;
  els.quizScreen.hidden = false;
  els.studentNameLabel.textContent = state.student.fullName;
  els.levelLabel.textContent = `Уровень: ${state.selectedLevel}`;
  renderQuestions();
  startTimer();
  saveDraft();
}

function handleAnswerInput(event) {
  const target = event.target;
  const questionId = target.dataset.questionId;
  if (!questionId) return;

  state.answers[questionId] = target.value;
  renderQuestionNav();
  renderProgress();
  saveDraft();
}

function handleQuestionNav(event) {
  const button = event.target.closest("button[data-page]");
  if (!button) return;
  goToPage(Number(button.dataset.page));
}

function goToPage(page) {
  state.currentPage = Math.max(0, Math.min(totalPages - 1, page));
  renderQuestions();
  saveDraft();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleClearDraft() {
  if (!confirm("Сбросить все текущие ответы и начать тест заново?")) return;

  state.answers = {};
  state.currentPage = 0;
  state.remainingSeconds = CONFIG.secondsTotal;
  state.startedAt = new Date().toISOString();
  clearDraft();
  renderQuestions();
  renderTimer();
}

function gradeQuiz() {
  const sectionStats = {};
  let score = 0;
  let correctCount = 0;
  const answerRows = [];

  for (const question of quizData) {
    const sectionKey = `section${question.section}`;
    if (!sectionStats[sectionKey]) {
      sectionStats[sectionKey] = { score: 0, max: 0 };
    }
    sectionStats[sectionKey].max += question.points;

    const rawAnswer = getAnswer(question.id);
    const normalizedAnswer = normalizeText(rawAnswer);
    let expected;
    let isCorrect = false;

    if (question.type === "mcq") {
      const selectedIndex = rawAnswer === undefined || rawAnswer === "" ? null : Number(rawAnswer);
      expected = question.options[question.correct];
      isCorrect = selectedIndex === question.correct;
    } else {
      expected = question.correct;
      isCorrect = normalizedAnswer === normalizeText(question.correct);
    }

    const earned = isCorrect ? question.points : 0;
    score += earned;
    sectionStats[sectionKey].score += earned;
    if (isCorrect) correctCount += 1;

    answerRows.push({
      id: question.id,
      section: question.section,
      type: question.type,
      question: question.q,
      answer: question.type === "mcq" && rawAnswer !== undefined ? question.options[Number(rawAnswer)] : (rawAnswer || ""),
      expected,
      isCorrect,
      points: earned,
      maxPoints: question.points
    });
  }

  return {
    score,
    maxScore,
    level: getLevel(score, maxScore),
    correctCount,
    incorrectCount: quizData.length - correctCount,
    sectionStats,
    answers: answerRows
  };
}

function getLevel(score, max) {
  const ratio = score / max;
  if (ratio >= 0.85) return "A2 strong";
  if (ratio >= 0.70) return "A2";
  if (ratio >= 0.50) return "A1";
  return "Needs practice";
}

function formatDuration(seconds) {
  const safeSeconds = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

async function finishQuiz(reason) {
  if (state.submitted) return;

  if (reason === "manual") {
    const unanswered = quizData.filter((question) => !isAnswered(question)).length;
    const message = unanswered > 0
      ? `Не отвечено вопросов: ${unanswered}. Завершить тест?`
      : "Завершить тест и отправить результат?";
    if (!confirm(message)) return;
  }

  state.submitted = true;
  clearInterval(state.timerId);
  state.finishedAt = new Date().toISOString();

  const timeUsedSeconds = CONFIG.secondsTotal - Math.max(0, state.remainingSeconds);
  const graded = gradeQuiz();
  const payload = buildPayload(graded, reason, timeUsedSeconds);

  renderResult(graded, payload);
  els.resultModal.hidden = false;
  clearDraft();

  await sendResult(payload);
}

function buildPayload(graded, finishReason, timeUsedSeconds) {
  const sections = {};
  for (let section = 1; section <= 4; section += 1) {
    const stats = graded.sectionStats[`section${section}`] || { score: 0, max: 0 };
    sections[`section${section}Score`] = stats.score;
    sections[`section${section}Max`] = stats.max;
  }

  return {
    studentFullName: state.student.fullName,
    studentFirstName: state.student.firstName,
    studentLastName: state.student.lastName,
    selectedLevel: state.selectedLevel,
    score: graded.score,
    maxScore: graded.maxScore,
    level: graded.level,
    correctCount: graded.correctCount,
    incorrectCount: graded.incorrectCount,
    timeUsed: formatDuration(timeUsedSeconds),
    timeUsedSeconds,
    finishReason,
    startedAt: state.startedAt,
    finishedAt: state.finishedAt,
    ...sections,
    answers: JSON.stringify(graded.answers)
  };
}

async function sendResult(payload) {
  els.saveStatus.textContent = "Сохраняем результат…";
  els.saveStatus.className = "save-status";

  try {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

    await fetch(CONFIG.appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    els.saveStatus.textContent = "Результат отправлен в Google Sheets";
    els.saveStatus.className = "save-status is-ok";
  } catch (error) {
    console.error("Result submit failed", error);
    els.saveStatus.textContent = "Не удалось отправить результат. Скопируйте данные из отчёта.";
    els.saveStatus.className = "save-status is-fail";
  }
}

function renderResult(graded, payload) {
  const percent = Math.round((graded.score / graded.maxScore) * 100);

  els.resultSummary.innerHTML = `
    <div class="result-tile">
      <div class="muted">Балл</div>
      <div class="result-value">${graded.score}/${graded.maxScore}</div>
    </div>
    <div class="result-tile">
      <div class="muted">Процент</div>
      <div class="result-value">${percent}%</div>
    </div>
    <div class="result-tile">
      <div class="muted">Уровень</div>
      <div class="result-value">${escapeHtml(graded.level)}</div>
    </div>
  `;

  els.sectionBreakdown.innerHTML = [1, 2, 3, 4].map((section) => {
    const stats = graded.sectionStats[`section${section}`] || { score: 0, max: 0 };
    return `
      <div class="section-tile">
        <div class="muted">Раздел ${section}</div>
        <strong>${stats.score}/${stats.max}</strong>
      </div>
    `;
  }).join("");

  els.answerReview.innerHTML = graded.answers.map((row) => `
    <div class="review-item ${row.isCorrect ? "correct" : "incorrect"}">
      <strong>${row.isCorrect ? "Верно" : "Ошибка"} · Вопрос ${row.id}</strong>
      <div>${escapeHtml(row.question)}</div>
      <div><span class="muted">Ответ:</span> ${escapeHtml(row.answer || "—")}</div>
      <div><span class="muted">Правильно:</span> ${escapeHtml(row.expected)}</div>
    </div>
  `).join("");

  console.info("Quiz result payload", payload);
}

function restartQuiz() {
  clearDraft();
  clearInterval(state.timerId);
  Object.assign(state, {
    student: null,
    selectedLevel: "A1",
    currentPage: 0,
    answers: {},
    startedAt: null,
    finishedAt: null,
    remainingSeconds: CONFIG.secondsTotal,
    timerId: null,
    submitted: false
  });

  els.resultModal.hidden = true;
  els.quizScreen.hidden = true;
  els.startScreen.hidden = false;
  els.studentForm.reset();
  if (els.levelSelect) els.levelSelect.value = "A1";
  els.firstNameInput.focus();
}

bindEvents();
