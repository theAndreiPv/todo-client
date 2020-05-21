<template lang='pug'>
div(class='flex flex-col items-center justify-center min-h-full px-3 py-12 bg-dim')
  BaseSvg(name='logo' class='w-16 h-16 mb-9 text-theme-accent')
  form(class='w-full px-12 py-10 bg-white border rounded max-w-100' @submit.prevent='formSubmit')
    FormTextField(
      class='mb-2'
      icon='email'
      placeholder='Email'
      v-model.trim='$v.email.$model'
      :textError='textErrorEmail')
    FormTextField(
      class='mb-2'
      icon='lock'
      placeholder='Пароль'
      type='password'
      v-model.trim='$v.password.$model'
      :textError='textErrorPassword')
    BaseButton(type='submit') Войти
    div(class='mt-3 text-center') Нет аккаунта? &#32;
      router-link.TextLink(to='/registration') Регистрация
</template>

<script>
import FormTextField from '@/components/ui/FormTextField.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import messages from '@/utils/messages';
import {
  email, required, minLength, maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  components: {
    FormTextField, BaseButton,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required, maxLength: maxLength(64) },
    password: { required, minLength: minLength(6), maxLength: maxLength(64) },
  },
  computed: {
    textErrorEmail() {
      if (this.$v.email.$dirty) {
        if (!this.$v.email.required) return 'Email не должен быть пустым';
        if (!this.$v.email.email) return 'Не правильный email';
        if (!this.$v.email.maxLength) return `Макс. длинна email ${this.$v.email.$params.maxLength.max} символов`;
      }
      return '';
    },
    textErrorPassword() {
      if (this.$v.password.$dirty) {
        if (!this.$v.password.required) return 'Пароль не должен быть пустым';
        if (!this.$v.password.minLength || !this.$v.password.maxLength) return `Пароль должен содержать ${this.$v.password.$params.minLength.min}~${this.$v.password.$params.maxLength.max} символов`;
      }
      return '';
    },
  },
  methods: {
    async formSubmit() {
      if (!this.$v.$invalid) {
        try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          this.$router.push('/dashboard');
        } catch (err) {
          this.$toasted.show(messages[err.code] || 'Что-то пошло не так');
        }
      } else {
        this.$v.$touch();
      }
    },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$toasted.show(messages[this.$route.query.message]);
    }
  },
};
</script>
