package DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * DTO to model a Task request body for PUT and POST methods
 */
@Data
@NoArgsConstructor
public class TaskDto {

    private String title;

    private String description;

    private LocalDate dueDate;

    private Boolean completed;

}
