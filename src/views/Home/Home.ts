import { defineComponent } from "vue";
import Task from "../../models/Task";

export default defineComponent({
  name: "TheHome",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    setTaskComplete(task: Task): void {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task: Task) {
      this.$store.commit("deleteTask", task);
    },
  },
  mounted() {
    this.tasks = this.$store.state.tasks;
  },
});
