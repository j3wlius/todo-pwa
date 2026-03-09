<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import EmailInput from '@/components/ui/EmailInput.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import '@/assets/styles/auth.css'

const userEmail = ref('')
const userPassword = ref('')

async function handleLogin() {}
</script>

<template>
  <div class="auth-shell">
    <div class="auth-backdrop"></div>

    <div class="auth-layout">
      <div class="auth-card">
        <Form class="auth-form" @submit="handleLogin">
          <div class="auth-copy">
            <p class="auth-overline">Welcome back</p>
            <h1 class="auth-title">Sign in</h1>
            <p class="auth-supporting">Use your account details to continue.</p>
          </div>

          <EmailInput v-model="userEmail" />

          <PasswordInput v-model="userPassword" :minLength="false" />

          <div class="auth-row">
            <label class="auth-toggle">
              <input type="checkbox" />
              <span>Keep me signed in</span>
            </label>

            <RouterLink class="auth-link" to="reset-password">Forgot password?</RouterLink>
          </div>

          <button class="auth-submit" type="submit">Login</button>

          <p class="auth-footnote">
            Need an account?
            <RouterLink to="/register">Create one</RouterLink>
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>
