package Services;

import DTO.TaskDto;
import Models.TaskModel;
import Repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository){
        this.repository = repository;
    }

    public List<TaskModel> getAllTasks(){
        return repository.findAll();
    }

    public TaskModel getById(Long taskId){
        return repository.findById(taskId).orElseThrow();
    }

    public TaskModel createTask(TaskDto requestCreatedTask){
        var createdTask = new TaskModel();

        createdTask.setTitle(requestCreatedTask.getTitle());
        createdTask.setDescription(requestCreatedTask.getDescription());
        createdTask.setDueDate(requestCreatedTask.getDueDate());
        createdTask.setCompleted(requestCreatedTask.getCompleted());

        return repository.save(new TaskModel());
    }

    public TaskModel updateTask(Long taskId, TaskDto requestUpdatedTask){
        return repository.save(new TaskModel());
    }

    public void deleteTask(Long taskId){
        repository.deleteById(taskId);
    }
}
