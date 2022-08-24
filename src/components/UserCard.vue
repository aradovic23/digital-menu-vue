<template>
  <div class="py-2 my-2 bg-slate-300 shadow-sm rounded-md max-w-md my-5 p-5">
    <h2 class="text-lg font-bold">{{ user.email }}</h2>
    <h4 class="text-sm">{{ user.password }}</h4>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

