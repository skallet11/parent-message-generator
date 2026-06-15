const situationData = {
  safety: [
    { value: "fall", label: "넘어짐" },
    { value: "bump", label: "부딪힘" },
    { value: "stairs", label: "계단에서 미끄러짐" },
    { value: "playground", label: "운동장 사고" },
    { value: "nosebleed", label: "코피" }
  ],
  health: [
    { value: "stomach", label: "복통" },
    { value: "headache", label: "두통" },
    { value: "fever", label: "발열" },
    { value: "vomit", label: "구토" },
    { value: "condition", label: "컨디션 저하" }
  ],
  friend: [
    { value: "conflict", label: "친구와 다툼" },
    { value: "misunderstanding", label: "오해" },
    { value: "apology", label: "사과 / 화해" },
    { value: "upset", label: "속상한 일" }
  ],
  life: [
    { value: "running", label: "복도에서 뛰기" },
    { value: "noise", label: "교실에서 소란" },
    { value: "focus", label: "집중 부족" },
    { value: "rule", label: "약속 지키기 안내" }
  ],
  study: [
    { value: "supply", label: "준비물 안내" },
    { value: "homework", label: "과제 안내" },
    { value: "book", label: "책 / 공책 준비" },
    { value: "activity", label: "수업 활동 준비" }
  ],
  praise: [
    { value: "help", label: "친구를 도와줌" },
    { value: "presentation", label: "발표를 잘함" },
    { value: "clean", label: "정리정돈을 잘함" },
    { value: "kind", label: "배려하는 모습" }
  ],
  home: [
    { value: "observe", label: "가정에서 관찰 부탁" },
    { value: "hospital", label: "병원 진료 권장" },
    { value: "clothes", label: "여벌 옷 부탁" },
    { value: "contact", label: "연락 부탁" }
  ]
};

