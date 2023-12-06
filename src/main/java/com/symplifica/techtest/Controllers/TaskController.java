package com.symplifica.techtest.Controllers;

import com.symplifica.techtest.DTO.TaskDto;
import com.symplifica.techtest.Models.TaskModel;
import com.symplifica.techtest.Services.TaskService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private TaskService service;

    @GetMapping
    public @ResponseBody List<TaskModel> getAllTask(){
        return service.getAllTasks();
    }

    @GetMapping("/{taskId}")
    public @ResponseBody TaskModel getTaskById(@PathVariable Long taskId){
        return service.getById(taskId);
    }

    @PostMapping
    public @ResponseBody TaskModel createTask(@RequestBody @Valid TaskDto newTask){
        return service.createTask(newTask);
    }

    @PutMapping("/{taskId}")
    public @ResponseBody TaskModel updateTask(@PathVariable Long taskId, @RequestBody TaskDto updatedTask){
        return service.updateTask(taskId, updatedTask);
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId){
        service.deleteTask(taskId);
    }

}
