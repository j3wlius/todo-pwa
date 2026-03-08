<script setup>
import { ErrorMessage, Field } from 'vee-validate'
const props = defineProps({
  label: String,
  id: String,
  isRequired: Boolean,
  fieldName: String,
})

function validateInput(value) {
  if (props.isRequired && !value) {
    return 'This field can not be empty'
  }

  if (value.length < 3) {
    return 'Input should be 3 or more characters'
  }

  return true
}
</script>

<template>
  <div class="input-field">
    <label :for="id">{{ label }} <span v-if="isRequired">*</span></label>
    <Field :id="id" :name="fieldName" type="text" :rules="validateInput" isRequired="isRequired" />
  </div>
  <ErrorMessage :name="fieldName" class="err-message" />
</template>

<style scoped>
.input-field {
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

label > span {
  font-size: 0.88rem;
  color: #ff8f8f;
}

input {
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
    box-shadow 160ms ease,
    transform 160ms ease;
}

input::placeholder {
  color: rgba(240, 248, 255, 0.38);
}

input:hover {
  border-color: rgba(240, 248, 255, 0.28);
  background: rgba(255, 255, 255, 0.06);
}

input:focus {
  border-color: rgba(165, 42, 42, 0.9);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(165, 42, 42, 0.16);
}
</style>
