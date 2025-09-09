        const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const modalYes = document.getElementById('modalYes');
const modalNo = document.getElementById('modalNo');
const congrats = document.getElementById('congrats');
const audio = document.getElementById('audio');
let noClickStage = 0;
let gameEnded = false;
// Yes اصلی
yesBtn.addEventListener('click', () => {
  if (gameEnded) return;
  showModal("👀 واقعاً مطمئنی؟");
});
// Yes داخل مودال
modalYes.addEventListener('click', () => {
  modal.style.display = 'none';
  if (noClickStage === 0) {
    congrats.style.display = 'block';
    audio.play();
    gameEnded = true;
  } else if (noClickStage === 1) {
    alert("دیگه فایده ندا🤨ره!");
    gameEnded = true;
  } else if (noClickStage === 2) {
    alert("🥱دیگه فایده نداره!");
    gameEnded = true;
  }
});
// No اصلی
noBtn.addEventListener('click', () => {
  if (gameEnded) return;
  handleNoClick();
});
// No داخل مودال
modalNo.addEventListener('click', () => {
  if (gameEnded) return;
  modal.style.display = 'none';
  handleNoClick();
});
function showModal(message) {
  modalText.textContent = message;
  modal.style.display = 'flex';
}
function handleNoClick() {
  noClickStage++;
  if (noClickStage === 1) {
    showModal("آیا مطمئنی؟🙄");
  } else if (noClickStage === 2) {
    showModal("😡آخرین فرصت، مطمئن هستی؟");
  } else {
    modal.style.display = 'none';
    congrats.textContent = "⚰🚬بعدا به حسابت می‌رسم بی لیاقت !⚠️";
    congrats.style.display = 'block';
    gameEnded = true;
  }
}