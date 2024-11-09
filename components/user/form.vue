<template lang="pug">
    form(@submit.prevent="addUser")
      .d-flex.flex-column.gap-3
        .row
            .col-12.col-sm-3 
                h1(style='color:#000000;font-size: 14px;font-weight: 600;line-height: 20px')  Name
            .col-12.col-md-7.d-flex.gap-2.gap-md-3.flex-column.flex-md-row
                div(class="input-responsive")
                  el-input(
                      v-model="userFirstName"
                      v-bind='firstNameField'
                      
                      size="large"
                      placeholder="First Name"
                      )
                  span.error(v-if="firstNameErrors").mt-2  
                    <el-icon>
                      <Warning />
                    </el-icon>
                    span.errorMessage {{ firstNameErrors}} 
                div(class="input-responsive")
                  el-input(
                      v-model="userLastName"
                      v-bind='lastNameField'
                      size="large"
                      placeholder="last Name"
                      )
                  span.error(v-if="lastNameErrors").mt-2  
                    <el-icon>
                      <Warning />
                    </el-icon> 
                    span.errorMessage {{ lastNameErrors}} 
        .row
            .col-12.col-md-3 
                h1(style='color:#000000;font-size: 14px;font-weight: 600;line-height: 20px')  Email address
            .col-12.col-md-7.d-flex.flex-column
                el-input(
                    v-model="userEmail"      
                    v-bind='emailField'   
                    class="input-responsive2"
                    type="email"
                    size="large"
                    placeholder="Your Email "
                    )
                span.error(v-if="emailErrors").mt-2    
                  <el-icon>
                    <Warning />
                  </el-icon>
                  span.errorMessage {{ emailErrors}} 
        .row
            .col-12.col-md-3 
                h1(style='color:#000000;font-size: 14px;font-weight: 600;line-height: 20px')  Password
            .col-12.col-md-7.d-flex.flex-column
                el-input(
                    v-model="userPassword"
                    v-bind='passwordField'   
                    class="input-responsive2"
                    size="large"
                    placeholder="---"
                    type="password"
                    show-password
                    )
                span.error(v-if="passwordErrors").mt-2
                  <el-icon>
                    <Warning />
                  </el-icon>
                  span.errorMessage {{ passwordErrors}}
        .row
            .col-12.col-md-3 
                h1(style='color:#000000;font-size: 14px;font-weight: 600;line-height: 20px')  Role
            .col-12.col-md-7.d-flex.flex-column
                el-select(
                    v-model="userRole"
                    v-bind='roleField'   
                    placeholder="Role"
                    class="input-responsive2"
                    size="large"
                  )
                    el-option(
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    )
                span.error(v-if="roleErrors").mt-2 
                  <el-icon>
                    <Warning />
                  </el-icon>
                  span.errorMessage {{ roleErrors}}
                
        .row
          .col-12.col-md-3
            h1(style="color: #000000; font-size: 14px; font-weight: 600; line-height: 20px") Photo
          .col-12.col-md-7.d-flex.gap-4.align-items-center.align-items-md-start.flex-wrap.justify-content-start
            div(v-if="imageSrc" class="image-preview")
              img(:src="imageSrc" alt="Preview")
              button(@click="removeImage" class="delete-icon")
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.53125 2V2.46875H9H11.5C11.5083 2.46875 11.5162 2.47204 11.5221 2.4779C11.528 2.48376 11.5312 2.49171 11.5312 2.5C11.5312 2.50829 11.528 2.51624 11.5221 2.5221C11.5162 2.52796 11.5083 2.53125 11.5 2.53125H11H10.5312V3V12C10.5312 12.088 10.5094 12.1737 10.4687 12.25V12V3V2.53125H10H2H1.53125V3V12V12.25C1.49058 12.1737 1.46875 12.088 1.46875 12V3V2.53125H1H0.5C0.491712 2.53125 0.483764 2.52796 0.477903 2.5221C0.472042 2.51624 0.46875 2.50829 0.46875 2.5C0.46875 2.49171 0.472042 2.48376 0.477903 2.4779C0.483764 2.47204 0.491712 2.46875 0.5 2.46875H3H3.46875V2V1.5C3.46875 1.2265 3.5774 0.964193 3.7708 0.770796C3.96419 0.577399 4.2265 0.46875 4.5 0.46875H7.5C7.7735 0.46875 8.03581 0.577399 8.2292 0.770796C8.4226 0.964193 8.53125 1.2265 8.53125 1.5V2ZM10 12.4688H10.25C10.1737 12.5094 10.088 12.5312 10 12.5312H2C1.912 12.5312 1.82625 12.5094 1.75 12.4688H2H10ZM8 2.46875H8.46875V2V1.5C8.46875 1.24307 8.36669 0.996667 8.18501 0.81499C8.00333 0.633314 7.75693 0.53125 7.5 0.53125H4.5C4.24307 0.53125 3.99667 0.633315 3.81499 0.81499C3.63331 0.996666 3.53125 1.24307 3.53125 1.5V2V2.46875H4H8ZM4.53125 5.5V9.5C4.53125 9.50829 4.52796 9.51624 4.5221 9.5221C4.51624 9.52796 4.50829 9.53125 4.5 9.53125C4.49171 9.53125 4.48376 9.52796 4.4779 9.5221C4.47204 9.51624 4.46875 9.50829 4.46875 9.5V5.5C4.46875 5.49171 4.47204 5.48376 4.4779 5.4779C4.48376 5.47204 4.49171 5.46875 4.5 5.46875C4.50829 5.46875 4.51624 5.47204 4.5221 5.4779C4.52796 5.48376 4.53125 5.49171 4.53125 5.5ZM7.53125 5.5V9.5C7.53125 9.50829 7.52796 9.51624 7.5221 9.5221C7.51624 9.52796 7.50829 9.53125 7.5 9.53125C7.49171 9.53125 7.48376 9.52796 7.4779 9.5221C7.47204 9.51624 7.46875 9.50829 7.46875 9.5V5.5C7.46875 5.49171 7.47204 5.48376 7.4779 5.4779C7.48376 5.47204 7.49171 5.46875 7.5 5.46875C7.50829 5.46875 7.51624 5.47204 7.5221 5.4779C7.52796 5.48376 7.53125 5.49171 7.53125 5.5Z" stroke="url(#paint0_linear_1260_634)" stroke-width="0.9375"/>
                  <defs>
                  <linearGradient id="paint0_linear_1260_634" x1="0" y1="6.50022" x2="12" y2="6.50022" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EF3E2C"/>
                  <stop offset="1" stop-color="#E71F63"/>
                  </linearGradient>
                  </defs>
                </svg>
            div(class="image-upload-box")
              input(type="file" @change="previewImage"  accept="image/*" class="file-input")
              .upload-icon
                svg(width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(d="M13.3333 12.3334L9.99997 9.00003M9.99997 9.00003L6.66663 12.3334M9.99997 9.00003V16.5M16.9916 14.325C17.8044 13.8819 18.4465 13.1808 18.8165 12.3322C19.1866 11.4837 19.2635 10.5361 19.0351 9.63894C18.8068 8.74182 18.2862 7.94629 17.5555 7.3779C16.8248 6.80951 15.9257 6.50064 15 6.50003H13.95C13.6977 5.5244 13.2276 4.61864 12.5749 3.85085C11.9222 3.08307 11.104 2.47324 10.1817 2.0672C9.25943 1.66116 8.25709 1.46949 7.25006 1.5066C6.24304 1.5437 5.25752 1.80861 4.36761 2.28142C3.47771 2.75422 2.70656 3.42261 2.11215 4.23635C1.51774 5.05008 1.11554 5.98797 0.935783 6.97952C0.756025 7.97107 0.803388 8.99047 1.07431 9.96108C1.34523 10.9317 1.83267 11.8282 2.49997 12.5834" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round")
              p
                span Click to upload
                span or drag and drop  
        .buttons.d-flex.justify-content-end.border-top(style="gap: 12px;padding-top: 32px")
              BaseButton(
                title="Reset"
                width= '80px'
                height= '40px'
                border='1px solid #D0D5DD'
                borderRadius= '8px'
                padding='10px 16px'
                fontsize='14px'
                centerTitles
                @click="resetInputs"
              )
              BaseButton(
                title="Add"
                width= '80px'
                height= '40px'
                :backGround="isFormValid"
                :GrayBackgroundColor="!isFormValid"
                borderRadius= '8px'
                padding='10px 16px'
                fontsize='14px'
                centerTitles
                @click="addUser"
              )        
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Warning } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";

const imageSrc = ref<string | null>(null);
const avatarUrl = ref<string>("");
const pendingImage = ref<boolean>(false);

import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const router = useRouter();
const checked = ref(false);

const schema = yup.object({
  userFirstName: yup
    .string()
    .min(3, "First Name must have at least 3 characters")
    .required("First Name is required"),
  userLastName: yup
    .string()
    .min(3, "Last Name must have at least 3 characters")
    .required("Last Name is required"),
  userEmail: yup.string().email("Invalid email").required("Email is required"),
  userPassword: yup
    .string()
    .min(8, "Password must have at least 8 characters")
    .required("Password is required"),
  userRole: yup.string().required("Role is required"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const {
  value: userFirstName,
  errorMessage: firstNameErrors,
  ...firstNameField
} = useField("userFirstName");

const {
  value: userLastName,
  errorMessage: lastNameErrors,
  ...lastNameField
} = useField("userLastName");

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

const {
  value: userRole,
  errorMessage: roleErrors,
  ...roleField
} = useField("userRole");

const isFormValid = computed(() => {
  return (
    !firstNameErrors.value &&
    !lastNameErrors.value &&
    !emailErrors.value &&
    !passwordErrors.value &&
    !roleErrors.value &&
    userFirstName.value &&
    userLastName.value &&
    userEmail.value &&
    userPassword.value &&
    userRole.value &&
    imageSrc.value !== null
  );
});

const options = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "customer",
    label: "Customer",
  },
];

// upload the image to supabase
const { $supabase } = useNuxtApp();
const uploadImage = async (file: File) => {
  const fileName = `${Date.now()}_${file.name}`;

  pendingImage.value = true;
  const { data, error } = await $supabase.storage
    .from("Nuxt-Task")
    .upload(fileName, file);
  pendingImage.value = false;

  if (error) {
    console.error("Error uploading file:", error.message);
    return;
  } else {
    const { publicUrl } = $supabase.storage
      .from("Nuxt-Task")
      .getPublicUrl(fileName).data;
    avatarUrl.value = publicUrl;
  }
};

// get the Image from input and call the uploadImage function
const previewImage = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file) {
    imageSrc.value = URL.createObjectURL(file);
    uploadImage(file);
  }
};
// remove the image
const removeImage = () => {
  imageSrc.value = null;
};

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
    message: "User added successfully",
    type: "success",
    duration: 2000,
  });
};

