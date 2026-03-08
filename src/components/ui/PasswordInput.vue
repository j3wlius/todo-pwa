<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import { ref, computed } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const passwordVisible = ref(false)

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value
}

const passwordFieldType = computed(() => (passwordVisible.value ? 'text' : 'password'))

function validatePassword(value) {
  if (!value) {
    return 'Password is required'
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters.'
  }

  return true
}
</script>

<template>
  <div class="password-input">
    <label for="password">Password</label>

    <div class="password-field">
      <Field :type="passwordFieldType" id="password" name="password" :rules="validatePassword" />
      <button
        type="button"
        :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
        @click="togglePasswordVisibility"
      >
        <EyeOff v-if="passwordVisible" />
        <Eye v-else />
      </button>
    </div>
    <ErrorMessage name="password" class="err-message" />
  </div>
</template>

<style scoped>
.password-input {
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

.password-field {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.2rem 0.25rem 0.2rem 0;
  border: 1px solid rgba(240, 248, 255, 0.16);
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.04);
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    box-shadow 160ms ease;
}

.password-field:focus-within {
  border-color: rgba(165, 42, 42, 0.9);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(165, 42, 42, 0.16);
}

.password-field :deep(input) {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--text-color);
  font: inherit;
  outline: none;
  padding: 0.9rem 0 0.9rem 1rem;
}

.password-field :deep(input::placeholder) {
  color: rgba(240, 248, 255, 0.38);
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 0.75rem;
  background: transparent;
  color: rgba(240, 248, 255, 0.74);
  cursor: pointer;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-color);
}

button:focus-visible {
  outline: 2px solid rgba(165, 42, 42, 0.9);
  outline-offset: 2px;
}

button:active {
  transform: scale(0.96);
}
</style>
