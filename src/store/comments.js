import { defineStore } from 'pinia';
import { v4 } from 'uuid';
export const useCommentsStore = defineStore('commentsStore', {
  state: () => ({
    comments: [
      {
        photo: 'HW.jpg',
        header: 'pls do my homework',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam, nulla ex qui nisi nemo et praesentium odit aliquam facilis deleniti repellendus fugiat veniam laborum suscipit quibusdam sapiente velit fugit!',
        commentId: v4(),
        tags: ['hard'],
        city: 'moskow',
        date: Date.now(),
      },
      {
        photo: 'HW.jpg',
        header: 'pls do my homework',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam, nulla ex qui nisi nemo et praesentium odit aliquam facilis deleniti repellendus fugiat veniam laborum suscipit quibusdam sapiente velit fugit!',
        commentId: v4(),
        tags: ['hard'],
        city: 'moskow',
        date: Date.now(),
      },
      {
        photo: 'HW.jpg',
        header: 'pls do my homework',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam, nulla ex qui nisi nemo et praesentium odit aliquam facilis deleniti repellendus fugiat veniam laborum suscipit quibusdam sapiente velit fugit!',
        commentId: v4(),
        tags: ['hard'],
        city: 'moskow',
        date: Date.now(),
      },
      {
        photo: 'HW.jpg',
        header: 'pls do my homework',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam, nulla ex qui nisi nemo et praesentium odit aliquam facilis deleniti repellendus fugiat veniam laborum suscipit quibusdam sapiente velit fugit!',
        commentId: v4(),
        tags: ['hard'],
        city: 'moskow',
        date: Date.now(),
      },
    ],
  }),
  getters: {},
  actions: {},
});
