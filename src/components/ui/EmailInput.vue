<script setup>
import { Field, ErrorMessage } from 'vee-validate'

function validateEmail(value) {
  if (!value) {
    return 'Email is required'
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!regex.test(value)) {
    return 'Enter a valid email address'
  }

  return true
}
</script>

<template>
  <div class="email-input">
    <label for="email">Email</label>
    <Field type="email" id="email" name="email" :rules="validateEmail" />
    <ErrorMessage name="email" class="err-message" />
  </div>
</template>

<style scoped>
.email-input {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
}

label {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: rgba(240, 248, 255, 0.88);
}

:deep(input) {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(240, 248, 255, 0.16);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-color);
  font: inherit;
  outline: none;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;
}

:deep(input::placeholder) {
  color: rgba(240, 248, 255, 0.38);
}

:deep(input:hover) {
  border-color: rgba(240, 248, 255, 0.28);
  background: rgba(255, 255, 255, 0.06);
}

:deep(input:focus) {
  border-color: rgba(165, 42, 42, 0.9);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(165, 42, 42, 0.16);
}
</style>
