package com.symplifica.techtest.DTO;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * DTO to model a Task request body for PUT and POST methods
 */
@Data
@NoArgsConstructor
public class TaskDto {

    @NotNull
    private String title;

    private String description;

    @FutureOrPresent
    private LocalDate dueDate;

    @NotNull
    @Builder.Default
    private Boolean completed = false;

}