const messageParts = {
  fall: {
    intro: "오늘 학교생활 중 안내드릴 일이 있어 연락드립니다.",
    body: "친구들과 활동하던 중 넘어지는 일이 있었습니다. 보건실에서 상처 부위를 확인하고 필요한 처치를 하였습니다.",
    closing: "가정에서도 상처 부위가 붓거나 통증이 이어지는지 한 번 살펴봐 주세요."
  },
  bump: {
    intro: "오늘 학교생활 중 안내드릴 일이 있어 연락드립니다.",
    body: "활동 중 친구 또는 주변 물건에 부딪히는 일이 있었습니다. 학교에서 아이 상태를 확인하고 안정할 수 있도록 지도했습니다.",
    closing: "하교 후에도 통증이나 멍이 생기는지 살펴봐 주세요."
  },
  stairs: {
    intro: "오늘 안전과 관련하여 안내드립니다.",
    body: "계단을 오르내리던 중 발을 헛디디거나 미끄러지는 일이 있었습니다. 보건실에서 상태를 확인했습니다.",
    closing: "가정에서도 무릎이나 발목 통증이 이어지는지 확인해 주세요."
  },
  playground: {
    intro: "오늘 운동장 활동 중 있었던 일을 안내드립니다.",
    body: "운동장에서 놀이 또는 활동을 하던 중 다치는 일이 있었습니다. 보건실에서 상태를 확인하고 필요한 처치를 했습니다.",
    closing: "가정에서도 상처 부위와 아이의 컨디션을 살펴봐 주세요."
  },
  nosebleed: {
    intro: "오늘 건강과 관련하여 안내드립니다.",
    body: "코피가 나서 휴지로 지혈하고 잠시 안정을 취하도록 했습니다. 현재는 멈춘 상태입니다.",
    closing: "가정에서도 무리한 활동은 피하고 다시 코피가 나는지 살펴봐 주세요."
  },

  stomach: {
    intro: "오늘 아이 컨디션과 관련하여 안내드립니다.",
    body: "배가 아프다고 하여 보건실에서 상태를 확인하고 잠시 쉬도록 했습니다.",
    closing: "하교 후에도 복통이 이어지는지 살펴봐 주세요."
  },
  headache: {
    intro: "오늘 아이 컨디션과 관련하여 안내드립니다.",
    body: "머리가 아프다고 하여 보건실에서 쉬며 상태를 확인했습니다.",
    closing: "가정에서도 충분히 휴식할 수 있도록 도와주시고, 두통이 계속되는지 살펴봐 주세요."
  },
  fever: {
    intro: "오늘 건강 상태와 관련하여 안내드립니다.",
    body: "몸이 좋지 않고 열감이 있어 보건실에서 상태를 확인했습니다.",
    closing: "가정에서도 체온과 컨디션을 살펴봐 주세요."
  },
  vomit: {
    intro: "오늘 건강 상태와 관련하여 안내드립니다.",
    body: "구토 증상이 있어 보건실에서 상태를 확인하고 안정을 취하도록 했습니다.",
    closing: "하교 후에는 음식 섭취를 무리하지 않도록 해 주시고, 컨디션을 잘 살펴봐 주세요."
  },
  condition: {
    intro: "오늘 아이 컨디션과 관련하여 안내드립니다.",
    body: "평소보다 기운이 없거나 컨디션이 좋지 않아 보건실에서 상태를 확인했습니다.",
    closing: "가정에서도 충분히 쉴 수 있도록 도와주시고, 아이 상태를 살펴봐 주세요."
  },

  conflict: {
    intro: "오늘 친구 관계와 관련하여 안내드립니다.",
    body: "친구와 놀이 또는 대화 중 의견 차이로 다툼이 있었습니다. 서로의 이야기를 들어 보고 마음을 정리하는 시간을 가졌습니다.",
    closing: "가정에서도 아이의 이야기를 편안히 들어봐 주세요."
  },
  misunderstanding: {
    intro: "오늘 친구 관계와 관련하여 안내드립니다.",
    body: "친구와의 상황에서 오해가 있어 서로의 입장을 들어 보고 차분히 이야기 나누었습니다.",
    closing: "학교에서도 관계가 잘 회복될 수 있도록 살펴보겠습니다."
  },
  apology: {
    intro: "오늘 친구 관계와 관련하여 안내드립니다.",
    body: "친구와 있었던 일을 함께 돌아보고 사과와 화해의 시간을 가졌습니다.",
    closing: "가정에서도 아이가 자신의 마음을 잘 표현할 수 있도록 격려해 주세요."
  },
  upset: {
    intro: "오늘 아이 마음과 관련하여 안내드립니다.",
    body: "친구 관계에서 속상한 일이 있어 담임과 이야기를 나누었습니다. 아이가 감정을 정리할 수 있도록 도왔습니다.",
    closing: "가정에서도 아이 마음을 따뜻하게 살펴봐 주세요."
  },

  running: {
    intro: "오늘 생활지도와 관련하여 안내드립니다.",
    body: "복도에서 뛰는 모습이 있어 안전하게 걸어서 이동하도록 안내했습니다.",
    closing: "가정에서도 안전하게 이동하는 습관에 대해 한 번 이야기 나눠주세요."
  },
  noise: {
    intro: "오늘 생활지도와 관련하여 안내드립니다.",
    body: "교실에서 목소리가 커지거나 소란스러운 모습이 있어 차분히 생활할 수 있도록 지도했습니다.",
    closing: "가정에서도 함께 생활하는 공간에서의 약속에 대해 이야기 나눠주세요."
  },
  focus: {
    intro: "오늘 수업 태도와 관련하여 안내드립니다.",
    body: "수업 중 집중이 어려운 모습이 있어 차분히 참여할 수 있도록 안내했습니다.",
    closing: "가정에서도 학교생활에 대해 가볍게 이야기 나눠주시면 좋겠습니다."
  },
  rule: {
    intro: "오늘 학급 생활과 관련하여 안내드립니다.",
    body: "학급 약속을 지키는 부분에 대해 다시 이야기 나누었습니다.",
    closing: "가정에서도 학급 약속을 지키는 태도에 대해 격려해 주세요."
  },

  supply: {
    intro: "내일 준비물과 관련하여 안내드립니다.",
    body: "내일 수업 활동을 위해 준비물이 필요합니다.",
    closing: "아이와 함께 가방을 한 번 확인해 주시면 감사하겠습니다."
  },
  homework: {
    intro: "과제와 관련하여 안내드립니다.",
    body: "과제 확인이 필요합니다. 아이가 스스로 해야 할 일을 챙기는 연습을 할 수 있도록 안내했습니다.",
    closing: "가정에서도 과제 확인을 함께 부탁드립니다."
  },
  book: {
    intro: "수업 준비와 관련하여 안내드립니다.",
    body: "수업에 필요한 책이나 공책 준비가 필요합니다.",
    closing: "내일 수업에 어려움이 없도록 가방을 한 번 확인해 주세요."
  },
  activity: {
    intro: "내일 수업 활동 준비와 관련하여 안내드립니다.",
    body: "내일 수업 활동에 필요한 준비가 있어 안내드립니다.",
    closing: "활동에 필요한 물건을 챙겨 보내주시면 감사하겠습니다."
  },

  help: {
    intro: "오늘 칭찬드리고 싶은 모습이 있어 연락드립니다.",
    body: "친구를 도와주는 따뜻한 모습을 보여 칭찬해 주었습니다. 주변 친구를 살피고 배려하는 마음이 잘 드러났습니다.",
    closing: "가정에서도 많이 칭찬해 주세요."
  },
  presentation: {
    intro: "오늘 칭찬드리고 싶은 모습이 있어 연락드립니다.",
    body: "수업 시간에 자신 있게 발표하는 기특한 모습을 보였습니다. 자신의 생각을 또렷하게 말하려는 태도가 인상적이었습니다.",
    closing: "가정에서도 자신 있게 표현한 점을 많이 격려해 주세요."
  },
  clean: {
    intro: "오늘 칭찬드리고 싶은 모습이 있어 연락드립니다.",
    body: "자기 자리와 교실 정리정돈을 잘하는 모습을 보였습니다. 스스로 할 일을 챙기고 주변을 깨끗하게 정리하려는 태도가 좋았습니다.",
    closing: "가정에서도 스스로 정리하는 습관을 칭찬해 주세요."
  },
  kind: {
    intro: "오늘 칭찬드리고 싶은 모습이 있어 연락드립니다.",
    body: "친구를 배려하고 다정하게 말하는 모습이 인상적이었습니다. 친구의 마음을 생각하며 행동하는 모습이 참 기특했습니다.",
    closing: "가정에서도 따뜻한 마음을 많이 칭찬해 주세요."
  },

  observe: {
    intro: "가정에서 함께 살펴봐 주시면 좋을 내용이 있어 안내드립니다.",
    body: "학교에서도 아이의 상태나 마음을 살펴보고 있습니다.",
    closing: "가정에서도 아이의 상태나 마음을 한 번 살펴봐 주세요."
  },
  hospital: {
    intro: "건강 상태와 관련하여 안내드립니다.",
    body: "학교에서 상태를 살펴보았으나 불편함이 이어질 수 있어 안내드립니다.",
    closing: "증상이 이어지거나 불편함이 커질 경우 병원 진료를 고려해 주세요."
  },
  clothes: {
    intro: "여벌 옷과 관련하여 안내드립니다.",
    body: "학교생활 중 여벌 옷이 필요할 수 있어 안내드립니다.",
    closing: "가능하시면 여벌 옷을 챙겨 보내주시면 감사하겠습니다."
  },
  contact: {
    intro: "확인이 필요한 부분이 있어 안내드립니다.",
    body: "아이의 학교생활과 관련하여 함께 이야기 나누면 좋을 내용이 있습니다.",
    closing: "가능하실 때 연락 부탁드립니다."
  }
};

