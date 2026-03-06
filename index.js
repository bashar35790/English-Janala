
const AllLevels = async () => {
     fetch("https://openapi.programming-hero.com/api/levels/all")
     .then((res)=> res.json())
     .then((data)=> displayLevelNo(data.data))
};


const displayLevelNo = (levelNos)=>{
    // select levelNos container 
    const levelNosContainer = document.getElementById("levelNosContainer");
    levelNosContainer.innerHTML = "";

    levelNos.map((levelNo)=>{
        console.log(levelNo);
        levelNosContainer.innerHTML += `
        <button class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>Lesson-${levelNo.level_no}
        </button>
        `
    });

}

AllLevels();

