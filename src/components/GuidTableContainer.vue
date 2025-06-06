<script setup lang="ts">
    import { ref, type Ref } from 'vue';
    import GuidTable from '../components/GuidTable.vue';
    import { generateGuidListItems } from '../helpers/guids';
    import type { GuidListItem } from '../interfaces/guidListItem';

    const guidListItems: Ref<Array<GuidListItem>> = ref([]);

    const generate = () => {
        guidListItems.value = generateGuidListItems();
    };
</script>

<template>
  <section>
    <Button @click="generate()">Generate guids</Button>
    <GuidTable :guidListItems />
  </section>
</template>