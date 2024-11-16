<script setup>
import { ref } from "vue";
// Task list
const tasks = ref(["Sleep", "Play Foot", "Coding"]);
const newTask = ref("");
const currentId = ref("");
//Add task
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

const editTask = (index) => {
  newTask.value = tasks.value[index];
  currentId.value = index;
};
const update = () => {
  tasks.value.splice(currentId.value, 1, newTask.value);
};
</script>

<template>
  <div className="w-full bg-mainBG py-5 md:py-12 px-4 md:px-0">
    <div className="max-w-6xl mx-auto  p-4 bg-white  shadow-lg">
      <div class="max-w-md">
        <h1 className="text-2xl text-center text-title font-bold mb-4">
          My Learning Tasks
        </h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            v-model.number="newTask"
            className="flex-1 p-2 border rounded"
          />
          <div>
            <button
              className="ml-2 p-2 bg-blue text-white rounded hover:bg-blue-600"
              @click="addTask()"
            >
              Add
            </button>
            <button
              className="ml-2 p-2 text-white rounded bg-blue"
              @click="update()"
            >
              Update
            </button>
          </div>
        </div>
        <ul>
          <li
            v-for="(task, index) in tasks"
            :key="task"
            className="flex justify-between items-center mb-2"
          >
            <span className=""> {{ task }}</span>
            <div className="space-x-2">
              <button @click="deleteTask(index)">Delete</button
              ><button @click="editTask(index)">edit</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
