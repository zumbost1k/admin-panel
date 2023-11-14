<template>
  <section class="tab">
    <div class="tab-form">
      <div class="tab-header">
        <h2 class="tab-title">VIP job offers</h2>
      </div>
      <form @submit.prevent="sendPostToTheDesk" class="tab-form-to-center" >
        <li class="cities-list-item cities-list-create-item">
          <input required v-model="title" type="text" placeholder="new job title" class="cities-list-item-input" />
          <button type="button" class="cities-list-create-button">Add</button>
        </li>
        <li class="cities-list-item cities-list-create-item">
          <input required v-model="city" type="text" placeholder="new city" class="cities-list-item-input" />
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
          <div class="tags">
            <span @click="deleteTagByIndex(index)" class="tag" v-for="(tag, index) in tags.tags" :key="index">
              {{ tag }}
              <img src="@/icons/trash-icon.svg" width="24" height="24" alt="trash" />
            </span>
          </div>
        </div>
        <li class="cities-list-item cities-list-create-item">
          <input required id="city-input-photo" type="file" class="cities-list-item-input cities-list-item-input-photo"
            accept="image/,.png,.jpeg,.jpg" @change="handleFileChange" />
          <label class="cities-list-create-button-photo" for="city-input-photo">
            <span v-if="!postPhoto">Add Photo </span>
            <img v-if="!!postPhoto" :src="postPhoto" width="320" height="200" alt="post-photo">
          </label>

        </li>

        <button  class="cities-list-create-button-photo send-photo-button"
          type="submit">Send project to the desk</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useCommentsStore } from "@/store/comments";
import { v4 } from 'uuid';
const commentsStore = useCommentsStore();
const title = ref("");
const text = ref("");
const tagText = ref("");
const tags = reactive({ tags: [] });
const city = ref("");
const postPhoto = ref('')
const deleteTagByIndex = (index) => {
  tags.tags.splice(index, 1);
};


const handleFileChange = (event) => {
  if (event.target.files[0]) {
    postPhoto.value = URL.createObjectURL(event.target.files[0]);
  }
}
const addTag = () => {
  tags.tags.push(tagText.value);
  tagText.value = "";
};

const sendPostToTheDesk = () => {
  commentsStore.addComment({
    photo: postPhoto.value,
    header: title.value,
    text: text.value,
    commentId: v4(),
    tags,
    city: city.value,
    date: Date.now(),
  });
  postPhoto.value = ''
  city.value = ''
  title.value = ''
  text.value = ''

}
</script>
<style>
.cities-list-item-input-photo {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 61px;
}

label {
  display: block;
  position: relative;
}

.tab-form-to-center {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.tags {
  max-width: 300px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.tag {
  padding: 5px 10px;
  display: flex;
  gap: 5px;
  border: 1px solid #fff;
  align-items: center;
  cursor: pointer;
}

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
  justify-content: center;
}

.cities-list-create-button-photo,
.cities-list-create-button {
  color: #fff;
  background-color: #0d0d0d;
  border: 1px solid #fff;
  padding: 10px 15px;
  transition-property: background-color, color;
  transition-duration: 130ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.cities-list-create-button-photo:hover,
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
