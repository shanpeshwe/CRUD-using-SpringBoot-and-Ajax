package com.ajax.crud.dto;

import lombok.*;

import javax.persistence.Entity;

@Data
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private int id;

    private String name;

    private String email;

    private String address;
}
