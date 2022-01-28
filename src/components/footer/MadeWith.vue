<template>
  <a class="made-with" href="https://semantic-ui.com/" target="_blank">
    <div class="image-box">
      <img
        class="img"
        src="../../assets/semantic-ui.png"
        alt="Ícone do Tailwind"
      />
    </div>
    <div class="text-box">
      <span class="madewith-title">Made With</span>
      <span class="madewith-text">Semantic UI</span>
    </div>
  </a>
</template>

<style scoped>
.text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.made-with {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.madewith-title {
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
}

.madewith-text {
  font-size: 1rem;
  color: #fff;
  text-align: center;
}

.image-box {
  width: 2rem;
  height: 2rem;
}

.img {
  width: 100%;
  height: 100%;
}
</style>