const quizData = [
  // PART 1: Multiple Choice (1 pt each)
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
  // PART 2: Fill-in (2 pts each)
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
  // PART 3: Matching (1 pt each)
  { id: 21, section: 3, type: "mcq", q: "adik = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 1, points: 1 },
  { id: 22, section: 3, type: "mcq", q: "pintu = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 0, points: 1 },
  { id: 23, section: 3, type: "mcq", q: "dapur = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 2, points: 1 },
  { id: 24, section: 3, type: "mcq", q: "ikan = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 3, points: 1 },
  { id: 25, section: 3, type: "mcq", q: "malam = ?", options: ["дверь", "младший брат/сестра", "кухня", "рыба", "ночь"], correct: 4, points: 1 },
  // PART 4: Translation/Completion (2 pts each)
  { id: 26, section: 4, type: "text", q: "Переведите: «Меня зовут [имя]».", correct: "nama saya", points: 2 },
  { id: 27, section: 4, type: "text", q: "Переведите: «Я люблю свою семью».", correct: "saya suka keluarga saya", points: 2 },
  { id: 28, section: 4, type: "text", q: "Дополните: «Сейчас 5 часов» → Sekarang pukul _____.", correct: "lima", points: 2 },
  { id: 29, section: 4, type: "text", q: "Переведите: «Где твой дом?»", correct: "di mana rumah anda", points: 2 },
  { id: 30, section: 4, type: "text", q: "Составьте: «Я / есть / рис»", correct: "saya makan nasi", points: 2 }
];

// Paste your Google Apps Script Web App URL here.
const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxO-ZmiuMRzaxXn2dPAkQ4lbgRneHSWiMMTffoUTTqRbUYYjI50qyq-fYs71FUkIoJV/exec";

const TOTAL_TIME_SECONDS = 10 * 60;
const QUESTIONS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);
const MAX_SCORE = quizData.reduce((acc, item) => acc + item.points, 0);

const refs = {};
const questionMap = Object.fromEntries(quizData.map((item) => [item.id, item]));

const state = {
  currentPage: 0,
  answers: {},
  timerId: null,
  remainingSeconds: TOTAL_TIME_SECONDS,
  startedAtMs: 0,
  finished: true,
  studentFirstName: "",
  studentLastName: "",
  studentFullName: ""
};

document.addEventListener("DOMContentLoaded", () => {
  refs.startScreen = document.getElementById("startScreen");
  refs.startForm = document.getElementById("startForm");
  refs.firstNameInput = document.getElementById("firstNameInput");
  refs.lastNameInput = document.getElementById("lastNameInput");
  refs.startError = document.getElementById("startError");

  refs.quizContent = document.getElementById("quizContent");
  refs.timer = document.getElementById("timer");
  refs.progressLabel = document.getElementById("progressLabel");
  refs.progressBar = document.getElementById("progressBar");
  refs.pageLabel = document.getElementById("pageLabel");
  refs.quizRegion = document.getElementById("quizRegion");
  refs.prevBtn = document.getElementById("prevBtn");
  refs.nextBtn = document.getElementById("nextBtn");
  refs.submitBtn = document.getElementById("submitBtn");

  refs.resultsModal = document.getElementById("resultsModal");
  refs.resultSummary = document.getElementById("resultSummary");
  refs.syncStatus = document.getElementById("syncStatus");
  refs.resultBreakdown = document.getElementById("resultBreakdown");
  refs.detailedResults = document.getElementById("detailedResults");
  refs.restartBtn = document.getElementById("restartBtn");

  refs.startForm.addEventListener("submit", handleStartQuiz);
  refs.prevBtn.addEventListener("click", handlePrevious);
  refs.nextBtn.addEventListener("click", handleNext);
  refs.submitBtn.addEventListener("click", handleSubmit);
  refs.restartBtn.addEventListener("click", handleRestart);

  showStartScreen();
});

function showStartScreen() {
  clearTimer();
  refs.resultsModal.classList.remove("open");
  refs.quizContent.classList.add("hidden");
  refs.startScreen.classList.remove("hidden");

  state.currentPage = 0;
  state.answers = {};
  state.remainingSeconds = TOTAL_TIME_SECONDS;
  state.startedAtMs = 0;
  state.finished = true;

  refs.startError.textContent = "";
  refs.timer.classList.remove("warning");
  refs.timer.textContent = "10:00";
  refs.progressLabel.textContent = `0 / ${quizData.length}`;
  refs.progressBar.style.width = "0%";
  refs.pageLabel.textContent = `1 / ${TOTAL_PAGES}`;
  refs.quizRegion.innerHTML = "";

  refs.prevBtn.disabled = true;
  refs.nextBtn.disabled = true;
  refs.submitBtn.disabled = true;

  setSyncStatus("Статус отправки появится после завершения теста.", "");
}

function handleStartQuiz(event) {
  event.preventDefault();

  const firstName = refs.firstNameInput.value.trim();
  const lastName = refs.lastNameInput.value.trim();

  if (!firstName || !lastName) {
    refs.startError.textContent = "Введите имя и фамилию. / Enter both first and last name.";
    return;
  }

  state.studentFirstName = firstName;
  state.studentLastName = lastName;
  state.studentFullName = `${firstName} ${lastName}`;

  refs.startError.textContent = "";
  refs.startScreen.classList.add("hidden");
  refs.quizContent.classList.remove("hidden");

  initializeQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initializeQuiz() {
  state.currentPage = 0;
  state.answers = {};
  state.remainingSeconds = TOTAL_TIME_SECONDS;
  state.startedAtMs = Date.now();
  state.finished = false;

  clearTimer();
  refs.timer.classList.remove("warning");
  updateTimerDisplay();
  renderCurrentPage();
  updateNavigationButtons();
  updateProgress();
  startTimer();
}

function startTimer() {
  state.timerId = setInterval(() => {
    if (state.finished) {
      return;
    }

    state.remainingSeconds -= 1;
    updateTimerDisplay();

    if (state.remainingSeconds <= 60) {
      refs.timer.classList.add("warning");
    }

    if (state.remainingSeconds <= 0) {
      submitQuiz("time");
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function handlePrevious() {
  if (state.finished || state.currentPage === 0) {
    return;
  }

  state.currentPage -= 1;
  renderCurrentPage();
  updateNavigationButtons();
}

function handleNext() {
  if (state.finished || state.currentPage >= TOTAL_PAGES - 1) {
    return;
  }

  state.currentPage += 1;
  renderCurrentPage();
  updateNavigationButtons();
}

function handleSubmit() {
  if (state.finished) {
    return;
  }

  const shouldSubmit = window.confirm("Завершить тест и показать результаты? / Submit quiz now?");
  if (shouldSubmit) {
    submitQuiz("manual");
  }
}

function submitQuiz(reason) {
  if (state.finished) {
    return;
  }

  state.finished = true;
  clearTimer();

  refs.prevBtn.disabled = true;
  refs.nextBtn.disabled = true;
  refs.submitBtn.disabled = true;

  const results = calculateResults();
  renderResults(results, reason);
  void sendResultsToSheets(results, reason);
}

function calculateResults() {
  const sectionScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  const sectionMax = { 1: 0, 2: 0, 3: 0, 4: 0 };
  const details = [];

  let totalScore = 0;
  let totalCorrect = 0;

  for (const item of quizData) {
    sectionMax[item.section] += item.points;

    const userAnswer = state.answers[item.id] || "";
    const correctAnswer = item.type === "mcq" ? item.options[item.correct] : item.correct;
    const isCorrect = normalizeText(userAnswer) === normalizeText(correctAnswer);

    if (isCorrect) {
      totalScore += item.points;
      totalCorrect += 1;
      sectionScores[item.section] += item.points;
    }

    details.push({
      id: item.id,
      section: item.section,
      question: item.q,
      points: item.points,
      type: item.type,
      userAnswer,
      correctAnswer,
      isCorrect,
      earned: isCorrect ? item.points : 0
    });
  }

  return {
    totalScore,
    sectionScores,
    sectionMax,
    details,
    totalCorrect,
    totalIncorrect: quizData.length - totalCorrect,
    level: determineLevel(totalScore),
    timeUsedSeconds: TOTAL_TIME_SECONDS - Math.max(0, state.remainingSeconds)
  };
}

function determineLevel(score) {
  if (score >= 32) {
    return "A2";
  }

  if (score >= 20) {
    return "A1";
  }

  return "Beginner";
}

function renderResults(results, reason) {
  const timeoutNote = reason === "time" ? "<p><strong>Время вышло:</strong> тест отправлен автоматически.</p>" : "";

  refs.resultSummary.innerHTML = `
    <p><strong>Student:</strong> ${escapeHtml(state.studentFullName)}</p>
    <p><strong>Score:</strong> ${results.totalScore} / ${MAX_SCORE}</p>
    <p><strong>Level:</strong> ${results.level}</p>
    <p><strong>Time Used:</strong> ${formatTime(results.timeUsedSeconds)} / 10:00</p>
    <p><strong>Correct / Incorrect:</strong> ${results.totalCorrect} / ${results.totalIncorrect}</p>
    ${timeoutNote}
  `;

  refs.resultBreakdown.innerHTML = [1, 2, 3, 4]
    .map((sectionId) => {
      const score = results.sectionScores[sectionId];
      const max = results.sectionMax[sectionId];
      const percent = Math.round((score / max) * 100);
      return `<div class="breakdown-item"><strong>Section ${sectionId}</strong>: ${score} / ${max} (${percent}%)</div>`;
    })
    .join("");

  refs.detailedResults.innerHTML = results.details
    .map((item) => {
      const safeQuestion = escapeHtml(item.question);
      const safeUser = item.userAnswer ? escapeHtml(item.userAnswer) : "<em>Нет ответа / No answer</em>";
      const safeCorrect = escapeHtml(item.correctAnswer);
      const explanation = item.type === "mcq"
        ? "Проверка: точное совпадение выбранного варианта (без учета регистра)."
        : "Проверка: trim + lowercase + удаление лишней пунктуации/пробелов.";

      return `
        <article class="result-item ${item.isCorrect ? "correct" : "incorrect"}">
          <p><strong>Q${item.id} (Section ${item.section}, ${item.points} pts)</strong></p>
          <p>${safeQuestion}</p>
          <p><strong>Your answer:</strong> ${safeUser}</p>
          <p><strong>Correct answer:</strong> ${safeCorrect}</p>
          <p><strong>Result:</strong> ${item.isCorrect ? "Correct" : "Incorrect"} (${item.earned}/${item.points})</p>
          <p><strong>Explanation:</strong> ${escapeHtml(explanation)}</p>
        </article>
      `;
    })
    .join("");

  setSyncStatus("Подготовка отправки в Google Sheets...", "pending");
  refs.resultsModal.classList.add("open");
}

async function sendResultsToSheets(results, reason) {
  if (!SHEETS_WEB_APP_URL || SHEETS_WEB_APP_URL.includes("PASTE_")) {
    setSyncStatus("Google Sheets не настроен: вставьте Web App URL в script.js", "error");
    return;
  }

  const payload = {
    submittedAtIso: new Date().toISOString(),
    studentFirstName: state.studentFirstName,
    studentLastName: state.studentLastName,
    studentFullName: state.studentFullName,
    score: results.totalScore,
    maxScore: MAX_SCORE,
    level: results.level,
    correctCount: results.totalCorrect,
    incorrectCount: results.totalIncorrect,
    timeUsed: formatTime(results.timeUsedSeconds),
    timeUsedSeconds: results.timeUsedSeconds,
    finishReason: reason,
    section1Score: results.sectionScores[1],
    section1Max: results.sectionMax[1],
    section2Score: results.sectionScores[2],
    section2Max: results.sectionMax[2],
    section3Score: results.sectionScores[3],
    section3Max: results.sectionMax[3],
    section4Score: results.sectionScores[4],
    section4Max: results.sectionMax[4],
    answers: results.details.map((item) => ({
      id: item.id,
      section: item.section,
      points: item.points,
      earned: item.earned,
      isCorrect: item.isCorrect,
      userAnswer: item.userAnswer,
      correctAnswer: item.correctAnswer
    }))
  };

  setSyncStatus("Отправляем результат в Google Sheets...", "pending");

  try {
    const response = await fetch(SHEETS_WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    setSyncStatus("Результат успешно отправлен в Google Sheets.", "success");
  } catch (primaryError) {
    try {
      await fetch(SHEETS_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      setSyncStatus("Результат отправлен (no-cors). Проверьте запись в таблице.", "success");
    } catch (fallbackError) {
      console.error("Google Sheets send failed", { primaryError, fallbackError });
      setSyncStatus("Не удалось отправить результат. Проверьте URL Apps Script.", "error");
    }
  }
}

function setSyncStatus(message, type) {
  refs.syncStatus.textContent = message;
  refs.syncStatus.className = "sync-status";

  if (type) {
    refs.syncStatus.classList.add(type);
  }
}

function handleRestart() {
  refs.startForm.reset();
  state.studentFirstName = "";
  state.studentLastName = "";
  state.studentFullName = "";

  showStartScreen();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentPage() {
  const start = state.currentPage * QUESTIONS_PER_PAGE;
  const end = start + QUESTIONS_PER_PAGE;
  const pageItems = quizData.slice(start, end);

  refs.pageLabel.textContent = `${state.currentPage + 1} / ${TOTAL_PAGES}`;

  refs.quizRegion.innerHTML = pageItems
    .map((item, index) => {
      const absoluteNumber = start + index + 1;
      return renderQuestionCard(item, absoluteNumber);
    })
    .join("");

  attachQuestionListeners();
}

function renderQuestionCard(item, questionNumber) {
  const commonHeader = `
    <article class="question-card" data-question-id="${item.id}">
      <div class="question-meta">
        <span>Question ${questionNumber} / ${quizData.length}</span>
        <span>Section ${item.section} • ${item.points} pt${item.points > 1 ? "s" : ""}</span>
      </div>
      <h3 class="question-title">${escapeHtml(item.q)}</h3>
  `;

  if (item.type === "mcq") {
    const options = item.options
      .map((option, optionIndex) => {
        const inputId = `q${item.id}_opt${optionIndex}`;
        const checked = normalizeText(state.answers[item.id] || "") === normalizeText(option) ? "checked" : "";

        return `
          <label class="option-item" for="${inputId}">
            <input
              id="${inputId}"
              type="radio"
              name="question_${item.id}"
              value="${optionIndex}"
              data-question-id="${item.id}"
              ${checked}
            />
            <span>${escapeHtml(option)}</span>
          </label>
        `;
      })
      .join("");

    return `${commonHeader}<div class="option-list" role="radiogroup">${options}</div></article>`;
  }

  const value = escapeHtml(state.answers[item.id] || "");
  return `
    ${commonHeader}
      <label for="input_${item.id}" class="status-label">Введите ответ / Enter answer</label>
      <input
        id="input_${item.id}"
        class="answer-input"
        type="text"
        data-question-id="${item.id}"
        placeholder="Type your answer"
        value="${value}"
        autocomplete="off"
      />
    </article>
  `;
}

function attachQuestionListeners() {
  const radios = refs.quizRegion.querySelectorAll('input[type="radio"]');
  const textInputs = refs.quizRegion.querySelectorAll('input[type="text"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const target = event.currentTarget;
      const questionId = Number(target.dataset.questionId);
      const question = questionMap[questionId];
      const selectedOption = question.options[Number(target.value)] || "";

      state.answers[questionId] = selectedOption;
      updateProgress();
    });
  });

  textInputs.forEach((textInput) => {
    textInput.addEventListener("input", (event) => {
      const target = event.currentTarget;
      const questionId = Number(target.dataset.questionId);
      state.answers[questionId] = target.value;
      updateProgress();
    });
  });
}

function updateNavigationButtons() {
  refs.prevBtn.disabled = state.currentPage === 0 || state.finished;
  refs.nextBtn.disabled = state.currentPage === TOTAL_PAGES - 1 || state.finished;
  refs.submitBtn.disabled = state.finished;
}

function updateProgress() {
  const answered = quizData.filter((item) => {
    const answer = state.answers[item.id];
    return typeof answer === "string" && normalizeText(answer).length > 0;
  }).length;

  refs.progressLabel.textContent = `${answered} / ${quizData.length}`;
  refs.progressBar.style.width = `${(answered / quizData.length) * 100}%`;
}

function updateTimerDisplay() {
  refs.timer.textContent = formatTime(Math.max(0, state.remainingSeconds));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
