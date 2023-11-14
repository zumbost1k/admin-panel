<template>
  <section class="tab">
    <div class="tab-form">
      <div class="tab-header">
        <h2 class="tab-title">VIP job offers</h2>
      </div>
      <form action="">
        <li class="cities-list-item cities-list-create-item">
          <input required v-model="title" type="text" placeholder="new job title" class="cities-list-item-input" />
          <button type="button" class="cities-list-create-button">Add</button>
        </li>
        <li class="cities-list-item cities-list-create-item">
          <input required v-model="text" type="text" placeholder="new job text" class="cities-list-item-input" />
          <button type="button" class="cities-list-create-button">Add</button>
        </li>
        <div>
          <li class="cities-list-item cities-list-create-item">
            <input v-model="tagText" type="text" placeholder="new category tag" class="cities-list-item-input" />
            <button type="button" @click="addTag" class="cities-list-create-button">Add</button>
          </li>
          <span v-for="(tag, index) in tags.tags" :key="index">{{ tag }}</span>
        </div>

      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useCommentsStore } from '@/store/comments';
const commentsStore = useCommentsStore();
const title = ref('');
const text = ref('');
const tagText = ref('')
const tags = reactive({ tags: [] });

const addTag = () => {
  tags.tags.push(tagText.value);
  tagText.value = '';
}

</script>
<style>
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.tab-title {
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-right: 15px;
}

.tab-form {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.cities-list-create-button {
  color: #fff;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  padding: 10px 15px;
  transition-property: background-color, color;
  transition-duration: 130ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.save-changes-button:hover,
.cities-list-create-button:hover {
  color: #0d0d0d;
  background-color: #fff;
}

.cities-list,
.countries-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cities-list-item-wrapper {
  display: flex;
  align-items: center;
}

.cities-list-item:not(:last-child) {
  margin-bottom: 30px;
}

.districts-list-item:not(:last-child) {
  margin-bottom: 5px;
}

.cities-list-item-input {
  color: #fff;
  padding: 10px 25px;
  width: 100%;
  border: 1px solid #fff;
  background-color: #0d0d0d;
  transition: border-radius 130ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.cities-list-item-title {
  color: #fff;
  /* border: 1px solid #fff; */
  background-color: #0d0d0d;
  width: 100%;
  padding: 10px;
}

.cities-list-item-input:focus {
  outline: none;
  border-radius: 10px;
}

.cities-list-create-button {
  margin-left: 10px;
}

.cities-list {
  width: 95%;
  margin: 5px auto 0 auto;
}

.districts-list {
  width: 95%;
  margin: 5px auto 0 auto;
}

.cities-list-create-item {
  display: flex;
}
</style>
