<script setup lang="ts">
import { md, useGlobalCMSState } from "distro-cmss";
import type { Elements } from "distro-cmss/dist/types";
import content from "~/content/me/about.json";

const { pageContent } = useGlobalCMSState();

const elements = computed(
  () =>
    pageContent.value.cms.pageElements as Elements<
      typeof content.cms.pageElements
    >,
);

useHead({
  title: computed(() => {
    return pageContent.value.cms.pageTitle;
  }),
});
</script>

<template>
  <div>
    <h1 data-cms="title" v-html="md(elements.title)"></h1>
  </div>
</template>

<style scoped></style>