function updateSituations() {
  const category = document.getElementById("category").value;
  const situation = document.getElementById("situation");

  situation.innerHTML = "";

  situationData[category].forEach(item => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    situation.appendChild(option);
  });

  toggleSupplyBox();
}

function toggleSupplyBox() {
  const situation = document.getElementById("situation").value;
  const supplyBox = document.getElementById("supplyBox");

  if (situation === "supply" || situation === "activity" || situation === "book") {
    supplyBox.classList.remove("hidden");
  } else {
    supplyBox.classList.add("hidden");
  }
}

function makeKoreanMessage(name, time, situation, tone, extra, supplyItem) {
  const part = messageParts[situation];
  const timeText = time ? `${time}에 ` : "";

  let body = part.body;

  if (situation === "supply" || situation === "activity" || situation === "book") {
    body += ` 준비물은 ${supplyItem || "필요한 준비물"}입니다.`;
  }

  if (extra) {
    body += `\n\n추가 안내: ${extra}`;
  }

  if (tone === "warm") {
    return `안녕하세요, ${name} 학부모님.

${part.intro}

${timeText}${body}

${part.closing}`;
  }

  if (tone === "polite") {
    return `안녕하세요, ${name} 학부모님.

${name} 학생과 관련하여 안내 말씀드립니다.

${part.intro}

${timeText}${body}

${part.closing}`;
  }

  if (tone === "short") {
    return `안녕하세요, ${name} 학부모님.

${timeText}${body}

${part.closing}`;
  }

  return `안녕하세요, ${name} 학부모님.

${part.intro}

${timeText}${body}

${part.closing}`;
}

function generateMessage() {
  const name = document.getElementById("studentName").value || "학생";
  const time = document.getElementById("time").value;
  const situation = document.getElementById("situation").value;
  const tone = document.getElementById("tone").value;
  const extra = document.getElementById("extra").value.trim();
  const supplyItem = document.getElementById("supplyItem").value.trim();

  const korean = makeKoreanMessage(name, time, situation, tone, extra, supplyItem);

  document.getElementById("finalMessage").value = korean;
  document.getElementById("result").classList.remove("hidden");
}

function copyFinalMessage() {
  const text = document.getElementById("finalMessage").value;
  navigator.clipboard.writeText(text);
  alert("복사되었습니다.");
}

function openTranslate(lang) {
  const text = document.getElementById("finalMessage").value;

  if (!text.trim()) {
    alert("먼저 문장을 생성하거나 입력해 주세요.");
    return;
  }

  const url = `https://translate.google.com/?sl=ko&tl=${lang}&text=${encodeURIComponent(text)}&op=translate`;
  window.open(url, "_blank");
}

function openSchoolBell() {
  const text = document.getElementById("finalMessage").value;

  if (text.trim()) {
    navigator.clipboard.writeText(text);
    alert("알림장 문장이 복사되었습니다.\n학교종이에서 붙여넣기 하세요.");
  } else {
    alert("학교종이로 이동합니다.");
  }

  window.open("https://schoolbell-e.com/ko/main/home", "_blank");
}

window.onload = updateSituations;