<template lang='pug'>
div(class='flex flex-col items-center justify-center min-h-full px-3 py-12 bg-dim')
  BaseSvg(name='logo' class='w-16 h-16 mb-9 text-theme-accent')
  form(class='w-full px-12 py-10 bg-white border rounded max-w-100' @submit.prevent='formSubmit')
    BaseInput(
      class='mb-2'
      icon='user'
      placeholder='Имя (не обязательно)'
      v-model.trim='$v.name.$model'
      :textError='textErrorName')
    BaseInput(
      class='mb-2'
      icon='email'
      placeholder='Email'
      v-model.trim='$v.email.$model'
      :textError='textErrorEmail')
    BaseInput(
      class='mb-2'
      icon='lock'
      placeholder='Пароль'
      type='password'
      v-model.trim='$v.password.$model'
      :textError='textErrorPassword')
    button(type='submit' class='w-full px-4 text-white duration-300 rounded font-secondary bg-theme hover:bg-theme-accent h-9') Зарегистрироваться
    div(class='mt-3 text-center') Уже есть аккаунт? &#32;
      router-link(to='/login' class='hover:underline text-theme') Войти
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import {
  email, required, minLength, maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'Registration',
  components: {
    BaseInput,
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
  }),
  validations: {
    name: { maxLength: maxLength(64) },
    email: { email, required, maxLength: maxLength(64) },
    password: { required, minLength: minLength(6), maxLength: maxLength(64) },
  },
  computed: {
    textErrorName() {
      if (this.$v.name.$dirty) {
        if (!this.$v.name.maxLength) return `Макс. длинна имени ${this.$v.name.$params.maxLength.max} символов`;
      }
      return '';
    },
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
        await this.$store.dispatch('registration', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
      } else {
        this.$v.$touch();
      }
    },
  },
};
</script>
