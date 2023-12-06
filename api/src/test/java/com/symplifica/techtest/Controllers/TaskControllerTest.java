package com.symplifica.techtest.Controllers;

import com.symplifica.techtest.Models.TaskModel;
import com.symplifica.techtest.Services.TaskService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(TaskController.class)
class TaskControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
            @Autowired
    TaskService service;

    @BeforeEach
    void setup(){
        this.mockMvc = MockMvcBuilders.standaloneSetup(new TaskController(service)).build();
    }

    @Test
    void getAllTask() throws Exception{
        var task1 = new TaskModel();
        task1.setId(1L);
        task1.setTitle("Take out the trash");
        task1.setCompleted(false);

        var task2 = new TaskModel();
        task1.setId(2L);
        task2.setTitle("Take out the trash");
        task2.setCompleted(true);

        var task3 = new TaskModel();
        task1.setId(3L);
        task3.setTitle("Take out the trash");
        task3.setCompleted(false);

        var taskList = new ArrayList<TaskModel>();
        taskList.add(task1);
        taskList.add(task2);
        taskList.add(task3);

        when(service.getAllTasks()).thenReturn(taskList);
        mockMvc.perform(get("/api/tasks"))
                .andDo(print())
                .andExpectAll(status().isOk(), jsonPath("$").isArray(), jsonPath("$.length()").value(3));

    }

    @Test
    void getTaskById() throws Exception{
        var task1 = new TaskModel();
        task1.setId(1L);
        task1.setTitle("Take out the trash");
        task1.setDescription("need to take out the trash");
        task1.setDueDate(LocalDate.of(2023, 12, 10));


        when(service.getById(1L)).thenReturn(task1);
        mockMvc.perform(get("/api/tasks/1"))
                .andDo(print())
                .andExpectAll(status().isOk(),
                        jsonPath("$.id").value(1),
                        jsonPath("$.title").value("Take out the trash"),
                        jsonPath("$.description").value("need to take out the trash"),
                        jsonPath("$.dueDate[0]").value(2023),
                        jsonPath("$.dueDate[1]").value(12),
                        jsonPath("$.dueDate[2]").value(10)
                );
    }

    @Test
    void createTask() {
    }

    @Test
    void updateTask() {
    }

    @Test
    void deleteTask() {
    }
}