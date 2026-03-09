const AllLevels = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
  const data = await res.json();
  displayLevelNo(data.data);
};
AllLevels();


const displayLessonData = async (levelNo) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/level/${levelNo}`,
  );
  const data = await res.json();
  const lessons = data.data;
  console.log(lessons);
  const lessonContentContainer = document.getElementById("lessonContent");
  lessonContentContainer.innerHTML = "";
  let html = "";

  lessons.forEach((lesson) => {
    html += `
     <div class="card w-96 bg-base-100 card-xl shadow-sm">
        <div class="card-body gap-5">
          <div class="flex flex-col gap-2 items-center justify-center">
            <h2 class="card-title">${lesson?.word}</h2>
            <p>Meaning / Pronunciation</p>
            <h2 class="card-title">"${lesson.meaning ? lesson.meaning : "No meaning found"} / ${lesson.pronunciation ? lesson.pronunciation : "No pronunciation found"}"</h2>
          </div>

          <div class="justify-between card-actions">
            <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn"><i class="fa-solid fa-microphone"></i></button>
          </div>
        </div>
    </div>`;
  });

  lessonContentContainer.innerHTML = html;
};

const displayLevelNo = (levelNos) => {
  // select levelNos container
  const levelNosContainer = document.getElementById("levelNosContainer");
  const lessonContentContainer = document.getElementById("lessonContent");
  levelNosContainer.innerHTML = "";

  levelNos.map((levelNo) => {
    levelNosContainer.innerHTML += `
        <button class="btn btn-outline btn-primary" onclick="displayLessonData(${levelNo.level_no})">
            <i class="fa-solid fa-book-open"></i>Lesson-${levelNo.level_no}
        </button>
        `;
  });
};
