<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import EmailInput from '@/components/ui/EmailInput.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import TextInputField from '@/components/ui/TextInputField.vue'
import '@/assets/styles/auth.css'

import { supabase } from '@/api/supabase-config'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()

const formData = ref({
  firstName: '',
  lastName: '',
  userEmail: '',
  passwordInput: '',
})

async function handleRegistration() {
  isLoading.value = true

  try {
    const { firstName, lastName, userEmail, passwordInput } = formData.value

    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: passwordInput,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (error) throw error

    const user = data.user

    if (user) {
      const { error: profileError } = await supabase.from('user_profiles').insert({
        id: user.id,
        first_name: firstName,
        last_name: lastName,
      })

      if (profileError) throw profileError
    }

    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
    throw error
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-shell">
    <div class="auth-backdrop"></div>

    <div class="auth-layout auth-layout-wide">
      <div class="auth-card">
        <Form class="auth-form auth-form-wide" @submit="handleRegistration">
          <div class="auth-copy">
            <p class="auth-overline">Create account</p>
            <h1 class="auth-title">Sign up</h1>
            <p class="auth-supporting">Set up your account and start organizing your tasks.</p>
          </div>

          <div class="name-fields">
            <div class="field-slot">
              <TextInputField
                label="First Name"
                id="firstName"
                :isRequired="true"
                fieldName="firstName"
                v-model="formData.firstName"
              />
            </div>

            <div class="field-slot">
              <TextInputField
                label="Last Name"
                id="lastName"
                :isRequired="true"
                fieldName="lastName"
                v-model="formData.lastName"
              />
            </div>
          </div>

          <EmailInput v-model="formData.userEmail" />

          <PasswordInput v-model="formData.passwordInput" :minLength="true" />

          <button class="auth-submit" type="submit">Create account</button>
          <p class="auth-footnote">
            Already have an account?
            <RouterLink to="/login">Login</RouterLink>
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout-wide {
  width: min(100%, 38rem);
}

.name-fields {
  display: flex;
  gap: 1rem;
}

.field-slot {
  flex: 1;
}

@media (max-width: 640px) {
  .name-fields {
    flex-direction: column;
  }
}
</style>
