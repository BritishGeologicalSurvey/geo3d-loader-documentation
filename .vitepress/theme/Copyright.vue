<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <div class="doc-copyright">
    © UKRI (British Geological Survey) and the Polish Geological Institute
    {{ year }}.
  </div>
</template>

<style scoped>
.doc-copyright {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
