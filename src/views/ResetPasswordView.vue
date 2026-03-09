<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import EmailInput from '@/components/ui/EmailInput.vue'
import '@/assets/styles/auth.css'

function handleReset() {
  console.log('Password reset successfully')
}

const userEmail = ref('')
</script>

<template>
  <div class="auth-shell">
    <div class="auth-backdrop"></div>

    <div class="auth-layout">
      <div class="auth-card">
        <Form class="auth-form" @submit="handleReset">
          <div class="auth-copy">
            <p class="auth-overline">Password reset</p>
            <h1 class="auth-title">Recover access</h1>
            <p class="auth-supporting">
              Enter the email linked to your account and we&apos;ll send reset instructions.
            </p>
          </div>

          <EmailInput v-model="userEmail" />

          <button class="auth-submit" type="submit">Reset password</button>

          <p class="auth-footnote">
            Back to
            <RouterLink to="/login">login</RouterLink>
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>
