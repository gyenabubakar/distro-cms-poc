<script setup lang="ts">
import { LoginForm, PageWrapper } from "distro-cmss";
import type {
  LoginFunctionReturnType,
  PageContentType,
} from "distro-cmss/dist/types";
import "distro-ui/main.css";
import "distro-cmss/style.css";

const route = useRoute();
let d = (await queryContent(
  route.path,
).findOne()) as unknown as PageContentType;

const pageContent = ref(d);

watch(
  () => route.path,
  async () => {
    d = (await queryContent(
      route.path,
    ).findOne()) as unknown as PageContentType;
    console.log(d);
    pageContent.value = d;
  },
);

function login() {
  return new Promise<LoginFunctionReturnType>((resolve) =>
    setTimeout(
      () =>
        resolve({
          token: "fake-token",
          refreshToken: "fake-refresh-token",
        }),
      1000,
    ),
  );
}
</script>

<template>
  <PageWrapper :content="pageContent" :route="route.path">
    <template #login-form>
      <LoginForm :login="login" />
    </template>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </PageWrapper>
</template>
