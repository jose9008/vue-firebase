<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial Details</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.name"
        />
      </div>

      <div class="form-group">
        <label for="description">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="currentTutorial.autor"
        />
      </div>

      <div class="form-group">
        <label for="description">Url</label>
        <input
          type="text"
          class="form-control"
          id="url"
          v-model="currentTutorial.url"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteTutorial">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateTutorial">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: { 
    updateTutorial() {
      const data = {
        name: this.currentTutorial.name,
        author: this.currentTutorial.autor,
        url: this.currentTutorial.url,
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
