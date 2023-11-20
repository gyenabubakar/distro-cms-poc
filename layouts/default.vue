<script lang="ts" setup>
import { useGlobalCMSState } from "distro-cmss";

const { showEditor } = useGlobalCMSState();

function toggleEditor() {
  showEditor.value = !showEditor.value;
}
</script>

<template>
  <div>
    <slot />

    <footer>
      <small @click="toggleEditor">Edit Page</small>
    </footer>
  </div>
</template>

<style scoped lang="scss">
footer {
  padding: 2rem;
  margin-top: 20vh;
  background-color: #202020;
  color: #f2f2f2;
  text-align: right;

  small {
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
}
</style>
