<script>
export default {
  // Options API approach
  data() {
    return {
      name: "Hello Mario",
      status: "active",
      tasks: ["eat", "sleep", "code"],
      link: "https://www.google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User active</p>
  <p v-else>User inactive</p>
  <ul>
    <li v-for="item in tasks" :key="item">
      <span>{{ item }}</span>
    </li>
  </ul>
  <button @click="toggleStatus">Change status</button>
</template>
