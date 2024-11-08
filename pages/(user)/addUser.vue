<template lang="pug">
    div(style="padding: 32px  24px; background: #FCFCFD ")
        .headerSection.d-flex.justify-content-between.align-items-end 
          div
            h1(:style="{  fontWeight: '600', fontSize: '32px', lineHeight: '38px'}") Users
            p(:style="{color: '#475467',  fontWeight: '400', fontSize: '16px', lineHeight: '24px'}").m-0 Users 
              span(style='color: #343330 ; margin:0 4px') >
              |Add Users
        .infoSection
            div.d-flex.justify-content-between.align-items-end(style="margin: 32px 0 30px; padding-bottom:30px").border-bottom.flex-wrap.gap-3
              .about
                h1(:style="{color:'#101828',  fontWeight: '600', fontSize: '18px', lineHeight: '21px'}").mb-3 Add user account
                p(:style="{color: '#858589',  fontWeight: '500', fontSize: '14px', lineHeight: '16px'}").m-0 Add photo and personal details here 
              .buttons.d-flex(style="gap: 12px").flex-wrap.mt-2.mt-sm-0
                  BaseButton(
                    title="Reset"
                    width= '80px'
                    height= '40px'
                    border='1px solid #D0D5DD'
                    borderRadius= '8px'
                    padding='10px 16px'
                    fontsize='14px'
                    centerTitles
                  )
                  BaseButton(
                    title="Add"
                    width= '80px'
                    height= '40px'
                    backGround
                    borderRadius= '8px'
                    padding='10px 16px'
                    fontsize='14px'
                    centerTitles
                  )
            .accountInfo
              h1(style='color:#101828;font-size: 20px;font-weight: 600;line-height: 24px;margin-bottom: 25px ')  Account info
              userForm
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped></style>