const addUser = handleSubmit(async () => {
  const fullname = userFirstName.value + " " + userLastName.value;
  console.log(fullname);
  console.log(userEmail.value);
  console.log(userPassword.value);
  console.log(avatarUrl.value);
  console.log(userRole.value);

  const { data, error } = await useAsyncGql({
    operation: "AddUser",
    variables: {
      name: fullname,
      email: userEmail.value,
      password: userPassword.value,
      avatar: avatarUrl.value,
      role: userRole.value,
    },
  });

  if (error.value) {
    const errorMessage =
      error.value.cause.gqlErrors[0].extensions.originalError.message[0];
    throwError(errorMessage);
  }
  if (data.value) {
    throwSuccess();
    userFirstName.value = "";
    userLastName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    avatarUrl.value = "";
    imageSrc.value = null;
  }
});

const resetInputs = () => {
  // if (
  //   userFirstName.value != undefined &&
  //   userLastName.value !== undefined &&
  //   userEmail.value !== undefined &&
  //   userPassword.value !== undefined &&
  //   imageSrc.value !== null
  // ) {
  // userFirstName.value = "";
  // userLastName.value = "";
  // userEmail.value = "";
  // userPassword.value = "";
  // avatarUrl.value = "";
  // imageSrc.value = null;
  // }
};
</script>

<style scoped>
.input-responsive,
.input-responsive2 {
  flex-basis: 0;
  flex-grow: 1;
}

.image-upload-box {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 428px;
  height: 104px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .input-responsive {
    flex-basis: auto;
    max-width: 248px;
  }
  .input-responsive2 {
    flex-basis: auto;
    max-width: 512px;
  }
  .image-upload-box {
    flex-basis: auto;
    max-width: 428px;
  }
}

.file-input {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
}

.upload-icon {
  margin-bottom: 8px;
}

.image-upload-box p {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.image-upload-box p span:nth-child(1) {
  color: #6941c6;
}

.image-upload-box p span:nth-child(2) {
  color: #475467;
}

.image-preview {
  position: relative;
}

.image-preview img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  object-fit: cover;
}

.delete-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
