<template>
  <a
    class="github-link"
    href="https://github.com/pumba-dev/ponto-sistemas-teste"
    target="_blank"
  >
    GitHub
  </a>
</template>

<script>
export default {};
</script>

<style>
.github-link {
  text-decoration: none;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-color);
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  color: var(--primary-color);
}

.github-link:hover {
  color: white;
  background-color: var(--primary-color);
}

@media (min-width: 375px) {
  .github-link {
    font-size: 0.9rem;
    padding: 0.5rem 0.9rem;
  }
}

@media (min-width: 425px) {
  .github-link {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}

@media (min-width: 768px) {
  .github-link {
    font-size: 1.1rem;
    padding: 0.6rem 1.1rem;
  }
}

@media (min-width: 1024px) {
  .github-link {
    font-size: 1.2rem;
    padding: 0.75rem 1.25rem;
  }
}

@media (min-width: 1440px) {
  .github-link {
    font-size: 1.25rem;
    padding: 0.75rem 1.35rem;
  }
}

@media (min-width: 2560px) {
  .github-link {
    font-size: 1.3rem;
    padding: 0.8rem 1.4rem;
  }
}
</style>