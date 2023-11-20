<script lang="ts" setup>
import { Button } from "distro-ui";
import { md, useGlobalCMSState } from "distro-cmss";
import type { Elements } from "distro-cmss/dist/types";
import content from "@/content/index.json";

const { pageContent } = useGlobalCMSState();

const elements = computed(
  () =>
    pageContent.value.cms.pageElements as Elements<
      typeof content.cms.pageElements
    >,
);

useHead({
  title: pageContent.value.cms.pageTitle,
});
</script>

<template>
  <section>
    <h1 data-cms="title" v-html="md(elements.title)"></h1>
    <p data-cms="description" v-html="md(elements.description)"></p>
    <Button type="button" data-cms="cta" variant="primary">
      <template v-html="md(elements.cta)"></template>
    </Button>

    <br /><br /><br />

    <NuxtLink to="/me/about"> About Me </NuxtLink>

    <br /><br /><br />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      blanditiis consectetur doloribus eaque exercitationem, illo, inventore,
      laboriosam nostrum omnis quas repudiandae sint! Aliquam dolor facilis
      nostrum odit quam repudiandae voluptate.
    </p>
  </section>
</template>

<style scoped></style>
