<template lang="pug">
      .accountInformation(style= 'padding:0 32px 30px; margin-top:24px ').d-flex.flex-column.flex-md-row.justify-content-between.align-items-start.gap-4
                    div(style="background:#FFFFFF; padding: 32px 24px ;border-radius:8px;width: 100%")
                      h1(style='color:#101828;font-size: 20px;font-weight: 600;line-height: 24px;margin-bottom: 25px ')  Account info
                      div
                        .name.border-bottom.m-0.pb-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Name
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{name}}
                        .email.border-bottom.m-0.py-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Email address
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{email}}
                        .role.m-0.pt-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Role
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{role}}
                    div
                      BaseButton(
                        title="Edit"
                        width= '86px'
                        height= '40px'
                        border='1px solid #D0D5DD'
                        borderRadius= '8px'
                        padding='10px 16px'
                        fontsize='14px'
                        withIcon
                        whiteBackground='white'
                        @click="showForm = true"
                      )    
                          span(style='margin:4px 4px 0 0')
                            el-icon 
                              EditPen 
                    Teleport(to="body")
                      div(v-if="showForm" class="modal-overlay z-3 ")
                        div(class="modal-content mx-4")
                          h3.mb-3 Edit Username
                          el-input(
                            v-model="username"
                            style='width: 100%; height: 40px; margin-bottom: 15px'
                            size="large"
                            placeholder="Enter new username"
                            :prefix-icon="User"
                            class="custom-icon-size"
                            )
                          .buttons.d-flex(style="gap: 12px").flex-wrap.mt-2.mt-sm-0
                                BaseButton(
                                  title="UPDATE"
                                  width= '80px'
                                  height= '40px'
                                  backGround
                                  borderRadius= '8px'
                                  padding='10px 16px'
                                  fontsize='14px'
                                  centerTitles
                                  @click="updateUsername"
                                )
                                BaseButton(
                                  title="CLOSE"
                                  width= '80px'
                                  height= '40px'
                                  border='1px solid #D0D5DD'
                                  borderRadius= '8px'
                                  padding='10px 16px'
                                  fontsize='14px'
                                  centerTitles
                                  @click="showForm = false"
                                )          
</template>

<script setup lang="ts">
import { EditPen } from "@element-plus/icons-vue";
const showForm = ref(false);
const username = ref("");

interface Props {
  name: string;
  email: string;
  role: string;
  userId: string;
}

const { userId } = defineProps<Props>();
const emit = defineEmits(["refreshPage"]);
const updateUsername = async () => {
  const { data, error } = await useAsyncGql({
    operation: "UpdateUser",
    variables: { id: userId, name: username.value },
  });
  showForm.value = false;
  emit("refreshPage");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.051);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}
</style>
