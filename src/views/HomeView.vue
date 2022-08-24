<template>
<div class="m-4">
  
    <form @submit.prevent="submitForm" class="flex flex-col max-w-md gap-2">
      <input
        class="border-blue-500 border rounded-md"
        type="text"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="border-blue-500 border rounded-md"
        type="password"
        v-model="password"
        placeholder="Pass"
      />
      <button class="bg-blue-600 p-3 rounded-md" type="submit">
        Submit form
      </button>
    </form>
  
    <div v-for="user in userData" :key="user.id">
    <UserCard :user="user" />
    </div>
</div>

</template>

<script>
import UserCard from "@/components/UserCard.vue";
export default {
  components: {
    UserCard,
  },
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const user = {
        email: this.email,
        password: this.password,
        id: Date.now(),
      };
      this.email = "";
      this.password = "";
      this.$store.commit("pushData", user);
    },
  },
  computed: {
    userData() {
      return this.$store.state.data 
    }
  },
};
</script>
