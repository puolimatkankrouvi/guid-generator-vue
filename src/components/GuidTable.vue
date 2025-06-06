<script setup lang="ts">
  import type { GuidListItem } from '@/interfaces/guidListItem';
  import { DataTable, Column } from 'primevue';

  const props = defineProps({
    guidListItems: Array<GuidListItem>
  });
</script>

<template>
    <DataTable :value="props.guidListItems" tableStyle="max-width: 500px">
        <Column field="guid" header="Guid" />
    </DataTable>
</template>