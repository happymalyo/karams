<script setup>
import { ref, onMounted } from "vue"; // It's reactive like React useState

// Composition API approach
const name = ref("Hello Mario");
const status = ref("active");
const tasks = ref(["eat", "sleep", "code"]);
const newTask = ref("");
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    console.log(tasks);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  // You should bring this in from Vue
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  tasks.value = data.map((item) => item.title);
});
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User active</p>
  <p v-else>User inactive</p>
  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <ul>
    <li v-for="(item, index) in tasks" :key="item">
      <span
        >{{ item }}
        <button @click="deleteTask(index)" style="cursor: pointer">
          x
        </button></span
      >
    </li>
  </ul>
  <button @click="toggleStatus">Change status</button>
</template>
