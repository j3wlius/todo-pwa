<script setup>
import { Form } from 'vee-validate'
import EmailInput from '@/components/ui/EmailInput.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import TextInputField from '@/components/ui/TextInputField.vue'

function handleSubmit() {
  console.log('Submitted!')
}
</script>

<template>
  <div class="container">
    <div class="form-wrapper">
      <Form class="registration-form" @submit="handleSubmit">
        <div class="form-copy">
          <p class="eyebrow">Todo PWA</p>
          <h1>Sign up to create your tasks</h1>
          <p class="supporting-text">Create your account and start organizing your day.</p>
        </div>

        <div class="name-fields">
          <div class="field-slot">
            <TextInputField
              label="First Name"
              id="firstName"
              isRequired="true"
              fieldName="firstName"
            />
          </div>

          <div class="field-slot">
            <TextInputField
              label="Last Name"
              id="lastName"
              isRequired="true"
              fieldName="lastName"
            />
          </div>
        </div>

        <EmailInput />

        <PasswordInput />

        <button class="submit-button" type="submit">Create account</button>
        <p class="login-copy">
          Already have an account?
          <RouterLink to="login">Login</RouterLink>
        </p>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1.25rem;
}

.form-wrapper {
  width: min(100%, 42rem);
  padding: 2.5rem;
  border: 1px solid rgba(240, 248, 255, 0.08);
  border-radius: 1.75rem;
  background:
    radial-gradient(circle at top, rgba(165, 42, 42, 0.18), transparent 32%), rgba(7, 7, 8, 0.92);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-copy {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.eyebrow {
  color: rgba(240, 248, 255, 0.58);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 0.98;
  max-width: 12ch;
}

.supporting-text {
  max-width: 36ch;
  color: rgba(240, 248, 255, 0.68);
  font-size: 0.98rem;
  line-height: 1.55;
}

.name-fields {
  display: flex;
  gap: 1rem;
}

.field-slot {
  flex: 1;
}

.submit-button {
  margin-top: 0.5rem;
  border: 0;
  border-radius: 999px;
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, #d66d4d 0%, #a52a2a 100%);
  color: #fff7f4;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    filter 160ms ease;
  box-shadow: 0 18px 30px rgba(165, 42, 42, 0.28);
}

.submit-button:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}

.submit-button:focus-visible {
  outline: 2px solid rgba(240, 248, 255, 0.85);
  outline-offset: 3px;
}

.login-copy {
  color: rgba(240, 248, 255, 0.7);
  font-size: 0.95rem;
  text-align: center;
}

.login-copy a {
  margin-left: 0.35rem;
  color: #f6b18f;
  font-weight: 700;
}

.login-copy a:hover {
  color: #ffd4bf;
}

@media (max-width: 640px) {
  .form-wrapper {
    padding: 1.5rem;
    border-radius: 1.25rem;
  }

  .name-fields {
    flex-direction: column;
  }
}
</style>
