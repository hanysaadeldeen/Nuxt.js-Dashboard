<template lang="pug">
  main.overflow-hidden
    .row.h-100
      .col-lg-6.h-100.gradient-background.d-none.d-lg-block.position-relative
        .white-circle 
      .col-12.col-lg-6.h-100.d-flex.align-items-center.justify-content-center 
        .inputs-container(:style="{maxWidth: '400px',width:'100%', height: '504px'}").px-3.px-md-0
          h1.authName Sign In to your Account
          p(:style="{color: '#858589' , fontWeight: '400', fontSize: '16px' , marginBottom: '35px'}") Welcome back! please enter your details
          form(@submit.prevent="signIn")
              el-input(
                v-bind="emailField"
                v-model="userEmail"
                style="width: 100%; height: 56px; margin-bottom: 15px"
                size="large"
                placeholder="Email"
                :prefix-icon="Message"
                class="custom-icon-size"
                :class="{ 'input-error': emailErrors }"
              )
              span.error(v-if="emailErrors").mb-2  
                <el-icon>
                  <Warning />
                </el-icon> 
                span.errorMessage {{ emailErrors}}
              el-input(
                v-bind="passwordField"
                v-model="userPassword"
                style="width: 100%; height: 56px; margin-bottom: 15px"
                size="large"
                type="password"
                placeholder="Please input password"
                :prefix-icon="Lock"
                show-password
                :class="{ 'input-error': passwordErrors }"
                class="custom-icon-size input-error"
              )
              span.error(v-if="passwordErrors").mb-2 
                <el-icon>
                  <Warning />
                </el-icon> 
                span.errorMessage {{ passwordErrors}}
          .d-flex.justify-content-sm-between.align-items-center.my-2.w-100.flex-column.flex-sm-row.justify-content-center
              .check.d-flex.gap-2.align-items-center
                el-checkbox(v-model="checked" size="large" class="custom-checkbox" )
                div(@click='checked = !checked' :style="{cursor: 'pointer', color: '#000000', fontWeight: '500', fontSize: '14px' }") Remember me
              .forget
                .authTriggre Forget Password?
          BaseButton(
              title="Sign In"
              width= '100%'
              style="margin: 15px 0"
              height= '56px'
              :backGround="isFormValid"
              :GrayBackgroundColor="!isFormValid"
              border-radius= '50px'
              @click="signIn"
            )
          .text-center.w-100 Don’t have an account? 
              NuxtLink(:to="{name: 'signup'}").authTriggre Sign Up
</template>
<script setup lang="ts">
import { User, Lock, Message, Warning } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { ElNotification } from "element-plus";

const router = useRouter();
const checked = ref(false);

const schema = yup.object({
  userEmail: yup.string().email("Invalid email").required("Email is required"),
  userPassword: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .required("Password is required"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const {
  value: userEmail,
  errorMessage: emailErrors,
  ...emailField
} = useField("userEmail");

const {
  value: userPassword,
  errorMessage: passwordErrors,
  ...passwordField
} = useField("userPassword");

const isFormValid = computed(() => {
  return (
    !emailErrors.value &&
    !passwordErrors.value &&
    userEmail.value &&
    userPassword.value
  );
});

const throwError = (msg: string) => {
  ElNotification({
    title: "Error",
    message: msg,
    type: "error",
    duration: 3000,
  });
};
const throwSuccess = () => {
  ElNotification({
    title: "Success",
    message: "Signup successful!",
    type: "success",
    duration: 2000,
  });
};
const signIn = handleSubmit(async () => {
  const { data, error } = await useAsyncGql({
    operation: "Signin",
    variables: {
      email: userEmail.value,
      password: userPassword.value,
    },
  });

  if (error.value) {
    const errorMessage =
      error.value.cause.gqlErrors[0].extensions.originalError.message;
    throwError(errorMessage);
  }
  if (data.value) {
    throwSuccess();
    useCookie("token").value = data.value.login.access_token;
    useCookie("refresh_token").value = data.value.login.refresh_token;
    router.push("/");
  }
});
definePageMeta({
  layout: false,
});
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
}
.gradient-background {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
}
.white-circle {
  background: linear-gradient(90deg, #ffffff00, #ffffff0f);
  position: absolute;
  top: 142px;
  left: 92px;
  width: 524px;
  height: 524px;
  border-radius: 50%;
}
.authName {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  line-height: 30px;
}
@media (max-width: 768px) {
  .authName {
    font-size: 20px;
    line-height: 20px;
  }
}
.custom-icon-size >>> .el-input__prefix .el-icon {
  font-size: 24px;
}
form span {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #858589;
  text-align: start;
}
.custom-checkbox .el-checkbox__input {
  width: 40px;
  height: 40px;
}

.custom-checkbox .el-checkbox__inner {
  width: 40px;
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.custom-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  border-color: transparent;
}
.custom-checkbox .el-checkbox__inner::after {
  transform: scale(0.7);
  background-color: white;
}

.authTriggre {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.error {
  color: red;
  display: flex;
  align-items: center;
  gap: 5px;
}
.errorMessage {
  color: red;
  font-size: 12px;
}

.input-error {
  border-color: red !important;
}
</style>
