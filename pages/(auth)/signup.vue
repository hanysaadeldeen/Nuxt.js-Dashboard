<template lang="pug">
  main.overflow-hidden
    .row.h-100
      .col-lg-6.h-100.gradient-background.d-none.d-lg-block.position-relative
        .white-circle 
      .col-12.col-lg-6.h-100.d-flex.align-items-center.justify-content-center 
        .inputs-container(:style="{maxWidth: '400px',width:'100%', height: '504px'}").px-3.px-md-0
          h1.authName Sign Up for an Account
          form(@submit.prevent="signUp")
            el-input(
              v-model="userName"
              v-bind="nameField"
              style='width: 100%; height: 56px; margin-bottom: 15px'
              size="large"
              placeholder="Username"
              :prefix-icon="User"
              class="custom-icon-size"
              )
            span.error(v-if="nameErrors").mb-2  
              <el-icon>
                <Warning />
              </el-icon> 
              span.errorMessage {{ nameErrors }}
            el-input(
              v-model="userEmail"
              v-bind="emailField"
              style='width: 100%; height: 56px; margin-bottom: 15px'
              size="large"
              placeholder="Email"
              :prefix-icon="Message"
              class="custom-icon-size"
              )
            span.error(v-if="emailErrors").mb-2  
                <el-icon>
                  <Warning />
                </el-icon> 
                span.errorMessage {{ emailErrors}}
            el-input(
              v-model="userPassword"
              v-bind="passwordField"
              style='width: 100%; height: 56px; margin-bottom: 15px'
              size="large"
              type="password"
              placeholder="Please input password"
              :prefix-icon="Lock"
              show-password
              class="custom-icon-size"
              )
            span.error(v-if="passwordErrors").mb-2  
                <el-icon>
                  <Warning />
                </el-icon> 
                span.errorMessage {{ passwordErrors}}
            .d-flex.justify-content-start.align-items-center.gap-3.my-2
              el-checkbox(v-model="checked" size="large" class="custom-checkbox")
              div(@click='checked = !checked' :style="{cursor: 'pointer', width: '300px', color: '#858589', fontWeight: '400', fontSize: '12px' }")
                | By creating an account means you agree to the 
                span(style="color: #000000") Terms & Conditions 
                | and our 
                span(style="color: #000000") Privacy Policy
            BaseButton(
              title="Sign Up"
              width= '100%'
              height= '56px'
              style="margin: 15px 0"
              :backGround="isFormValid"
              :GrayBackgroundColor="!isFormValid"
              border-radius= '50px'
              @click="signUp"
              )
            .text-center.w-100 Already have an account? 
              NuxtLink(:to="{name: 'signin'}").authTriggre  Log In
</template>

<script setup lang="ts">
import { User, Lock, Message, Warning } from "@element-plus/icons-vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { ElNotification } from "element-plus";
const checked = ref(false);
const router = useRouter();

const schema = yup.object({
  userName: yup
    .string()
    .min(3, "UserName must have at least 3 characters")
    .required("Name is required"),
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
  value: userName,
  errorMessage: nameErrors,
  ...nameField
} = useField("userName");

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
    !nameErrors.value &&
    !emailErrors.value &&
    !passwordErrors.value &&
    userEmail.value &&
    userName.value &&
    userPassword.value &&
    checked.value == true
  );
});

const throwError = (msg: string) => {
  ElNotification({
    title: "Error",
    message: msg,
    type: "error",
    duration: 2000,
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

const signUp = handleSubmit(async () => {
  if (checked.value === true) {
    const { data, error } = await useAsyncGql({
      operation: "SignUp",
      variables: {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        avatar: "https://i.imgur.com/LDOO4Qs.jpg",
        role: "admin",
      },
    });

    if (error.value) {
      const errorMessage =
        error.value.cause.gqlErrors[0].extensions.originalError.message[0];
      throwError(errorMessage);
    }

    if (data.value) {
      throwSuccess();
      checked.value = false;
      router.push({ name: "signin" });
    }
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
  margin-bottom: 35px;
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
</style>
