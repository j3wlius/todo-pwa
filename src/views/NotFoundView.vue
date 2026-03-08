<template>
  <div class="container">
    <div>Page Not found</div>
    <p>404</p>
    <RouterLink to="/">Back home</RouterLink>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f0f8ff;
}

.container p {
  font-size: 20rem;
}

.container a {
  display: block;
  font-size: 1.4rem;
  border-bottom: 1px solid;
}

.container a:hover {
  color: #a52a2a;
}
</style>
